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
export class WaterMeasurementSelfReportCreateDto { 
    WaterMeasurementTypeID: number;
    ReportingYear: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export interface WaterMeasurementSelfReportCreateDtoForm { 
    WaterMeasurementTypeID: FormControl<number>;
    ReportingYear: FormControl<number>;
}

export class WaterMeasurementSelfReportCreateDtoFormControls { 
    public static WaterMeasurementTypeID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
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
    public static ReportingYear = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
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
