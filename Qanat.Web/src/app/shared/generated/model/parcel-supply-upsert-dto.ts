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
export class ParcelSupplyUpsertDto { 
    ParcelIDs: Array<number>;
    EffectiveDate: string;
    TransactionAmount: number;
    WaterTypeID: number;
    UserComment?: string;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export interface ParcelSupplyUpsertDtoForm { 
    ParcelIDs: FormControl<Array<number>>;
    EffectiveDate: FormControl<string>;
    TransactionAmount: FormControl<number>;
    WaterTypeID: FormControl<number>;
    UserComment?: FormControl<string>;
}

export class ParcelSupplyUpsertDtoFormControls { 
    public static ParcelIDs = (value: FormControlState<Array<number>> | Array<number> = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<Array<number>>(
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
    public static EffectiveDate = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: true,
            validators: 
            [
                Validators.required,
                Validators.minLength(1),
                Validators.pattern(/^\\d{4}\\-\\d{1,2}\\-\\d{1,2}$/),
            ],
        }
    );
    public static TransactionAmount = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
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
    public static WaterTypeID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
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
    public static UserComment = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
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
