import { Component, OnInit } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, map, share, tap } from "rxjs";
import { SupportTicketUpsertDto, SupportTicketUpsertDtoForm, SupportTicketUpsertDtoFormControls } from "src/app/shared/generated/model/support-ticket-upsert-dto";
import { UserDto } from "src/app/shared/generated/model/user-dto";
import { AuthenticationService } from "src/app/shared/services/authentication.service";
import { PageHeaderComponent } from "../../shared/components/page-header/page-header.component";
import { FormFieldComponent, FormFieldType } from "../../shared/components/forms/form-field/form-field.component";
import { AsyncPipe, NgIf } from "@angular/common";
import { SearchWaterAccountsComponent } from "src/app/shared/components/search-water-accounts/search-water-accounts.component";
import { SelectDropdownOption } from "src/app/shared/components/inputs/select-dropdown/select-dropdown.component";
import { Alert } from "src/app/shared/models/alert";
import { AlertContext } from "src/app/shared/models/enums/alert-context.enum";
import { AlertService } from "src/app/shared/services/alert.service";
import { AlertDisplayComponent } from "../../shared/components/alert-display/alert-display.component";
import { CustomRichTextTypeEnum } from "src/app/shared/generated/enum/custom-rich-text-type-enum";
import { FaqDisplayComponent } from "../../shared/components/faqs/faq-display/faq-display.component";
import { FaqDisplayLocationTypeEnum } from "src/app/shared/generated/enum/faq-display-location-type-enum";
import { PublicService } from "src/app/shared/generated/api/public.service";
import { ReCaptchaV3Service, RecaptchaFormsModule, RecaptchaModule, RecaptchaV3Module } from "ng-recaptcha";
import { GeographyPublicDto } from "src/app/shared/generated/model/geography-public-dto";
import { SupportTicketQuestionTypesAsSelectDropdownOptions } from "src/app/shared/generated/enum/support-ticket-question-type-enum";

@Component({
    selector: "request-support",
    standalone: true,
    imports: [
        PageHeaderComponent,
        FormFieldComponent,
        ReactiveFormsModule,
        AsyncPipe,
        NgIf,
        SearchWaterAccountsComponent,
        AlertDisplayComponent,
        FaqDisplayComponent,
        RecaptchaModule,
        RecaptchaFormsModule,
        RecaptchaV3Module,
    ],
    templateUrl: "./request-support.component.html",
    styleUrl: "./request-support.component.scss",
})
export class RequestSupportComponent implements OnInit {
    public currentUser$: Observable<UserDto>;
    public geographyOptions$: Observable<SelectDropdownOption[]>;
    public SupportTicketQuestionTypesSelectDropdownOptions= SupportTicketQuestionTypesAsSelectDropdownOptions;
    public FormFieldType = FormFieldType;
    public customRichTextID = CustomRichTextTypeEnum.RequestSupport;
    public faqDisplayLocationID = FaqDisplayLocationTypeEnum.RequestSupport;

    public geographyData$: Observable<string[]>;
    public customAttributesOnLoad: string;
    public isLoading: boolean = true;
    public geographies: GeographyPublicDto[];

    public formGroup = new FormGroup<SupportTicketUpsertDtoForm>({
        WaterAccount: SupportTicketUpsertDtoFormControls.WaterAccount(),
        Description: SupportTicketUpsertDtoFormControls.Description(),
        GeographyID: SupportTicketUpsertDtoFormControls.GeographyID(),
        ContactFirstName: SupportTicketUpsertDtoFormControls.ContactFirstName(),
        ContactLastName: SupportTicketUpsertDtoFormControls.ContactLastName(),
        ContactEmail: SupportTicketUpsertDtoFormControls.ContactEmail(),
        ContactPhoneNumber: SupportTicketUpsertDtoFormControls.ContactPhoneNumber(),
        AssignedUserID: SupportTicketUpsertDtoFormControls.AssignedUserID(),
        SupportTicketQuestionTypeID: SupportTicketUpsertDtoFormControls.SupportTicketQuestionTypeID(),
    });

    constructor(
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService,
        private publicService: PublicService,
        private alertService: AlertService,
        private router: Router,
        private recaptchaV3Service: ReCaptchaV3Service
    ) {}

    ngOnInit() {
        this.currentUser$ = this.authenticationService.getCurrentUser().pipe(
            share(),
            tap((currentUser) => {
                this.formGroup.controls.ContactFirstName.setValue(currentUser.FirstName);
                this.formGroup.controls.ContactLastName.setValue(currentUser.LastName);
                this.formGroup.controls.ContactEmail.setValue(currentUser.Email);
                this.formGroup.controls.ContactPhoneNumber.setValue(currentUser.Phone);
            })
        );
        this.geographyOptions$ = this.publicService.publicGeographiesGet().pipe(
            tap((geographies) => {
                this.geographyData$ = this.route.queryParams.pipe(
                    tap((x) => {
                        if (x.GeographyName) {
                            this.formGroup.controls.GeographyID.setValue(geographies.find((y) => y.GeographyName.toLowerCase() == x.GeographyName.toLowerCase()).GeographyID);
                        }
                        if (x.GeographyID) {
                            this.formGroup.controls.GeographyID.setValue(parseInt(x.GeographyID));
                        }
                    }),
                    map((x) => {
                        return [];
                    })
                );
            }),
            map((geographies) => {
                this.geographies = geographies;
                let options = geographies.map((y) => ({ Value: y.GeographyID, Label: y.GeographyName } as SelectDropdownOption));
                options = [{ Value: null, Label: "- Select -", Disabled: true }, ...options]; // insert an empty option at the front
                return options;
            })
        );
    }

    clear() {
        this.formGroup.reset();
    }

    save() {
        this.alertService.clearAlerts();

        this.recaptchaV3Service.execute("importantAction").subscribe((token) => {
            const supportTicket = new SupportTicketUpsertDto({
                GeographyID: this.formGroup.controls.GeographyID.value,
                Description: this.formGroup.controls.Description.value,
                SupportTicketQuestionTypeID: this.formGroup.controls.SupportTicketQuestionTypeID.value,
                WaterAccount: this.formGroup.controls.WaterAccount.value,
                AssignedUserID: this.formGroup.controls.AssignedUserID.value,
                ContactFirstName: this.formGroup.controls.ContactFirstName.value,
                ContactLastName: this.formGroup.controls.ContactLastName.value,
                ContactEmail: this.formGroup.controls.ContactEmail.value,
                ContactPhoneNumber: this.formGroup.controls.ContactPhoneNumber.value,
            });
            this.publicService
                .publicSupportTicketsCreatePost(
                    undefined,
                    supportTicket.GeographyID,
                    supportTicket.Description,
                    undefined,
                    undefined,
                    supportTicket.SupportTicketQuestionTypeID,
                    supportTicket.WaterAccount?.WaterAccountID,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    supportTicket.ContactFirstName,
                    supportTicket.ContactLastName,
                    supportTicket.ContactEmail,
                    supportTicket.ContactPhoneNumber,
                    token
                )
                .subscribe(
                    (result) => {
                        this.router.navigateByUrl(`/`).then((x) => {
                            this.alertService.clearAlerts();
                            this.alertService.pushAlert(
                                new Alert("Your message has been submitted to the geography water managers and they will reach out soon", AlertContext.Success)
                            );
                        });
                    },
                    (error) => {
                        this.alertService.pushAlert(new Alert("Error occurred while attempting to create a new support ticket.", AlertContext.Danger));
                    }
                );
        });
    }
}
