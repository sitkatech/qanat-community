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
import { ParcelSupplyDetailDto } from '././parcel-supply-detail-dto';

import { FormControl, FormControlOptions, FormControlState, Validators } from "@angular/forms";
export class ParcelActivityDto { 
    ParcelID?: number;
    EffectiveDate?: string;
    TransactionTypeID?: number;
    WaterTypeID?: number;
    TransactionAmount?: number;
    ParcelSupplies?: Array<ParcelSupplyDetailDto>;
    readonly ParcelActivityKey?: string;
    ParcelCount?: number;
    ParcelArea?: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export interface ParcelActivityDtoForm { 
    ParcelID?: FormControl<number>;
    EffectiveDate?: FormControl<string>;
    TransactionTypeID?: FormControl<number>;
    WaterTypeID?: FormControl<number>;
    TransactionAmount?: FormControl<number>;
    ParcelSupplies?: FormControl<Array<ParcelSupplyDetailDto>>;
    ParcelActivityKey?: FormControl<string>;
    ParcelCount?: FormControl<number>;
    ParcelArea?: FormControl<number>;
}

export class ParcelActivityDtoFormControls { 
    public static ParcelID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static EffectiveDate = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static TransactionTypeID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static WaterTypeID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static TransactionAmount = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static ParcelSupplies = (value: FormControlState<Array<ParcelSupplyDetailDto>> | Array<ParcelSupplyDetailDto> = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<Array<ParcelSupplyDetailDto>>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static ParcelActivityKey = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static ParcelCount = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static ParcelArea = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
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
