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
export class ZoneMinimalDto { 
    ZoneID?: number;
    ZoneGroupID?: number;
    ZoneName?: string;
    ZoneSlug?: string;
    ZoneDescription?: string;
    ZoneColor?: string;
    ZoneAccentColor?: string;
    PrecipMultiplier?: number;
    SortOrder?: number;
    ZoneGroupName?: string;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export interface ZoneMinimalDtoForm { 
    ZoneID?: FormControl<number>;
    ZoneGroupID?: FormControl<number>;
    ZoneName?: FormControl<string>;
    ZoneSlug?: FormControl<string>;
    ZoneDescription?: FormControl<string>;
    ZoneColor?: FormControl<string>;
    ZoneAccentColor?: FormControl<string>;
    PrecipMultiplier?: FormControl<number>;
    SortOrder?: FormControl<number>;
    ZoneGroupName?: FormControl<string>;
}

export class ZoneMinimalDtoFormControls { 
    public static ZoneID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static ZoneGroupID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static ZoneName = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static ZoneSlug = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static ZoneDescription = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static ZoneColor = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static ZoneAccentColor = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static PrecipMultiplier = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static SortOrder = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static ZoneGroupName = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
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
