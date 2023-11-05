import {Injectable} from "@angular/core";
import {RegisterUserInputModel} from "../models/register.user.input.model";
import {BaseService} from "../../services/base.service";
import {GlobalBusService} from "../../services/global/global.bus.service";
import {SignUpRestService} from "./sign.up.rest.service";
import {Observable, Subject} from "rxjs";
import {RegisterUserResultModel} from "../models/register.user.result.model";
import {isEmptyArray} from "../../core/core.free.functions";
import {defaultErrorCreateNewUser} from "../../core/default.message.constants";

@Injectable()
export class SignUpDataService extends BaseService
{
  private readonly _onRegisterSubject: Subject<RegisterUserResultModel[]> = new Subject<RegisterUserResultModel[]>();

  constructor(serviceBus: GlobalBusService,
              private _rS: SignUpRestService)
  {
    super(serviceBus);
  }

  public onCreateNewUserEvent(): Observable<RegisterUserResultModel[]>
  {
    return this._onRegisterSubject;
  }

  public registerNewUser(item: RegisterUserInputModel): void
  {
    this.toDb(item,
      input => this._rS.register(input),
      data =>
      {
        this._onRegisterSubject.next(!isEmptyArray(data) ? data : defaultErrorCreateNewUser)
      },
      `Unsuccess create new user`);
  }

}
