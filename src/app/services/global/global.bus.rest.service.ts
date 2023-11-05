import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable(
  {
    providedIn:"root"
  }
)
export class GlobalBusRestService extends CommonBaseRestApi
{
  constructor(httpClient: HttpClient,
              configService: AppConfigService)
  {
    super(httpClient, configService);
  }
  // *********************************************************************************************
}
