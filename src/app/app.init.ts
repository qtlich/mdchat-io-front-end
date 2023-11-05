import {AppConfigService} from "./services/global/app.config.service";
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ConfigFileModel} from "./models/config.file.model";

export function initializer(cS: AppConfigService): () => Promise<any>
{
  return (): Promise<any> =>
  {
    return new Promise(async (resolve, reject) =>
    {
      try
      {
        await cS.load();
      } catch (error)
      {
        console.log("ERROR", error);
        reject(error);
      }
    });
  };
}
