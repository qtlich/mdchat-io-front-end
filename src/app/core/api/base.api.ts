import {AppConfigService} from "../../services/global/app.config.service";
import {isEmptyArray, isNullOrUndefined} from "../core.free.functions";
import {HttpHeaders} from "@angular/common/http";

export enum API_URL_TYPE
{
  API_URL,
}

/**
 * Перелік MIME типів для заголовку Content-Type,
 * що використовується в програмі
 */
export enum MEDIA_TYPES
{
  APPLICATION_JSON, // 'application/json'
  APPLICATION_PDF, //application/pdf
  APPLICATION_XML, //application/xml
  MULTIPART_FORM_DATA, //multipart/form-data
  TEXT_HTML, //text/html
  TEXT_PLAIN, //text/plain
  TEXT_CSV, //text/csv
  TEXT_XML, //text/xml
  EMPTY // browser set media type automaticaly
}

/**
 * Рядок Http заголовку
 */
export interface HeaderItem
{
  name: string;
  value?: string | string[];
}

/**
 * Параметри для передачі в функція трансформацій
 */
export interface ApiFunctionParams
{
  API_TYPE?: API_URL_TYPE;
  MEDIA_TYPE?: MEDIA_TYPES;
  TIME_IN_CACHE?: number | null;
  USE_CACHE?: boolean;
}

export abstract class BaseApi
{
  protected constructor(protected _cS: AppConfigService)
  {
    // this.debugMode = this._cS.config.debug;
  }

  //*********************************************************************************************
  /**
   * Створюємо заголовок Content-Type для MIME типів
   * @param {MEDIA_TYPES} media_type - тип контенту
   * @param {useCache} boolean - чи використовувати кеш для запиту
   * @param {cacheTime} number - час життя запиту в кешы, сек
   * @returns {HttpHeaders}
   */
  protected createHttpHeaders(params: ApiFunctionParams, additionalParams?: HeaderItem[]): HttpHeaders
  {
    // @ts-ignore
    const headers: HeaderItem[] = [this.__getMediaType(params.MEDIA_TYPE)].concat(this.__getCache(params));
    if (!isEmptyArray(additionalParams))
    {
      // @ts-ignore
      headers.concat(additionalParams.map(item => <HeaderItem>{name: item.name, value: item.value}));
    }
    let resultHeader: HttpHeaders = new HttpHeaders();
    headers.forEach(item =>
    {
      if (!isNullOrUndefined(item))
      {
        // @ts-ignore
        resultHeader = resultHeader.append(item.name, item.value);
      }
    });
    // console.log('HEADER:',resultHeader);
    return resultHeader;
  }

  //*********************************************************************************************
  /**
   * Повертаємо URL вибраного API
   *
   * @param params - FunctionParams
   */
  protected getApiURL(params: ApiFunctionParams): string
  {
    switch (params.API_TYPE)
    {
      case API_URL_TYPE.API_URL:
      default:
        return this._cS.config.api.apiUrl;
    }
  }

  //*********************************************************************************************
  /**
   * В залежності від MIME типу проводимо пеертворення об'єкту
   * @param {T} object
   * @param {MEDIA_TYPES} MEDIA_TYPE
   * @returns {any}
   */
  protected transformObject<T>(object: T, params: ApiFunctionParams): any
  {
    switch (params.MEDIA_TYPE)
    {
      case MEDIA_TYPES.MULTIPART_FORM_DATA:
      case MEDIA_TYPES.APPLICATION_PDF:
      case MEDIA_TYPES.APPLICATION_XML:
      case MEDIA_TYPES.TEXT_HTML:
      case MEDIA_TYPES.TEXT_PLAIN:
      case MEDIA_TYPES.TEXT_CSV:
      case MEDIA_TYPES.TEXT_XML:
      case MEDIA_TYPES.EMPTY:
        return object;
      default:
        return JSON.stringify(object);
    }
  }

  // *********************************************************************************************
  private __getCache(params: ApiFunctionParams): HeaderItem[]
  {
    // if(params.USE_CACHE)
    // {
    //     return [{name : USE_CACHE, value : "TRUE"},
    //             {name : TIME_IN_CACHE, value : !isNullOrUndefined(params.TIME_IN_CACHE) ? params.TIME_IN_CACHE.toString() : "0"}];
    // }
    // else
    // {
    return [{name: "Cache-Control", value: "no-cache"},
      {name: "Pragma", value: "no-cache"},
      {name: "Expires", value: "Sat, 01 Jan 2000 00:00:00 GMT"}];
    // }
  }

  // *********************************************************************************************
  private __getMediaType(type: MEDIA_TYPES): HeaderItem
  {
    switch (type)
    {
      case MEDIA_TYPES.APPLICATION_PDF:
        return {name: "Content-Type", value: "application/pdf"};
      case MEDIA_TYPES.APPLICATION_XML:
        return {name: "Content-Type", value: "application/xml"};
      case MEDIA_TYPES.TEXT_HTML:
        return {name: "Content-Type", value: "text/html"};
      case MEDIA_TYPES.TEXT_PLAIN:
        return {name: "Content-Type", value: "text/plain"};
      case MEDIA_TYPES.TEXT_CSV:
        return {name: "Content-Type", value: "text/csv"};
      case MEDIA_TYPES.TEXT_XML:
        return {name: "Content-Type", value: "text/xml"};
      case MEDIA_TYPES.MULTIPART_FORM_DATA:
        return {name: "Content-Type", value: "multipart/form-data"};
      case MEDIA_TYPES.EMPTY:
      case MEDIA_TYPES.APPLICATION_JSON:
      default:
        return {name: "Content-Type", value: "application/json"};
    }
  }

  //*********************************************************************************************
}
