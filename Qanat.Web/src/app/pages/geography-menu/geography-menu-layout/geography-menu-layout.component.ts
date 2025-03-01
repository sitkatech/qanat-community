import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { combineLatest, map, Observable, share, startWith, switchMap, tap } from "rxjs";
import { routeParams } from "src/app/app.routes";
import { AuthenticationService } from "src/app/shared/services/authentication.service";
import { GeographyFlagCheck } from "src/app/shared/directives/with-geography-flag.directive";
import { FlagEnum } from "src/app/shared/generated/enum/flag-enum";
import { GeographyDto } from "src/app/shared/generated/model/geography-dto";
import { UserDto } from "src/app/shared/generated/model/user-dto";
import { GeographyLogoComponent } from "../../../shared/components/geography-logo/geography-logo.component";
import { LoadingDirective } from "../../../shared/directives/loading.directive";
import { NgIf, AsyncPipe } from "@angular/common";
import { DashboardMenu, DashboardMenuComponent } from "src/app/shared/components/dashboard-menu/dashboard-menu.component";
import { PublicService } from "src/app/shared/generated/api/public.service";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { GeographySwitcherComponent } from "../../../shared/components/geography-switcher/geography-switcher.component";
import { CurrentGeographyService } from "src/app/shared/services/current-geography.service";
import { GeographyMinimalDto } from "src/app/shared/generated/model/geography-minimal-dto";
import { GeographyService } from "src/app/shared/generated/api/geography.service";

@Component({
    selector: "geography-menu-layout",
    templateUrl: "./geography-menu-layout.component.html",
    styleUrls: ["./geography-menu-layout.component.scss"],
    standalone: true,
    imports: [NgIf, LoadingDirective, GeographyLogoComponent, DashboardMenuComponent, RouterOutlet, AsyncPipe, IconComponent, GeographySwitcherComponent],
})
export class GeographyMenuLayoutComponent implements OnInit {
    public geography$: Observable<GeographyMinimalDto>;
    public FlagEnum = FlagEnum;
    public isLoading: boolean = true;
    public geographyDashboardMenu: DashboardMenu;
    public withGeographyFlag: GeographyFlagCheck;
    public geographyName: string;

    constructor(
        private currentGeographyService: CurrentGeographyService,
        private geographyService: GeographyService,
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService
    ) {}

    ngOnInit(): void {
        this.geography$ = this.route.paramMap.pipe(
            switchMap((paramMap) => {
                const geographyName = paramMap.get(routeParams.geographyName);
                return combineLatest({
                    geography: this.geographyService.geographiesGeographyNameGeographyNameMinimalGet(geographyName),
                    user: this.authenticationService.getCurrentUser(),
                });
            }),
            tap((x) => {
                this.geographyDashboardMenu = this.buildGeographyMenu(x.geography, x.user);
                this.currentGeographyService.setCurrentGeography(x.geography);
                this.isLoading = false;
            }),
            map((x) => x.geography)
        );
    }

    buildGeographyMenu(geography: GeographyMinimalDto, currentUser: UserDto): DashboardMenu {
        if (geography == null) return null;
        const geographySlug = geography.GeographyName.toLowerCase();
        const menu = {
            menuItems: [
                {
                    title: geography.GeographyDisplayName,
                    icon: "Geography",
                    routerLink: ["/geographies", geographySlug],
                    routerLinkActiveOptions: {
                        matrixParams: "ignored",
                        queryParams: "ignored",
                        fragment: "exact",
                        paths: "subset",
                    },
                    isDropdown: true,
                    preventCollapse: true,
                    isExpanded: true,
                    menuItems: [
                        {
                            title: "Overview",
                            routerLink: ["/geographies", geographySlug, "overview"],
                        },
                        {
                            title: "Allocation Plans",
                            routerLink: ["/geographies", geographySlug, "allocation-plans"],
                            routerLinkActiveOptions: {
                                matrixParams: "ignored",
                                queryParams: "ignored",
                                fragment: "exact",
                                paths: "subset",
                            },
                            isDisabled: !geography.AllocationPlansVisibleToLandowners || (!currentUser && !geography.AllocationPlansVisibleToPublic),
                        },
                        {
                            title: "Groundwater Levels",
                            routerLink: ["/geographies", geographySlug, "groundwater-levels"],
                        },
                        {
                            title: " Platform Sign-up",
                            routerLink: ["/", geographySlug],
                            routerLinkActiveOptions: {
                                matrixParams: "ignored",
                                queryParams: "ignored",
                                fragment: "exact",
                                paths: "subset",
                            },
                            isDisabled: !geography.GeographyConfiguration.LandingPageEnabled || (!currentUser && !geography.GeographyConfiguration.LandingPageEnabled),
                        },
                        {
                            title: "Support & Contact",
                            routerLink: ["/geographies", geographySlug, "support"],
                        },
                        {
                            title: "Back to All Geographies",
                            icon: "ArrowLeft",
                            routerLink: ["/geographies"],
                            cssClasses: "border-top",
                        },
                    ],
                },
            ],
        } as DashboardMenu;

        return menu;
    }
}
