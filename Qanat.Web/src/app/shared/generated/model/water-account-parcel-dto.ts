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
import { WaterAccountMinimalDto } from '././water-account-minimal-dto';

import { FormControl, FormControlOptions, FormControlState, Validators } from "@angular/forms";
export class WaterAccountParcelDto { 
    WaterAccountParcelID?: number;
    GeographyID?: number;
    WaterAccountID?: number;
    ParcelID?: number;
    EffectiveYear?: number;
    EndYear?: number;
    WaterAccount?: WaterAccountMinimalDto;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export interface WaterAccountParcelDtoForm { 
    WaterAccountParcelID?: FormControl<number>;
    GeographyID?: FormControl<number>;
    WaterAccountID?: FormControl<number>;
    ParcelID?: FormControl<number>;
    EffectiveYear?: FormControl<number>;
    EndYear?: FormControl<number>;
    WaterAccount?: FormControl<WaterAccountMinimalDto>;
}

export class WaterAccountParcelDtoFormControls { 
    public static WaterAccountParcelID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static GeographyID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static WaterAccountID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
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
    public static EffectiveYear = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
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
    public static WaterAccount = (value: FormControlState<WaterAccountMinimalDto> | WaterAccountMinimalDto = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<WaterAccountMinimalDto>(
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
