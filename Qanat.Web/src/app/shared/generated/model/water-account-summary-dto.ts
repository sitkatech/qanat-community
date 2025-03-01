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
import { ZoneDisplayDto } from '././zone-display-dto';

import { FormControl, FormControlOptions, FormControlState, Validators } from "@angular/forms";
export class WaterAccountSummaryDto { 
    WaterAccountID?: number;
    WaterAccountNumber?: number;
    GeographyName?: string;
    Zones?: Array<ZoneDisplayDto>;
    NumOfParcels?: number;
    Area?: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export interface WaterAccountSummaryDtoForm { 
    WaterAccountID?: FormControl<number>;
    WaterAccountNumber?: FormControl<number>;
    GeographyName?: FormControl<string>;
    Zones?: FormControl<Array<ZoneDisplayDto>>;
    NumOfParcels?: FormControl<number>;
    Area?: FormControl<number>;
}

export class WaterAccountSummaryDtoFormControls { 
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
    public static WaterAccountNumber = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static GeographyName = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static Zones = (value: FormControlState<Array<ZoneDisplayDto>> | Array<ZoneDisplayDto> = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<Array<ZoneDisplayDto>>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static NumOfParcels = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static Area = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
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
