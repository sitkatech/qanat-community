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
export class SupportTicketQuestionTypeSimpleDto { 
    SupportTicketQuestionTypeID?: number;
    SupportTicketQuestionTypeName?: string;
    SupportTicketQuestionTypeDisplayName?: string;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export interface SupportTicketQuestionTypeSimpleDtoForm { 
    SupportTicketQuestionTypeID?: FormControl<number>;
    SupportTicketQuestionTypeName?: FormControl<string>;
    SupportTicketQuestionTypeDisplayName?: FormControl<string>;
}

export class SupportTicketQuestionTypeSimpleDtoFormControls { 
    public static SupportTicketQuestionTypeID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static SupportTicketQuestionTypeName = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static SupportTicketQuestionTypeDisplayName = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
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
