import {BaseConfig} from "./base.config";
import {isNullOrUndefined} from "./core.free.functions";
import {GlobalBusService} from "../services/global/global.bus.service";

export abstract class BaseStorage extends BaseConfig
{
  protected constructor(serviceBus: GlobalBusService,
                        storageName: string)
  {
    super(serviceBus, storageName);
  }

  //*********************************************************************************************
  protected _loadFromStorage<T>(name: string, newItem: T | T[]): T | T[]
  {
    const item: string | null = localStorage.getItem(name);
    return <T | T[]>(!isNullOrUndefined(item) ? <T | T[]>JSON.parse(item ? item : "") : newItem);
  }

  //*********************************************************************************************
  protected _saveToStorage<T>(name: string, item: T | T[])
  {
    localStorage.setItem(name, JSON.stringify(item));
  }
}
