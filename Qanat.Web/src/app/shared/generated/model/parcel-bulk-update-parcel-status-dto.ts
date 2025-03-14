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

import { FormControl, FormControlOptions, FormControlState, Validators } from "@angular/forms";
export class ParcelBulkUpdateParcelStatusDto { 
    ParcelIDs?: Array<number>;
    ParcelStatusID?: number;
    EndYear?: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export interface ParcelBulkUpdateParcelStatusDtoForm { 
    ParcelIDs?: FormControl<Array<number>>;
    ParcelStatusID?: FormControl<number>;
    EndYear?: FormControl<number>;
}

export class ParcelBulkUpdateParcelStatusDtoFormControls { 
    public static ParcelIDs = (value: FormControlState<Array<number>> | Array<number> = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<Array<number>>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static ParcelStatusID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static EndYear = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
}
