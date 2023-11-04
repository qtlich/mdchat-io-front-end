import {Input} from "@angular/core";
import {MenuItem} from "primeng/primeng";
import {FieldType} from "../models/table.columns.model";
import {isNullOrUndefined} from "./core.free.functions";
import {
  maxCountRowsForScroll,
  pageLinks,
  rowsPerPageOptions,
  styleOfButtons,
  uaLocale,
  yearRange
} from "./core.free.constants";

/**
 * Базовий клас для завантаження
 * налаштувань та загальних змінних
 */
export abstract class BaseConfig {
  public blockButton: boolean = false;
  /**
   * Стиль для звичайної кнопки
   */
  buttonClass: string = styleOfButtons[1];
  /**
   * Стиль для кнопки видалення
   */
  // buttonDeleteClass: string            = styleOfButtons[5];
  /**
   * Контекстне меню
   */
  public contextMenuItems: MenuItem[];
  /**
   * Поточний відкритий період
   */
  currentOpenPeriod: string = null;
  /**
   * Тип поля
   * @type {FieldType}
   */
  fieldType = FieldType;
  /**
   * У разі необхідності можна використовувати для видимості компоненту
   */
  @Input() isVisible: boolean = false;
  /**
   * Статус завантаження
   */
  public loading: boolean = false;
  /**
   * Максимальная кількість рядків для використання скролу
   */
  public maxCountRowsForScroll: number = maxCountRowsForScroll;
  public pageLinks = pageLinks;
  /**
   * У разі необхідності виводимо дані лише в режимі тільки перегляд
   */
  @Input() readOnly: boolean = false;
  /**
   * Налаштування кількості рядків для відображення при використанні пагінатора для таблиці
   * @type {number[]}
   */
  public rowsPerPageOptions: number[] = rowsPerPageOptions;
  /**
   * Локаль для календаря
   */
  public ua = uaLocale;
  /**
   * Період років для календаря
   */
  public yearRange: string = yearRange;
  /**
   * текст повідомлення для компонента common-ui-blockUI
   */
  public operationMessage: string;

  // *********************************************************************************************
  protected constructor(/**
                         * Назва сховища для компонента
                         * Зазвичай це назва класу компоненту + StorageName
                         * @protected
                         * @type{string}
                         */
                        protected storageName?: string) {
    if (isNullOrUndefined(this.storageName)) {
      this.storageName = this.constructor.name;
    }
  }

  //*********************************************************************************************
  protected addContextMenuItem(item: MenuItem): void {
    this.contextMenuItems.push(item);
  }

  //*********************************************************************************************
  protected clearContextMenu(): void {
    this.contextMenuItems = [];
  }

  //*********************************************************************************************
  /**
   * Закінчення завантаження даних
   */
  protected endLoading(): void {
    this.loading = false;
  }

  //*********************************************************************************************
  protected setBlockButton(value: boolean = true): void {
    this.blockButton = value;
  }

  //*********************************************************************************************
  /**
   * Встановити назву для сховища
   * @param {string} name
   */
  protected setStorageName(name: string): void {
    this.storageName = name + "StorageName";
  }

  //*********************************************************************************************
  /**
   * Початок завантаження даних
   */
  protected startLoading(message?: string): void {

    this.loading = true;
    if (message) {
      this.operationMessage = message
    }
  }

  //*********************************************************************************************
}
