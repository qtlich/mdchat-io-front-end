import {Injectable} from "@angular/core";
import {ConfigFileModel} from "../../models/config.file.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class AppConfigService
{
  private _config: ConfigFileModel = new ConfigFileModel();

  constructor(private _httpClient: HttpClient)
  {
    console.log("AppConfigService loaded");
  }

  public get config(): ConfigFileModel
  {
    return this._config;
  }

  public load(): void
  // public load(): Observable<ConfigFileModel>
  {
    console.log('try to load');
    // return this._httpClient
    //   .get<ConfigFileModel>("/assets/config/app.config.json")
    //   .pipe(map((data: ConfigFileModel) =>
    //   {
    //     console.log('Config File =>',data);
    //     this._config = <ConfigFileModel>data;
    //     return data;
    //   }));

  }
}
