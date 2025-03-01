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
export class ScenarioRunStatusSimpleDto { 
    ScenarioRunStatusID?: number;
    ScenarioRunStatusName?: string;
    ScenarioRunStatusDisplayName?: string;
    GETRunStatusID?: number;
    IsTerminal?: boolean;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export interface ScenarioRunStatusSimpleDtoForm { 
    ScenarioRunStatusID?: FormControl<number>;
    ScenarioRunStatusName?: FormControl<string>;
    ScenarioRunStatusDisplayName?: FormControl<string>;
    GETRunStatusID?: FormControl<number>;
    IsTerminal?: FormControl<boolean>;
}

export class ScenarioRunStatusSimpleDtoFormControls { 
    public static ScenarioRunStatusID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static ScenarioRunStatusName = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static ScenarioRunStatusDisplayName = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static GETRunStatusID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static IsTerminal = (value: FormControlState<boolean> | boolean = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<boolean>(
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
