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

import { ScenarioSimpleDto } from '../model/scenario-simple-dto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../../services';


@Injectable({
  providedIn: 'root'
})
export class ScenarioService {

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
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public scenariosGet(observe?: 'body', reportProgress?: boolean): Observable<Array<ScenarioSimpleDto>>;
    public scenariosGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ScenarioSimpleDto>>>;
    public scenariosGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ScenarioSimpleDto>>>;
    public scenariosGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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
        ];

        return this.httpClient.get<Array<ScenarioSimpleDto>>(`${this.basePath}/scenarios`,
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
     * @param scenarioID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public scenariosScenarioIDImageGet(scenarioID: number, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public scenariosScenarioIDImageGet(scenarioID: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public scenariosScenarioIDImageGet(scenarioID: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public scenariosScenarioIDImageGet(scenarioID: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (scenarioID === null || scenarioID === undefined) {
            throw new Error('Required parameter scenarioID was null or undefined when calling scenariosScenarioIDImageGet.');
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
        ];

        return this.httpClient.get<string>(`${this.basePath}/scenarios/${encodeURIComponent(String(scenarioID))}/image`,
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
     * @param scenarioShortName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public scenariosScenarioShortNameGet(scenarioShortName: string, observe?: 'body', reportProgress?: boolean): Observable<ScenarioSimpleDto>;
    public scenariosScenarioShortNameGet(scenarioShortName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ScenarioSimpleDto>>;
    public scenariosScenarioShortNameGet(scenarioShortName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ScenarioSimpleDto>>;
    public scenariosScenarioShortNameGet(scenarioShortName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (scenarioShortName === null || scenarioShortName === undefined) {
            throw new Error('Required parameter scenarioShortName was null or undefined when calling scenariosScenarioShortNameGet.');
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
        ];

        return this.httpClient.get<ScenarioSimpleDto>(`${this.basePath}/scenarios/${encodeURIComponent(String(scenarioShortName))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(catchError((error: any) => { return this.apiService.handleError(error)}));
    }

}
