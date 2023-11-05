import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "./app.config.service";
import {CommonBaseRestApi} from "../../core/api/common.base.rest.api";

@Injectable({providedIn: "root"})
export class GlobalBusRestService extends CommonBaseRestApi
{
  constructor(httpClient: HttpClient,
              configService: AppConfigService)
  {
    super(httpClient, configService);
  }

  // *********************************************************************************************
}
