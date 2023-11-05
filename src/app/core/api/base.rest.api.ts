import {API_URL_TYPE, ApiFunctionParams, BaseApi, HeaderItem, MEDIA_TYPES} from "./base.api";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../../services/global/app.config.service";
import {Observable} from "rxjs";

export abstract class BaseRestApi extends BaseApi
{
  protected constructor(private _httpClient: HttpClient,
                        configService: AppConfigService)
  {
    super(configService);
  }
  //*********************************************************************************************
  protected delete<R>(Url: string,
                      params: ApiFunctionParams = {API_TYPE : API_URL_TYPE.API_URL, MEDIA_TYPE : MEDIA_TYPES.APPLICATION_JSON, USE_CACHE : false, TIME_IN_CACHE : null},
                      additional_params?: HeaderItem[]): Observable<R>
  {
    return this._httpClient.delete<R>(`${this.getApiURL(params)}${Url}`, {headers : this.createHttpHeaders(params, additional_params)});
  }
  //*********************************************************************************************
  protected get<R>(Url: string,
                   params: ApiFunctionParams = {API_TYPE : API_URL_TYPE.API_URL, MEDIA_TYPE : MEDIA_TYPES.APPLICATION_JSON, USE_CACHE : false, TIME_IN_CACHE : null},
                   additional_params?: HeaderItem[]): Observable<R>
  {
    return this._httpClient.get<R>(`${this.getApiURL(params)}${Url}`, {headers : this.createHttpHeaders(params, additional_params)});
  }
  //*********************************************************************************************
  protected post<P, R>(Url: string, item: P,
                       params: ApiFunctionParams = {API_TYPE : API_URL_TYPE.API_URL, MEDIA_TYPE : MEDIA_TYPES.APPLICATION_JSON, USE_CACHE : false, TIME_IN_CACHE : null},
                       additional_params?: HeaderItem[]): Observable<R>
  {
    return this._httpClient.post<R>(`${this.getApiURL(params)}${Url}`, this.transformObject<P>(item, params), {headers : this.createHttpHeaders(params, additional_params)});
  }
  //*********************************************************************************************
  protected put<P, R>(Url: string, item: P,
                      params: ApiFunctionParams = {API_TYPE : API_URL_TYPE.API_URL, MEDIA_TYPE : MEDIA_TYPES.APPLICATION_JSON, USE_CACHE : false, TIME_IN_CACHE : null},
                      additional_params?: HeaderItem[]): Observable<R>
  {
    return this._httpClient.put<R>(`${this.getApiURL(params)}${Url}`, this.transformObject<P>(item, params), {headers : this.createHttpHeaders(params, additional_params)});
  }
  //*********************************************************************************************
  protected getXML(Url: string,
                   params: ApiFunctionParams = {API_TYPE: API_URL_TYPE.API_URL, MEDIA_TYPE: MEDIA_TYPES.APPLICATION_JSON, USE_CACHE: false, TIME_IN_CACHE: null},
                   additional_params?: HeaderItem[])
  {
    return this._httpClient.get(`${this.getApiURL(params)}${Url}`, {headers : this.createHttpHeaders(params, additional_params), responseType : "text"});
    //return this.get<any>('financial/tax/medoc', { API_TYPE: API_URL_TYPE.API_URL, MEDIA_TYPE: MEDIA_TYPES.APPLICATION_XML });
  }

  protected postMultipartFormData<T>(Url: string,
                                     object = null,
                                     params: ApiFunctionParams = {API_TYPE: API_URL_TYPE.API_URL, MEDIA_TYPE: MEDIA_TYPES.APPLICATION_JSON, USE_CACHE: false, TIME_IN_CACHE: null},
                                     additional_params?: HeaderItem[]): Observable<T>
  {
    return this._httpClient.post<T>(`${this.getApiURL(params)}${Url}`, object);
  }
}
