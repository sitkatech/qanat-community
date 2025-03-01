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
import { AlertMessageTypeEnum } from '././alert-message-type-enum';

import { FormControl, FormControlOptions, FormControlState, Validators } from "@angular/forms";
export class AlertMessageDto { 
    AlertMessageType?: AlertMessageTypeEnum;
    Message?: string;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export interface AlertMessageDtoForm { 
    AlertMessageType?: FormControl<AlertMessageTypeEnum>;
    Message?: FormControl<string>;
}

export class AlertMessageDtoFormControls { 
    public static AlertMessageType = (value: FormControlState<AlertMessageTypeEnum> | AlertMessageTypeEnum = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<AlertMessageTypeEnum>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static Message = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
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
