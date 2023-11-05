import {uaLocale} from "./core.free.constants";
import {MenuItem} from "primeng/api";
import {BaseMessage} from "./base.message";
import {GlobalBusService} from "../services/global/global.bus.service";

/**
 * Базовий клас для завантаження
 * налаштувань та загальних змінних
 */
export abstract class BaseConfig extends BaseMessage
{
  public blockButton: boolean = false;
  /**
   * Контекстне меню
   */
  public contextMenuItems: MenuItem[] = [];
  /**
   * У разі необхідності можна використовувати для видимості компоненту
   */
  public isVisible: boolean = false;
  /**
   * Статус завантаження
   */
  public loading: boolean = false;
  /**
   * У разі необхідності виводимо дані лише в режимі тільки перегляд
   */
  public readOnly: boolean = false;
  /**
   * Локаль для календаря
   */
  public ua = uaLocale;
  //
  protected storageName: string ="";

  // *********************************************************************************************
  protected constructor(serviceBus: GlobalBusService)
  {
    super(serviceBus);
  }


  //*********************************************************************************************
  protected clearContextMenu(): void
  {
    this.contextMenuItems = [];
  }

  //*********************************************************************************************
  protected endLoading(): void
  {
    this.loading = false;
  }

  //*********************************************************************************************
  protected setBlockButton(value: boolean = true): void
  {
    this.blockButton = value;
  }

  //*********************************************************************************************
  protected setStorageName(name: string): void
  {
    this.storageName = name + "StorageName";
  }

  //*********************************************************************************************
  protected startLoading(message?: string): void
  {

    this.loading = true;
    if (message)
    {
      this.operationMessage = message
    }
  }

  //*********************************************************************************************
}
