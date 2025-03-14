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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { WellRegistrationFileResourceDto } from '../model/well-registration-file-resource-dto';
import { WellRegistrationFileResourceUpdateDto } from '../model/well-registration-file-resource-update-dto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../../services';


@Injectable({
  providedIn: 'root'
})
export class WellRegistrationFileResourceService {

    protected basePath = 'http://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration
    , private apiService: ApiService) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param wellRegistrationID 
     * @param wellRegistrationID2 
     * @param file 
     * @param fileDescription 
     * @param wellRegistrationFileResourceID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellRegistrationsWellRegistrationIDFileResourcesPost(wellRegistrationID: number, wellRegistrationID2: number, file: Blob, fileDescription?: string, wellRegistrationFileResourceID?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<WellRegistrationFileResourceDto>>;
    public wellRegistrationsWellRegistrationIDFileResourcesPost(wellRegistrationID: number, wellRegistrationID2: number, file: Blob, fileDescription?: string, wellRegistrationFileResourceID?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<WellRegistrationFileResourceDto>>>;
    public wellRegistrationsWellRegistrationIDFileResourcesPost(wellRegistrationID: number, wellRegistrationID2: number, file: Blob, fileDescription?: string, wellRegistrationFileResourceID?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<WellRegistrationFileResourceDto>>>;
    public wellRegistrationsWellRegistrationIDFileResourcesPost(wellRegistrationID: number, wellRegistrationID2: number, file: Blob, fileDescription?: string, wellRegistrationFileResourceID?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (wellRegistrationID === null || wellRegistrationID === undefined) {
            throw new Error('Required parameter wellRegistrationID was null or undefined when calling wellRegistrationsWellRegistrationIDFileResourcesPost.');
        }

        if (wellRegistrationID2 === null || wellRegistrationID2 === undefined) {
            throw new Error('Required parameter wellRegistrationID2 was null or undefined when calling wellRegistrationsWellRegistrationIDFileResourcesPost.');
        }

        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling wellRegistrationsWellRegistrationIDFileResourcesPost.');
        }



        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json',
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data',
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void | HttpParams; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (wellRegistrationID2 !== undefined) {
            formParams = formParams.append('WellRegistrationID', <any>wellRegistrationID2) || formParams;
        }
        if (file !== undefined) {
            formParams = formParams.append('File', <any>file) || formParams;
        }
        if (fileDescription !== undefined) {
            formParams = formParams.append('FileDescription', <any>fileDescription) || formParams;
        }
        if (wellRegistrationFileResourceID !== undefined) {
            formParams = formParams.append('WellRegistrationFileResourceID', <any>wellRegistrationFileResourceID) || formParams;
        }

        return this.httpClient.post<Array<WellRegistrationFileResourceDto>>(`${this.basePath}/well-registrations/${encodeURIComponent(String(wellRegistrationID))}/file-resources`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(catchError((error: any) => { return this.apiService.handleError(error)}));
    }

    /**
     * 
     * 
     * @param wellRegistrationID 
     * @param wellRegistrationFileResourceID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellRegistrationsWellRegistrationIDFileResourcesWellRegistrationFileResourceIDDelete(wellRegistrationID: number, wellRegistrationFileResourceID: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public wellRegistrationsWellRegistrationIDFileResourcesWellRegistrationFileResourceIDDelete(wellRegistrationID: number, wellRegistrationFileResourceID: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public wellRegistrationsWellRegistrationIDFileResourcesWellRegistrationFileResourceIDDelete(wellRegistrationID: number, wellRegistrationFileResourceID: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public wellRegistrationsWellRegistrationIDFileResourcesWellRegistrationFileResourceIDDelete(wellRegistrationID: number, wellRegistrationFileResourceID: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (wellRegistrationID === null || wellRegistrationID === undefined) {
            throw new Error('Required parameter wellRegistrationID was null or undefined when calling wellRegistrationsWellRegistrationIDFileResourcesWellRegistrationFileResourceIDDelete.');
        }

        if (wellRegistrationFileResourceID === null || wellRegistrationFileResourceID === undefined) {
            throw new Error('Required parameter wellRegistrationFileResourceID was null or undefined when calling wellRegistrationsWellRegistrationIDFileResourcesWellRegistrationFileResourceIDDelete.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/well-registrations/${encodeURIComponent(String(wellRegistrationID))}/file-resources/${encodeURIComponent(String(wellRegistrationFileResourceID))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(catchError((error: any) => { return this.apiService.handleError(error)}));
    }

    /**
     * 
     * 
     * @param wellRegistrationID 
     * @param wellRegistrationFileResourceID 
     * @param wellRegistrationFileResourceUpdateDto 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellRegistrationsWellRegistrationIDFileResourcesWellRegistrationFileResourceIDPut(wellRegistrationID: number, wellRegistrationFileResourceID: number, wellRegistrationFileResourceUpdateDto?: WellRegistrationFileResourceUpdateDto, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public wellRegistrationsWellRegistrationIDFileResourcesWellRegistrationFileResourceIDPut(wellRegistrationID: number, wellRegistrationFileResourceID: number, wellRegistrationFileResourceUpdateDto?: WellRegistrationFileResourceUpdateDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public wellRegistrationsWellRegistrationIDFileResourcesWellRegistrationFileResourceIDPut(wellRegistrationID: number, wellRegistrationFileResourceID: number, wellRegistrationFileResourceUpdateDto?: WellRegistrationFileResourceUpdateDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public wellRegistrationsWellRegistrationIDFileResourcesWellRegistrationFileResourceIDPut(wellRegistrationID: number, wellRegistrationFileResourceID: number, wellRegistrationFileResourceUpdateDto?: WellRegistrationFileResourceUpdateDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (wellRegistrationID === null || wellRegistrationID === undefined) {
            throw new Error('Required parameter wellRegistrationID was null or undefined when calling wellRegistrationsWellRegistrationIDFileResourcesWellRegistrationFileResourceIDPut.');
        }

        if (wellRegistrationFileResourceID === null || wellRegistrationFileResourceID === undefined) {
            throw new Error('Required parameter wellRegistrationFileResourceID was null or undefined when calling wellRegistrationsWellRegistrationIDFileResourcesWellRegistrationFileResourceIDPut.');
        }


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json',
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/well-registrations/${encodeURIComponent(String(wellRegistrationID))}/file-resources/${encodeURIComponent(String(wellRegistrationFileResourceID))}`,
            wellRegistrationFileResourceUpdateDto,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(catchError((error: any) => { return this.apiService.handleError(error)}));
    }

}
