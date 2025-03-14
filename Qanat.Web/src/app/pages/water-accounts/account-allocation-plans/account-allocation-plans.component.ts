import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { routeParams } from "src/app/app.routes";
import { CustomRichTextTypeEnum } from "src/app/shared/generated/enum/custom-rich-text-type-enum";
import { GeographyDto } from "src/app/shared/generated/model/geography-dto";
import { AllocationPlanMinimalDto, WaterAccountDto, ZoneGroupMinimalDto, ZoneMinimalDto } from "src/app/shared/generated/model/models";
import { WaterAccountService } from "src/app/shared/generated/api/water-account.service";
import { PageHeaderComponent } from "src/app/shared/components/page-header/page-header.component";
import { NgIf, AsyncPipe } from "@angular/common";
import { AccountZoneCardComponent } from "src/app/shared/components/account-zone-card/account-zone-card.component";
import { AlertDisplayComponent } from "src/app/shared/components/alert-display/alert-display.component";
import { AllocationPlanSelectComponent } from "src/app/shared/components/allocation-plan-select/allocation-plan-select.component";
import { ModelNameTagComponent } from "src/app/shared/components/name-tag/name-tag.component";
import { PublicService } from "src/app/shared/generated/api/public.service";

@Component({
    selector: "account-allocation-plans",
    templateUrl: "./account-allocation-plans.component.html",
    styleUrls: ["./account-allocation-plans.component.scss"],
    standalone: true,
    imports: [NgIf, PageHeaderComponent, ModelNameTagComponent, RouterLink, AlertDisplayComponent, AccountZoneCardComponent, AllocationPlanSelectComponent, AsyncPipe],
})
export class AccountAllocationPlansComponent implements OnInit {
    public geography: GeographyDto;
    public waterAccount$: Observable<WaterAccountDto>;
    public allocationPlans$: Observable<AllocationPlanMinimalDto[]>;
    public zoneGroup$: Observable<ZoneGroupMinimalDto>;
    public accountZone: ZoneMinimalDto;

    public customRichTextTypeID = CustomRichTextTypeEnum.AccountAllocationPlans;
    public isLoading = true;

    constructor(private waterAccountService: WaterAccountService, private route: ActivatedRoute, private publicService: PublicService) {}

    ngOnInit(): void {
        this.waterAccount$ = this.route.paramMap.pipe(
            map((paramMap) => parseInt(paramMap.get(routeParams.waterAccountID))),
            switchMap((waterAccountID) => this.waterAccountService.waterAccountsWaterAccountIDGet(waterAccountID)),
            tap((waterAccount) => {
                this.geography = waterAccount.Geography;
                this.isLoading = false;

                this.allocationPlans$ = this.waterAccountService.waterAccountsWaterAccountIDAllocationPlansGet(waterAccount.WaterAccountID).pipe(
                    tap((allocationPlans) => {
                        if (allocationPlans.length > 0) {
                            this.zoneGroup$ = this.publicService
                                .publicGeographiesGeographyIDZoneGroupZoneGroupSlugGet(this.geography.GeographyID, allocationPlans[0].ZoneGroupSlug)
                                .pipe(
                                    tap((zoneGroup) => {
                                        this.accountZone = zoneGroup.ZoneList.find((x) => x.ZoneID == allocationPlans[0].ZoneID);
                                    })
                                );
                        }
                    })
                );
            })
        );
    }
}
