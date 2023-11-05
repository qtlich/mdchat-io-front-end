import {Injectable} from "@angular/core";
import {Observable, ReplaySubject} from "rxjs";
import {MenuItem} from "primeng/api";
import {AppRestService} from "./app.rest.service";
import {isEmptyArray} from "../core/core.free.functions";
import {BaseService} from "./base.service";
import {GlobalBusService} from "./global/global.bus.service";

@Injectable({
              providedIn: "root"
            })
export class AppDataService extends BaseService
{
  private readonly _onLoadMenuSubject: ReplaySubject<MenuItem[]> = new ReplaySubject<MenuItem[]>(1);

  public onLoadMenuEvent(): Observable<MenuItem[]>
  {
    return this._onLoadMenuSubject;
  }

  public loadMenu(uid?: number): void
  {
    this.__loadMenu(uid);
  }

  private __loadMenu(uid?: number): void
  {

    super.toDb(uid,
               input => this._rS.getMenu(input),
               data => this._onLoadMenuSubject.next(!isEmptyArray(data) ? data : []),
               `Error load menu`);
  }

  constructor(private _rS: AppRestService,
              serviceBus: GlobalBusService)
  {
    super(serviceBus);
    this.loadMenu(0);
  }

}
