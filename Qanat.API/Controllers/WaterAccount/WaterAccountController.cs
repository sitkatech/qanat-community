using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Qanat.API.Services;
using Qanat.API.Services.Attributes;
using Qanat.API.Services.Authorization;
using Qanat.EFModels.Entities;
using Qanat.Models.DataTransferObjects;
using Qanat.Models.Security;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Qanat.API.Controllers;

[ApiController]
[RightsChecker]
[Route("water-accounts")]
public class WaterAccountController : SitkaController<WaterAccountController>
{
    private readonly UserDto _callingUser;
    public WaterAccountController(QanatDbContext dbContext, ILogger<WaterAccountController> logger, IOptions<QanatConfiguration> qanatConfiguration, [FromServices] UserDto callingUser) : base(dbContext, logger, qanatConfiguration)
    {
        _callingUser = callingUser;
    }

    [HttpGet]
    [WithRolePermission(PermissionEnum.WaterAccountRights, RightsEnum.Read)]
    public ActionResult<List<WaterAccountMinimalDto>> GetAllWaterAccounts()
    {
        var waterAccountMinimalDtos = WaterAccounts.ListAsMinimalDtos(_dbContext);
        return Ok(waterAccountMinimalDtos);
    }
    

    [HttpGet("{waterAccountID}")]
    [EntityNotFound(typeof(WaterAccount), "waterAccountID")]
    [WithWaterAccountRolePermission(PermissionEnum.WaterAccountRights, RightsEnum.Read)]
    public ActionResult<WaterAccountDto> GetAccountByID([FromRoute] int waterAccountID)
    {
        var waterAccountDto = WaterAccounts.GetByIDAsDto(_dbContext, waterAccountID);
        return Ok(waterAccountDto);
    }

    [HttpPut("{waterAccountID}")]
    [EntityNotFound(typeof(WaterAccount), "waterAccountID")]
    [WithRoleFlag(FlagEnum.CanClaimWaterAccounts)]
    public ActionResult<WaterAccountDto> UpdateWaterAccount([FromRoute] int waterAccountID, [FromBody] WaterAccountUpdateDto waterAccountUpdateDto)
    {
        var waterAccountDto = WaterAccounts.UpdateAccountEntity(_dbContext, waterAccountID, waterAccountUpdateDto);
        return Ok(waterAccountDto);
    }

    [HttpDelete("{waterAccountID}")]
    [WithGeographyRolePermission(PermissionEnum.WaterAccountRights, RightsEnum.Delete)]
    public async Task<ActionResult> DeleteWaterAccount([FromRoute] int waterAccountID)
    {
        await WaterAccounts.DeleteWaterAccount(_dbContext, waterAccountID);
        return Ok();
    }

    [HttpGet("{waterAccountID}/geojson")]
    [EntityNotFound(typeof(WaterAccount), "waterAccountID")]
    [WithWaterAccountRolePermission(PermissionEnum.WaterAccountRights, RightsEnum.Read)]
    public ActionResult<WaterAccountGeoJSONDto> GetWaterAccountGeoJson([FromRoute] int waterAccountID)
    {
        var waterAccountGeoJSONDto = WaterAccounts.GetByIDAsWaterAccountGeoJSONDto(_dbContext, waterAccountID);
        return Ok(waterAccountGeoJSONDto);
    }

    [HttpPut("{waterAccountID}/edit-users")]
    [EntityNotFound(typeof(WaterAccount), "waterAccountID")]
    [WithGeographyRolePermission(PermissionEnum.WaterAccountRights, RightsEnum.Update)]
    public async Task<ActionResult<WaterAccountMinimalDto>> EditUsers([FromRoute] int waterAccountID, [FromBody] List<WaterAccountUserMinimalDto> waterAccountEditUsersDto)
    {
        if (!Users.ValidateAllExist(_dbContext, waterAccountEditUsersDto))
        {
            return NotFound("One or more of the User IDs was invalid.");
        }

        var updatedAccount = WaterAccounts.SetAssociatedUsers(_dbContext, waterAccountID, waterAccountEditUsersDto, out var addedUserIDs);
        if (addedUserIDs.Count > 0)
        {
            GeographyUsers.AddGeographyNormalUsersIfAbsent(_dbContext, addedUserIDs, updatedAccount.GeographyID);
        }

        return Ok(updatedAccount);
    }

    [HttpPut("{waterAccountID}/merge/{secondaryWaterAccountID}")]
    [EntityNotFound(typeof(WaterAccount), "waterAccountID")]
    [EntityNotFound(typeof(WaterAccount), "secondaryWaterAccountID")]
    [WithGeographyRolePermission(PermissionEnum.WaterAccountRights, RightsEnum.Update)]
    public async Task<ActionResult<WaterAccountMinimalDto>> MergeWaterAccounts([FromRoute] int waterAccountID, [FromRoute] int secondaryWaterAccountID, [FromBody] MergeWaterAccountsDto mergeDto)
    {
        var errors = WaterAccounts.ValidateMergeWaterAccounts(_dbContext, waterAccountID, secondaryWaterAccountID, mergeDto);
        errors.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var primaryAccount = await WaterAccounts.MergeWaterAccounts(_dbContext, waterAccountID, secondaryWaterAccountID, mergeDto, _callingUser);
        return Ok(primaryAccount);
    }

