import {BaseConfig} from "./base.config";
import {isNullOrUndefined} from "./core.free.functions";

/**
 * Базовий клас для клонування,
 * пошуку елементу в масиві,
 * оновлення елементу в масиві,
 * перевірки на пустоту масиву
 */
export abstract class BaseStorage extends BaseConfig
{
  protected constructor(storageName?: string)
  {
    super(storageName);
  }
  //*********************************************************************************************
  /**
   * Завантаження даних з локального сховища
   * @param {string} name - назва параметру
   * @param {T} newItem - новий об'єкт типу Т  - new T();
   * @returns {T} - результат
   */
  protected _loadFromStorage<T>(name: string, newItem: T | T[]): T | T[]
  {
    const item: string | null = localStorage.getItem(name);
    return <T | T[]>(!isNullOrUndefined(item) ? <T | T[]>JSON.parse(item?item:"") : newItem);
  }
  //*********************************************************************************************
  /**
   * Збереження даних в локальне сховище
   * @param {string} name - назва параметру
   * @param {T} item - об'єкт, який буде збережено в сховищі
   */
  protected _saveToStorage<T>(name: string, item: T | T[])
  {
    localStorage.setItem(name, JSON.stringify(item));
  }
}
