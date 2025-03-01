import { Component, Inject, Renderer2, ViewContainerRef } from "@angular/core";
import { environment } from "../environments/environment";
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd, RouterOutlet } from "@angular/router";
import { BusyService } from "./shared/services";
import { Title } from "@angular/platform-browser";
import { DOCUMENT, NgIf } from "@angular/common";
import { UserDto } from "./shared/generated/model/user-dto";
import { AuthenticationService } from "./shared/services/authentication.service";
import { RoleEnum } from "./shared/generated/enum/role-enum";
import { UtilityFunctionsService } from "./shared/services/utility-functions.service";
import { FooterNavComponent } from "./shared/footer-nav/footer-nav.component";
import { HeaderNavComponent } from "./shared/components/header-nav/header-nav.component";

declare let require: any;

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    standalone: true,
    imports: [HeaderNavComponent, NgIf, RouterOutlet, FooterNavComponent],
})
export class AppComponent {
    userClaimsUpsertStarted = false;
    isIframe = false;
    ignoreSessionTerminated = false;

    private currentUser: UserDto;
    public currentYear: number = new Date().getFullYear();

    private userRoleClassName: string;

    constructor(
        @Inject(DOCUMENT) private _document: Document,
        private router: Router,
        private busyService: BusyService,
        private titleService: Title,
        private renderer: Renderer2,
        private authenticationService: AuthenticationService,
        private utilityFunctionService: UtilityFunctionsService,
        public viewRef: ViewContainerRef
    ) {}

    ngOnInit() {
        this.isIframe = window !== window.parent && !window.opener;

        const environmentClassName = environment.production ? "env-prod" : environment.staging ? "env-qa" : "env-dev";
        this.renderer.addClass(this._document.body, environmentClassName);

        this.authenticationService.currentUserSetObservable.subscribe((currentUser) => {
            this.currentUser = currentUser;

            if (this.userRoleClassName) {
                this.renderer.removeClass(this._document.body, this.userRoleClassName);
            }

            const role = RoleEnum[this.currentUser.RoleID];
            if (role) {
                this.userRoleClassName = "role-" + this.utilityFunctionService.stringToKebabCase(role);
                this.renderer.addClass(this._document.body, this.userRoleClassName);
            }
        });

        this.router.events.subscribe((event: any) => {
            if (event instanceof RouteConfigLoadStart) {
                // lazy loaded route started
                this.busyService.setBusy(true);
            } else if (event instanceof RouteConfigLoadEnd) {
                // lazy loaded route ended
                this.busyService.setBusy(false);
            } else if (event instanceof NavigationEnd) {
                window.scrollTo(0, 0);
            }
        });

        this.titleService.setTitle(`${environment.platformLongName}`);
        this.setAppFavicon();
    }

    setAppFavicon() {
        this._document.getElementById("appFavicon").setAttribute("href", "assets/main/favicons/favicon.ico");
    }
}