    [HttpGet("{waterAccountID}/water-budget-stats/years/{year}")]
    [EntityNotFound(typeof(WaterAccount), "waterAccountID")]
    [EntityNotFound(typeof(ReportingPeriod), "reportingPeriodID")]
    [WithWaterAccountRolePermission(PermissionEnum.WaterAccountRights, RightsEnum.Read)]
    public async Task<ActionResult<WaterAccountBudgetStatDto>> GetWaterMeasurementStatsForWaterBudget([FromRoute] int waterAccountID, [FromRoute] int year)
    {
        var waterAccount = WaterAccounts.GetByIDAsMinimalDto(_dbContext, waterAccountID);
        var budgetStats = await WaterMeasurements.GetWaterMeasurementStatsForWaterBudget(_dbContext, waterAccount.Geography.GeographyID, waterAccountID, year, _callingUser);
        return Ok(budgetStats);
    }


    [HttpGet("{waterAccountID}/water-type-monthly-supply/years/{year}")]
    [EntityNotFound(typeof(WaterAccount), "waterAccountID")]
    [WithWaterAccountRolePermission(PermissionEnum.WaterTransactionRights, RightsEnum.Read)]
    public ActionResult<List<WaterAccountWaterTypeMonthlySupplyDto>> GetWaterTypeSupplyFromAccountID([FromRoute] int waterAccountID, [FromRoute] int year)
    {
        var waterAccountTotalWaterTypeSupplyDtos = WaterTypeMonthlySupplies.ListByYearAndWaterAccount(_dbContext, year, waterAccountID);
        return Ok(waterAccountTotalWaterTypeSupplyDtos);
    }

    [HttpGet("{waterAccountID}/parcel-supplies/years/{year}/monthly-usage-summary")]
    [EntityNotFound(typeof(WaterAccount), "waterAccountID")]
    [WithWaterAccountRolePermission(PermissionEnum.WaterTransactionRights, RightsEnum.Read)]
    public ActionResult<List<WaterAccountParcelWaterMeasurementDto>> GetMonthlyUsageSummaryForWaterAccountAndReportingPeriod([FromRoute] int waterAccountID, [FromRoute] int year)
    {
        var userID = UserContext.GetUserFromHttpContext(_dbContext, HttpContext).UserID;
        var waterAccountParcelWaterMeasurementDtos = MonthlyUsageSummary.ListByWaterAccountAndYear(_dbContext, waterAccountID, year, userID);
        return Ok(waterAccountParcelWaterMeasurementDtos);
    }

    [HttpGet("{waterAccountID}/recent-effective-dates/years/{year}")]
    [EntityNotFound(typeof(WaterAccount), "waterAccountID")]
    [WithWaterAccountRolePermission(PermissionEnum.WaterTransactionRights, RightsEnum.Read)]
    public ActionResult<MostRecentEffectiveDatesDto> GetMostRecentSupplyAndUsageDateByAccountID([FromRoute] int waterAccountID, int year)
    {
        var mostRecentEffectiveDates = WaterAccountMostRecentEffectiveDate.GetMostRecentEffectiveDatesByWaterAccount(_dbContext, waterAccountID, year);
        return Ok(mostRecentEffectiveDates);
    }

    [HttpPatch("{waterAccountID}/update-parcels")]
    [EntityNotFound(typeof(WaterAccount), "waterAccountID")]
    [WithGeographyRolePermission(PermissionEnum.WaterAccountRights, RightsEnum.Update)]
    public async Task<ActionResult<WaterAccountMinimalDto>> UpdateWaterAccountParcels([FromRoute] int waterAccountID, [FromBody] UpdateWaterAccountParcelsDto dto)
    {
        var errors = WaterAccounts.ValidateUpdateWaterAccountParcels(_dbContext, waterAccountID, dto);
        errors.ForEach(vm => { ModelState.AddModelError(vm.Type, vm.Message); });
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var user = UserContext.GetUserFromHttpContext(_dbContext, HttpContext);
        var waterAccountMinimalDto = await WaterAccounts.UpdateWaterAccountParcels(_dbContext, waterAccountID, dto.EffectiveYear, dto.ParcelIDs, user.UserID);

        return Ok(waterAccountMinimalDto);
    }

    [HttpGet("{waterAccountID}/allocation-plans")]
    [EntityNotFound(typeof(WaterAccount), "waterAccountID")]
    [WithWaterAccountRolePermission(PermissionEnum.AllocationPlanRights, RightsEnum.Read)]
    public ActionResult<List<AllocationPlanMinimalDto>> GetAccountAllocationPlansByAccountID([FromRoute] int waterAccountID)
    {
        var account = WaterAccounts.GetByID(_dbContext, waterAccountID);

        var geographyAllocationPlan = GeographyAllocationPlanConfigurations.GetByGeographyID(_dbContext, account.GeographyID);
        if (geographyAllocationPlan == null)
        {
            return Ok(new List<AllocationPlanMinimalDto>());
        }

        var parcelIDs = Parcels.ListByWaterAccountID(_dbContext, waterAccountID).Select(x => x.ParcelID).ToList();

        var parcelZoneIDs = _dbContext.ParcelZones
            .Include(x => x.Zone).AsNoTracking()
            .Where(x => parcelIDs.Contains(x.ParcelID) && x.Zone.ZoneGroupID == geographyAllocationPlan.ZoneGroupID)
            .Select(x => x.ZoneID).ToList();

        var allocationPlans =
            AllocationPlans.ListByGeographyIDAndZoneIDsAsSimpleDto(_dbContext, account.GeographyID, parcelZoneIDs);

        return allocationPlans;
    }

    [HttpGet("current-user")]
    [WithRoleFlag(FlagEnum.CanClaimWaterAccounts)]
    public ActionResult<List<WaterAccountMinimalDto>> ListByCurrentUser()
    {
        var user = UserContext.GetUserFromHttpContext(_dbContext, HttpContext);

        var waterAccountMinimalDtos = WaterAccounts.ListByUserAsMinimalDtos(_dbContext, user);

        return Ok(waterAccountMinimalDtos);
    }
}