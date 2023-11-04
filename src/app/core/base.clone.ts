import {BaseConfig} from "./base.config";
import {isNullOrUndefined} from "./core.free.functions";

/**
 * Базовий клас для клонування,
 * пошуку елементу в масиві,
 * оновлення елементу в масиві,
 * перевірки на пустоту масиву
 */
export abstract class BaseClone extends BaseConfig
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
    const item: string = localStorage.getItem(name);
    return <T | T[]>(!isNullOrUndefined(item) ? <T | T[]>JSON.parse(item) : newItem);
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
  //*********************************************************************************************
  /**
   * Клонувати елемент
   * @param {TSource} source - елемент який плануємо клонувати
   * @param {TSource} newItem - екземпляр нового елементу куди буде виконане клонування new T();
   * @returns {TSource} - повертає склонований елемент в екземплярі newItem
   */
  protected cloneItemValues<TSource>(source: TSource, newItem: TSource): TSource
  {
    for (let prop in source)
    {
      newItem[prop] = source[prop];
    }
    return newItem;
  }
  //*********************************************************************************************
  /**
   * Глибоке копіювання об'ектів
   * @param {TSource} source
   * @returns {any}
   */
  protected deepClone<TSource>(source: TSource)
  {
    return JSON.parse(JSON.stringify(source));
  }
  //*********************************************************************************************
  /**
   *
   * @param {TSource[]} items - массив в якому будемо шукати
   * @param {TSource} item - елоемент який шукаэмо
   * @returns {number} - індекс знайденого елементу
   */
  protected findItemIndexInArray<TSource>(items: TSource[], item: TSource): number
  {
    return items.indexOf(item);
  }
  //*********************************************************************************************
  /**
   * Оновлення елементу в массиві (елемент повинен бути в массиві)
   * @param {TSource[]} items - массив в якому будемо оновлювати елемент
   * @param {TSource} item - елемент який будемо оновлювати
   * @returns {TSource[]} - повертає оновлений массив
   */
  protected updateItemValueInArray<TSource>(items: TSource[], item: TSource): TSource[]
  {
    let values                                              = [...items];
    values[this.findItemIndexInArray<TSource>(items, item)] = item;
    return values;
  }
  //*********************************************************************************************
}
