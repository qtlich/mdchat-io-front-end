import {Injectable} from "@angular/core";
import {Observable, ReplaySubject} from "rxjs";
import {MenuItem} from "primeng/api";
import {AppRestService} from "./app.rest.service";
import {isEmptyArray} from "../core/core.free.functions";

@Injectable({
  providedIn: "root"
})
export class AppDataService
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
    this._rS.getMenu(uid).subscribe((data: MenuItem[]) =>
      {
        this._onLoadMenuSubject.next(!isEmptyArray(data) ? data : [])
      },
      error => console.log(error));
  }

  constructor(private _rS: AppRestService)
  {
  }

}
