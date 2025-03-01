﻿using Qanat.API.Services;
using Qanat.API.Services.Authorization;
using Qanat.EFModels.Entities;
using Qanat.Models.DataTransferObjects;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Qanat.API.Controllers
{
    [ApiController]
    [RightsChecker]

    public class ImpersonationController : SitkaController<ImpersonationController>
    {
        private readonly ImpersonationService _impersonationService;

        public ImpersonationController(QanatDbContext dbContext, ILogger<ImpersonationController> logger, IOptions<QanatConfiguration> qanatConfiguration, ImpersonationService impersonationService)
            : base(dbContext, logger, qanatConfiguration)
        {
            _impersonationService = impersonationService;
        }

        [HttpPost("/impersonate/{userID}")]
        [WithRoleFlag(FlagEnum.CanImpersonateUsers)]
        public ActionResult<UserDto> ImpersonateUser([FromRoute] int userID)
        {
            var userToImpersonate = Users.GetByUserID(_dbContext, userID);

            if (userToImpersonate == null)
            {
                return NotFound($"There is no user with ID: {userID}");
            }

            return Ok(_impersonationService.ImpersonateUser(HttpContext, userToImpersonate));
        }

        [HttpPost("/impersonate/stop-impersonation")]
        [StopImpersonationAuthorization]
        public ActionResult<UserDto> StopImpersonation()
        {
            return Ok(_impersonationService.StopImpersonation(HttpContext));
        }
    }
}