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
import { SupportTicketPrioritySimpleDto } from '././support-ticket-priority-simple-dto';
import { SupportTicketQuestionTypeSimpleDto } from '././support-ticket-question-type-simple-dto';
import { SupportTicketStatusSimpleDto } from '././support-ticket-status-simple-dto';

import { FormControl, FormControlOptions, FormControlState, Validators } from "@angular/forms";
export class SupportTicketGridDto { 
    SupportTicketID?: number;
    GeographyID?: number;
    GeographyName?: string;
    Description?: string;
    SupportTicketStatus?: SupportTicketStatusSimpleDto;
    SupportTicketPriority?: SupportTicketPrioritySimpleDto;
    SupportTicketQuestionType?: SupportTicketQuestionTypeSimpleDto;
    WaterAccountID?: number;
    WaterAccountNumber?: number;
    DateCreated?: string;
    DateUpdated?: string;
    CreateUserFullName?: string;
    AssignedUserID?: number;
    AssignedUserFullName?: string;
    ContactFirstName?: string;
    ContactLastName?: string;
    ContactEmail?: string;
    ContactPhoneNumber?: string;
    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}

export interface SupportTicketGridDtoForm { 
    SupportTicketID?: FormControl<number>;
    GeographyID?: FormControl<number>;
    GeographyName?: FormControl<string>;
    Description?: FormControl<string>;
    SupportTicketStatus?: FormControl<SupportTicketStatusSimpleDto>;
    SupportTicketPriority?: FormControl<SupportTicketPrioritySimpleDto>;
    SupportTicketQuestionType?: FormControl<SupportTicketQuestionTypeSimpleDto>;
    WaterAccountID?: FormControl<number>;
    WaterAccountNumber?: FormControl<number>;
    DateCreated?: FormControl<string>;
    DateUpdated?: FormControl<string>;
    CreateUserFullName?: FormControl<string>;
    AssignedUserID?: FormControl<number>;
    AssignedUserFullName?: FormControl<string>;
    ContactFirstName?: FormControl<string>;
    ContactLastName?: FormControl<string>;
    ContactEmail?: FormControl<string>;
    ContactPhoneNumber?: FormControl<string>;
}

export class SupportTicketGridDtoFormControls { 
    public static SupportTicketID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static GeographyID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
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
    public static Description = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static SupportTicketStatus = (value: FormControlState<SupportTicketStatusSimpleDto> | SupportTicketStatusSimpleDto = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<SupportTicketStatusSimpleDto>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static SupportTicketPriority = (value: FormControlState<SupportTicketPrioritySimpleDto> | SupportTicketPrioritySimpleDto = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<SupportTicketPrioritySimpleDto>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static SupportTicketQuestionType = (value: FormControlState<SupportTicketQuestionTypeSimpleDto> | SupportTicketQuestionTypeSimpleDto = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<SupportTicketQuestionTypeSimpleDto>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
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
    public static DateCreated = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static DateUpdated = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static CreateUserFullName = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static AssignedUserID = (value: FormControlState<number> | number = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<number>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static AssignedUserFullName = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static ContactFirstName = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static ContactLastName = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static ContactEmail = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
        value,
        formControlOptions ?? 
        {
            nonNullable: false,
            validators: 
            [
            ],
        }
    );
    public static ContactPhoneNumber = (value: FormControlState<string> | string = undefined, formControlOptions?: FormControlOptions | null) => new FormControl<string>(
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
