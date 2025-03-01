import { Injectable } from "@angular/core";
import { LogsEvent, datadogLogs } from "@datadog/browser-logs";
import { NetworkLogsEventDomainContext } from "@datadog/browser-logs/cjs/domainContext.types";
import { environment } from "src/environments/environment";
import { SystemInfoService } from "../generated/api/system-info.service";
import { AuthenticationService } from "src/app/shared/services/authentication.service";
import { Observable, forkJoin } from "rxjs";
import { UserDto } from "../generated/model/user-dto";

@Injectable({
    providedIn: "root",
})
export class DatadogService {
    private currentUser$: Observable<UserDto>;
    constructor(
        private systemInfoService: SystemInfoService,
        private authenticationService: AuthenticationService
    ) {}

    init() {
        this.currentUser$ = this.authenticationService.getCurrentUser();

        forkJoin([this.systemInfoService.getSystemInfo(), this.currentUser$]).subscribe(([systemInfo, currentUser]) => {
            const env = environment.production ? "prod" : environment.staging ? "qa" : "dev";
            datadogLogs.init({
                clientToken: environment.datadogClientToken,
                site: "datadoghq.com",
                forwardErrorsToLogs: true,
                version: systemInfo.Version,
                sessionSampleRate: 100,
                service: "qanat-angular",
                env,
                beforeSend: (log: LogsEvent, context: NetworkLogsEventDomainContext) => {
                    if (environment.dev) {
                        return false;
                    }
                    log.team = "h2o";
                    log.userGuid = currentUser.UserGuid;
                    log.environment = env;
                    return true;
                },
            });
        });
    }
}
