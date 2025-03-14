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
import { GeographyDto } from '././geography-dto';
import { OpenETSyncResultTypeSimpleDto } from '././open-et-sync-result-type-simple-dto';
import { OpenETDataTypeSimpleDto } from '././open-et-data-type-simple-dto';
import { OpenETRasterCalculationResultTypeSimpleDto } from '././open-et-raster-calculation-result-type-simple-dto';

import { FormControl, FormControlOptions, FormControlState, Validators } from "@angular/forms";
export class OpenETSyncDto { 
    OpenETSyncID?: number;
    Geography?: GeographyDto;
    OpenETDataType?: OpenETDataTypeSimpleDto;
    Year?: number;
    Month?: number;
    LastSyncDate?: string;
    LastSyncStatus?: OpenETSyncResultTypeSimpleDto;
    LastSuccessfulSyncDate?: string;
    LastSyncMessage?: string;
    HasInProgressSync?: boolean;
    LastRasterCalculationDate?: string;
    LastRasterCalculationStatus?: OpenETRasterCalculationResultTypeSimpleDto;
    LastSuccessfulCalculationDate?: string;
    LastRasterCalculationMessage?: string;
    FileResourceGUID?: string;
    FileResourceOriginalName?: string;
    FileResourceOriginalFileExtension?: string;
    FinalizeDate?: string;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export interface OpenETSyncDtoForm { 
    OpenETSyncID?: FormControl<number>;
    Geography?: FormControl<GeographyDto>;
    OpenETDataType?: FormControl<OpenETDataTypeSimpleDto>;
    Year?: FormControl<number>;
    Month?: FormControl<number>;
    LastSyncDate?: FormControl<string>;
    LastSyncStatus?: FormControl<OpenETSyncResultTypeSimpleDto>;
    LastSuccessfulSyncDate?: FormControl<string>;
    LastSyncMessage?: FormControl<string>;
    HasInProgressSync?: FormControl<boolean>;
    LastRasterCalculationDate?: FormControl<string>;
    LastRasterCalculationStatus?: FormControl<OpenETRasterCalculationResultTypeSimpleDto>;
    LastSuccessfulCalculationDate?: FormControl<string>;
    LastRasterCalculationMessage?: FormControl<string>;
    FileResourceGUID?: FormControl<string>;
    FileResourceOriginalName?: FormControl<string>;
    FileResourceOriginalFileExtension?: FormControl<string>;
    FinalizeDate?: FormControl<string>;
}

export class OpenETSyncDtoFormControls { 
    public static OpenETSyncID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static Geography = (value: FormControlState<GeographyDto> | GeographyDto = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<GeographyDto>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static OpenETDataType = (value: FormControlState<OpenETDataTypeSimpleDto> | OpenETDataTypeSimpleDto = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<OpenETDataTypeSimpleDto>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static Year = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static Month = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static LastSyncDate = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static LastSyncStatus = (value: FormControlState<OpenETSyncResultTypeSimpleDto> | OpenETSyncResultTypeSimpleDto = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<OpenETSyncResultTypeSimpleDto>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static LastSuccessfulSyncDate = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static LastSyncMessage = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static HasInProgressSync = (value: FormControlState<boolean> | boolean = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<boolean>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static LastRasterCalculationDate = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static LastRasterCalculationStatus = (value: FormControlState<OpenETRasterCalculationResultTypeSimpleDto> | OpenETRasterCalculationResultTypeSimpleDto = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<OpenETRasterCalculationResultTypeSimpleDto>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static LastSuccessfulCalculationDate = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static LastRasterCalculationMessage = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static FileResourceGUID = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static FileResourceOriginalName = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static FileResourceOriginalFileExtension = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static FinalizeDate = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
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
