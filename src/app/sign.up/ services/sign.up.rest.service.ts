import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../../services/global/app.config.service";
import {CommonBaseRestApi} from "../../core/api/common.base.rest.api";
import {Observable} from "rxjs";
import {RegisterUserInputModel} from "../models/register.user.input.model";
import {RegisterUserResultModel} from "../models/register.user.result.model";

@Injectable()
export class SignUpRestService extends CommonBaseRestApi
{
  constructor(httpClient: HttpClient,
              configService: AppConfigService)
  {
    super(httpClient, configService);
  }

  public register(item: RegisterUserInputModel): Observable<RegisterUserResultModel[]>
  {
    return this.post(`api/v0/user/create`, item);
  }

}
