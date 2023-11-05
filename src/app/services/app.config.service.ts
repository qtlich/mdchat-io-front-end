import {Injectable} from "@angular/core";
import {ConfigFileModel} from "../models/config.file.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class AppConfigService
{
  private _config: ConfigFileModel = new ConfigFileModel();

  constructor(private _httpClient: HttpClient)
  {
  }

  public get config(): ConfigFileModel
  {
    return this._config;
  }

  public load(): Observable<ConfigFileModel>
  {
    return this._httpClient
      .get<ConfigFileModel>("/assets/config/app.config.json")
      .pipe( map((data:ConfigFileModel)=>{
        this._config = <ConfigFileModel>data;
        return data;
      }));

  }
}
