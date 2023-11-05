import {Input} from "@angular/core";
import {isNullOrUndefined} from "./core.free.functions";
import {pageLinks, rowsPerPageOptions, uaLocale, yearRange} from "./core.free.constants";
import {MenuItem} from "primeng/api";

/**
 * Базовий клас для завантаження
 * налаштувань та загальних змінних
 */
export abstract class BaseConfig
{
  public blockButton: boolean = false;
  /**
   * Контекстне меню
   */
  public contextMenuItems: MenuItem[] = [];
  /**
   * У разі необхідності можна використовувати для видимості компоненту
   */
  @Input() isVisible: boolean = false;
  /**
   * Статус завантаження
   */
  public loading: boolean = false;

  public pageLinks = pageLinks;
  /**
   * У разі необхідності виводимо дані лише в режимі тільки перегляд
   */
  @Input() readOnly: boolean = false;
  /**
   * Локаль для календаря
   */
  public ua = uaLocale;
  /**
   * текст повідомлення для компонента common-ui-blockUI
   */
  public operationMessage: string = "";

  // *********************************************************************************************
  protected constructor(/**
                         * Назва сховища для компонента
                         * Зазвичай це назва класу компоненту + StorageName
                         * @protected
                         * @type{string}
                         */
                        protected storageName?: string)
  {
    if (isNullOrUndefined(this.storageName))
    {
      this.storageName = this.constructor.name;
    }
  }

  //*********************************************************************************************
  protected addContextMenuItem(item: MenuItem): void
  {
    this.contextMenuItems.push(item);
  }

  //*********************************************************************************************
  protected clearContextMenu(): void
  {
    this.contextMenuItems = [];
  }

  //*********************************************************************************************
  /**
   * Закінчення завантаження даних
   */
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
  /**
   * Встановити назву для сховища
   * @param {string} name
   */
  protected setStorageName(name: string): void
  {
    this.storageName = name + "StorageName";
  }

  //*********************************************************************************************
  /**
   * Початок завантаження даних
   */
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
