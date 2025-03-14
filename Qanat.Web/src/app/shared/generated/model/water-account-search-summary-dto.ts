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
import { WaterAccountSearchResultWithMatchedFieldsDto } from '././water-account-search-result-with-matched-fields-dto';

import { FormControl, FormControlOptions, FormControlState, Validators } from "@angular/forms";
export class WaterAccountSearchSummaryDto { 
    TotalResults?: number;
    WaterAccountSearchResults?: Array<WaterAccountSearchResultWithMatchedFieldsDto>;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export interface WaterAccountSearchSummaryDtoForm { 
    TotalResults?: FormControl<number>;
    WaterAccountSearchResults?: FormControl<Array<WaterAccountSearchResultWithMatchedFieldsDto>>;
}

export class WaterAccountSearchSummaryDtoFormControls { 
    public static TotalResults = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static WaterAccountSearchResults = (value: FormControlState<Array<WaterAccountSearchResultWithMatchedFieldsDto>> | Array<WaterAccountSearchResultWithMatchedFieldsDto> = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<Array<WaterAccountSearchResultWithMatchedFieldsDto>>(
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
