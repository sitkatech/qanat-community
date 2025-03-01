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
import { BoundingBoxDto } from '././bounding-box-dto';
import { UsageEntityWithGeoJSONDto } from '././usage-entity-with-geo-json-dto';
import { ParcelWithGeoJSONDto } from '././parcel-with-geo-json-dto';

import { FormControl, FormControlOptions, FormControlState, Validators } from "@angular/forms";
export class WaterAccountGeoJSONDto { 
    BoundingBox?: BoundingBoxDto;
    Parcels?: Array<ParcelWithGeoJSONDto>;
    UsageEntities?: Array<UsageEntityWithGeoJSONDto>;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export interface WaterAccountGeoJSONDtoForm { 
    BoundingBox?: FormControl<BoundingBoxDto>;
    Parcels?: FormControl<Array<ParcelWithGeoJSONDto>>;
    UsageEntities?: FormControl<Array<UsageEntityWithGeoJSONDto>>;
}

export class WaterAccountGeoJSONDtoFormControls { 
    public static BoundingBox = (value: FormControlState<BoundingBoxDto> | BoundingBoxDto = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<BoundingBoxDto>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static Parcels = (value: FormControlState<Array<ParcelWithGeoJSONDto>> | Array<ParcelWithGeoJSONDto> = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<Array<ParcelWithGeoJSONDto>>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static UsageEntities = (value: FormControlState<Array<UsageEntityWithGeoJSONDto>> | Array<UsageEntityWithGeoJSONDto> = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<Array<UsageEntityWithGeoJSONDto>>(
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
