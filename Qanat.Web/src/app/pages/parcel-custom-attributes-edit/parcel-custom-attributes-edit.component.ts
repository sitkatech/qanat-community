import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, switchMap } from "rxjs";
import { routeParams } from "src/app/app.routes";
import { EntityCustomAttributesEditComponent } from "src/app/shared/components/entity-custom-attributes-edit/entity-custom-attributes-edit.component";
import { CustomAttributeService } from "src/app/shared/generated/api/custom-attribute.service";
import { CustomRichTextTypeEnum } from "src/app/shared/generated/enum/custom-rich-text-type-enum";
import { EntityCustomAttributesDto } from "src/app/shared/generated/model/entity-custom-attributes-dto";
import { Alert } from "src/app/shared/models/alert";
import { AlertContext } from "src/app/shared/models/enums/alert-context.enum";
import { AlertService } from "src/app/shared/services/alert.service";
import { EntityCustomAttributesEditComponent as EntityCustomAttributesEditComponent_1 } from "../../shared/components/entity-custom-attributes-edit/entity-custom-attributes-edit.component";
import { NgIf, AsyncPipe } from "@angular/common";
import { AlertDisplayComponent } from "../../shared/components/alert-display/alert-display.component";
import { PageHeaderComponent } from "src/app/shared/components/page-header/page-header.component";

@Component({
    selector: "parcel-custom-attributes-edit",
    templateUrl: "./parcel-custom-attributes-edit.component.html",
    styleUrl: "./parcel-custom-attributes-edit.component.scss",
    standalone: true,
    imports: [PageHeaderComponent, AlertDisplayComponent, NgIf, EntityCustomAttributesEditComponent_1, AsyncPipe],
})
export class ParcelCustomAttributesEditComponent implements OnInit {
    @ViewChild(EntityCustomAttributesEditComponent) entityCustomAttributesEditComponent: EntityCustomAttributesEditComponent;

    public parcelID: number;
    public parcelCustomAttributes$: Observable<EntityCustomAttributesDto>;
    public customRichTextTypeID = CustomRichTextTypeEnum.ParcelCustomAttributesEdit;
    public isLoadingSubmit: boolean = false;

    constructor(
        private customAttributeService: CustomAttributeService,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService
    ) {}

    public ngOnInit(): void {
        this.parcelCustomAttributes$ = this.route.paramMap.pipe(
            switchMap((paramMap) => {
                this.parcelID = parseInt(paramMap.get(routeParams.parcelID));
                return this.customAttributeService.customAttributesParcelsParcelIDGet(this.parcelID);
            })
        );
    }

    public canExit(): boolean {
        return this.entityCustomAttributesEditComponent.canExit();
    }

    public save(customAttributes: { [key: string]: string }) {
        this.isLoadingSubmit = true;

        // populate a dictionary of custom attributes with entered values
        const requestDto = new EntityCustomAttributesDto({ CustomAttributes: customAttributes });

        this.customAttributeService.customAttributesParcelsParcelIDPost(this.parcelID, requestDto).subscribe({
            next: () => {
                this.isLoadingSubmit = false;
                this.router.navigate([".."], { relativeTo: this.route }).then(() => {
                    this.alertService.pushAlert(new Alert("Custom attributes successfully saved.", AlertContext.Success));
                });
            },
            error: () => (this.isLoadingSubmit = false),
        });
    }
}
