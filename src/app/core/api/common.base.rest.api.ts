import {AppConfigService} from "../../services/global/app.config.service";
import {HttpClient} from "@angular/common/http";
import {BaseRestApi} from "./base.rest.api";

export abstract class CommonBaseRestApi extends BaseRestApi
{
  protected constructor(httpClient: HttpClient,
                        configService: AppConfigService)
  {
    super(httpClient, configService);
  }
}
