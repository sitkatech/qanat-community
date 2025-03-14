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
export class ParcelUpdateExpectedResultsDto { 
    NumParcelsInGdb?: number;
    NumParcelsAdded?: number;
    NumParcelsUnchanged?: number;
    NumParcelsToBeInactivated?: number;
    NumParcelsToBeUpdated?: number;
    NumParcelsWithUpdatedGeometries?: number;
    NumParcelsWithOwnerOrAddressChange?: number;
    NumParcelsWithAcresChange?: number;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export interface ParcelUpdateExpectedResultsDtoForm { 
    NumParcelsInGdb?: FormControl<number>;
    NumParcelsAdded?: FormControl<number>;
    NumParcelsUnchanged?: FormControl<number>;
    NumParcelsToBeInactivated?: FormControl<number>;
    NumParcelsToBeUpdated?: FormControl<number>;
    NumParcelsWithUpdatedGeometries?: FormControl<number>;
    NumParcelsWithOwnerOrAddressChange?: FormControl<number>;
    NumParcelsWithAcresChange?: FormControl<number>;
}

export class ParcelUpdateExpectedResultsDtoFormControls { 
    public static NumParcelsInGdb = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static NumParcelsAdded = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static NumParcelsUnchanged = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static NumParcelsToBeInactivated = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static NumParcelsToBeUpdated = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static NumParcelsWithUpdatedGeometries = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static NumParcelsWithOwnerOrAddressChange = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static NumParcelsWithAcresChange = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
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
