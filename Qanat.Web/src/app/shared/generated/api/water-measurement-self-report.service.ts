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

import { WaterMeasurementSelfReportCreateDto } from '../model/water-measurement-self-report-create-dto';
import { WaterMeasurementSelfReportDto } from '../model/water-measurement-self-report-dto';
import { WaterMeasurementSelfReportSimpleDto } from '../model/water-measurement-self-report-simple-dto';
import { WaterMeasurementSelfReportUpdateDto } from '../model/water-measurement-self-report-update-dto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../../services';


@Injectable({
  providedIn: 'root'
})
export class WaterMeasurementSelfReportService {

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
     * @param geographyID 
     * @param waterAccountID 
     * @param waterMeasurementSelfReportCreateDto 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsPost(geographyID: number, waterAccountID: number, waterMeasurementSelfReportCreateDto?: WaterMeasurementSelfReportCreateDto, observe?: 'body', reportProgress?: boolean): Observable<WaterMeasurementSelfReportSimpleDto>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsPost(geographyID: number, waterAccountID: number, waterMeasurementSelfReportCreateDto?: WaterMeasurementSelfReportCreateDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WaterMeasurementSelfReportSimpleDto>>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsPost(geographyID: number, waterAccountID: number, waterMeasurementSelfReportCreateDto?: WaterMeasurementSelfReportCreateDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WaterMeasurementSelfReportSimpleDto>>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsPost(geographyID: number, waterAccountID: number, waterMeasurementSelfReportCreateDto?: WaterMeasurementSelfReportCreateDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (geographyID === null || geographyID === undefined) {
            throw new Error('Required parameter geographyID was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsPost.');
        }

        if (waterAccountID === null || waterAccountID === undefined) {
            throw new Error('Required parameter waterAccountID was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsPost.');
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
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json',
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<WaterMeasurementSelfReportSimpleDto>(`${this.basePath}/geographies/${encodeURIComponent(String(geographyID))}/water-accounts/${encodeURIComponent(String(waterAccountID))}/water-measurement-self-reports`,
            waterMeasurementSelfReportCreateDto,
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
     * @param geographyID 
     * @param waterAccountID 
     * @param year 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsReportingPeriodsYearGet(geographyID: number, waterAccountID: number, year: number, observe?: 'body', reportProgress?: boolean): Observable<Array<WaterMeasurementSelfReportSimpleDto>>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsReportingPeriodsYearGet(geographyID: number, waterAccountID: number, year: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<WaterMeasurementSelfReportSimpleDto>>>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsReportingPeriodsYearGet(geographyID: number, waterAccountID: number, year: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<WaterMeasurementSelfReportSimpleDto>>>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsReportingPeriodsYearGet(geographyID: number, waterAccountID: number, year: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (geographyID === null || geographyID === undefined) {
            throw new Error('Required parameter geographyID was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsReportingPeriodsYearGet.');
        }

        if (waterAccountID === null || waterAccountID === undefined) {
            throw new Error('Required parameter waterAccountID was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsReportingPeriodsYearGet.');
        }

        if (year === null || year === undefined) {
            throw new Error('Required parameter year was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsReportingPeriodsYearGet.');
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

        return this.httpClient.get<Array<WaterMeasurementSelfReportSimpleDto>>(`${this.basePath}/geographies/${encodeURIComponent(String(geographyID))}/water-accounts/${encodeURIComponent(String(waterAccountID))}/water-measurement-self-reports/reporting-periods/${encodeURIComponent(String(year))}`,
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
     * @param geographyID 
     * @param waterAccountID 
     * @param waterMeasurementSelfReportID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDApprovePut(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, observe?: 'body', reportProgress?: boolean): Observable<WaterMeasurementSelfReportDto>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDApprovePut(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WaterMeasurementSelfReportDto>>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDApprovePut(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WaterMeasurementSelfReportDto>>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDApprovePut(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (geographyID === null || geographyID === undefined) {
            throw new Error('Required parameter geographyID was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDApprovePut.');
        }

        if (waterAccountID === null || waterAccountID === undefined) {
            throw new Error('Required parameter waterAccountID was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDApprovePut.');
        }

        if (waterMeasurementSelfReportID === null || waterMeasurementSelfReportID === undefined) {
            throw new Error('Required parameter waterMeasurementSelfReportID was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDApprovePut.');
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

        return this.httpClient.put<WaterMeasurementSelfReportDto>(`${this.basePath}/geographies/${encodeURIComponent(String(geographyID))}/water-accounts/${encodeURIComponent(String(waterAccountID))}/water-measurement-self-reports/${encodeURIComponent(String(waterMeasurementSelfReportID))}/approve`,
            null,
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
     * @param geographyID 
     * @param waterAccountID 
     * @param waterMeasurementSelfReportID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDGet(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, observe?: 'body', reportProgress?: boolean): Observable<WaterMeasurementSelfReportDto>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDGet(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WaterMeasurementSelfReportDto>>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDGet(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WaterMeasurementSelfReportDto>>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDGet(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (geographyID === null || geographyID === undefined) {
            throw new Error('Required parameter geographyID was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDGet.');
        }

        if (waterAccountID === null || waterAccountID === undefined) {
            throw new Error('Required parameter waterAccountID was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDGet.');
        }

        if (waterMeasurementSelfReportID === null || waterMeasurementSelfReportID === undefined) {
            throw new Error('Required parameter waterMeasurementSelfReportID was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDGet.');
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

        return this.httpClient.get<WaterMeasurementSelfReportDto>(`${this.basePath}/geographies/${encodeURIComponent(String(geographyID))}/water-accounts/${encodeURIComponent(String(waterAccountID))}/water-measurement-self-reports/${encodeURIComponent(String(waterMeasurementSelfReportID))}`,
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
     * @param geographyID 
     * @param waterAccountID 
     * @param waterMeasurementSelfReportID 
     * @param waterMeasurementSelfReportUpdateDto 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDPut(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, waterMeasurementSelfReportUpdateDto?: WaterMeasurementSelfReportUpdateDto, observe?: 'body', reportProgress?: boolean): Observable<WaterMeasurementSelfReportDto>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDPut(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, waterMeasurementSelfReportUpdateDto?: WaterMeasurementSelfReportUpdateDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WaterMeasurementSelfReportDto>>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDPut(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, waterMeasurementSelfReportUpdateDto?: WaterMeasurementSelfReportUpdateDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WaterMeasurementSelfReportDto>>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDPut(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, waterMeasurementSelfReportUpdateDto?: WaterMeasurementSelfReportUpdateDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (geographyID === null || geographyID === undefined) {
            throw new Error('Required parameter geographyID was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDPut.');
        }

        if (waterAccountID === null || waterAccountID === undefined) {
            throw new Error('Required parameter waterAccountID was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDPut.');
        }

        if (waterMeasurementSelfReportID === null || waterMeasurementSelfReportID === undefined) {
            throw new Error('Required parameter waterMeasurementSelfReportID was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDPut.');
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
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json',
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<WaterMeasurementSelfReportDto>(`${this.basePath}/geographies/${encodeURIComponent(String(geographyID))}/water-accounts/${encodeURIComponent(String(waterAccountID))}/water-measurement-self-reports/${encodeURIComponent(String(waterMeasurementSelfReportID))}`,
            waterMeasurementSelfReportUpdateDto,
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
     * @param geographyID 
     * @param waterAccountID 
     * @param waterMeasurementSelfReportID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDReturnPut(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, observe?: 'body', reportProgress?: boolean): Observable<WaterMeasurementSelfReportDto>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDReturnPut(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WaterMeasurementSelfReportDto>>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDReturnPut(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WaterMeasurementSelfReportDto>>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDReturnPut(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (geographyID === null || geographyID === undefined) {
            throw new Error('Required parameter geographyID was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDReturnPut.');
        }

        if (waterAccountID === null || waterAccountID === undefined) {
            throw new Error('Required parameter waterAccountID was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDReturnPut.');
        }

        if (waterMeasurementSelfReportID === null || waterMeasurementSelfReportID === undefined) {
            throw new Error('Required parameter waterMeasurementSelfReportID was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDReturnPut.');
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

        return this.httpClient.put<WaterMeasurementSelfReportDto>(`${this.basePath}/geographies/${encodeURIComponent(String(geographyID))}/water-accounts/${encodeURIComponent(String(waterAccountID))}/water-measurement-self-reports/${encodeURIComponent(String(waterMeasurementSelfReportID))}/return`,
            null,
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
     * @param geographyID 
     * @param waterAccountID 
     * @param waterMeasurementSelfReportID 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDSubmitPut(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, observe?: 'body', reportProgress?: boolean): Observable<WaterMeasurementSelfReportDto>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDSubmitPut(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WaterMeasurementSelfReportDto>>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDSubmitPut(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WaterMeasurementSelfReportDto>>;
    public geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDSubmitPut(geographyID: number, waterAccountID: number, waterMeasurementSelfReportID: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (geographyID === null || geographyID === undefined) {
            throw new Error('Required parameter geographyID was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDSubmitPut.');
        }

        if (waterAccountID === null || waterAccountID === undefined) {
            throw new Error('Required parameter waterAccountID was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDSubmitPut.');
        }

        if (waterMeasurementSelfReportID === null || waterMeasurementSelfReportID === undefined) {
            throw new Error('Required parameter waterMeasurementSelfReportID was null or undefined when calling geographiesGeographyIDWaterAccountsWaterAccountIDWaterMeasurementSelfReportsWaterMeasurementSelfReportIDSubmitPut.');
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

        return this.httpClient.put<WaterMeasurementSelfReportDto>(`${this.basePath}/geographies/${encodeURIComponent(String(geographyID))}/water-accounts/${encodeURIComponent(String(waterAccountID))}/water-measurement-self-reports/${encodeURIComponent(String(waterMeasurementSelfReportID))}/submit`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        ).pipe(catchError((error: any) => { return this.apiService.handleError(error)}));
    }

}
