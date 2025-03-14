/**
 * Qanat.API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { WellRegistrationFileResourceUpsertDtoAllOf } from '././well-registration-file-resource-upsert-dto-all-of';
import { WellRegistrationFileResourceUpdateDto } from '././well-registration-file-resource-update-dto';

import { FormControl, FormControlOptions, FormControlState, Validators } from "@angular/forms";
export class WellRegistrationFileResourceUpsertDto { 
    FileDescription?: string;
    WellRegistrationFileResourceID?: number;
    WellRegistrationID: number;
    File: Blob;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export interface WellRegistrationFileResourceUpsertDtoForm { 
    FileDescription?: FormControl<string>;
    WellRegistrationFileResourceID?: FormControl<number>;
    WellRegistrationID: FormControl<number>;
    File: FormControl<Blob>;
}

export class WellRegistrationFileResourceUpsertDtoFormControls { 
    public static FileDescription = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
                Validators.minLength(0),
                Validators.maxLength(200),
            ],
        }
    );
    public static WellRegistrationFileResourceID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static WellRegistrationID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: true,
            validators: 
            [
                Validators.required,
            ],
        }
    );
    public static File = (value: FormControlState<Blob> | Blob = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<Blob>(
        value,
        formControlOptions ?? 
        {
            nonNullable: true,
            validators: 
            [
                Validators.required,
            ],
        }
    );
}
