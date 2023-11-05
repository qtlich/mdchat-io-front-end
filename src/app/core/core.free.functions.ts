import {SimpleChanges} from "@angular/core";

//*************************************************************************************************
export function toString(value: any): string
{
  return JSON.stringify(value);
}

export function isNumber(value: any): boolean
{
  return typeof value === "number" && isFinite(value);
}
//*************************************************************************************************
export function isEmptyStringField(value: string, minLen: number | null = null): boolean
{
  return isNullOrUndefined(value) || isNullOrUndefined(value.length) || (minLen == null ? value.length == 0 : value.length < minLen);
}
//*************************************************************************************************
export function isEmptyNumberField(value: number): boolean
{
  return isNullOrUndefined(value) || isEmptyStringField(value.toString()) || isNaN(value);
}
//*************************************************************************************************
export function isNull(value: any): boolean
{
  return value === null;
}
//*************************************************************************************************
export function isUndefined(value: any): boolean
{
  return value === undefined;
}
//*************************************************************************************************
export function isNullOrUndefined(value: any): boolean
{
  return value === null || value === undefined;
}

//*************************************************************************************************
export function isEmptyArray(array: any): boolean
{
  return !(!isNullOrUndefined(array) && !isNullOrUndefined(array.length) && array.length > 0);
}

//*************************************************************************************************
export function executeIf<V>(condition: boolean, callBackIf: () => V, callBackElse: () => V | undefined)
{
  return condition ? callBackIf() : callBackElse();
}

//*************************************************************************************************
export function isChangedField(changes: SimpleChanges, field: string): boolean
{
  return changes.hasOwnProperty(field) && changes[field].previousValue != changes[field].currentValue;
}

//*************************************************************************************************
export function isChangedAndNotNullOrUndefined(changes: SimpleChanges, field: string): boolean
{
  return isChangedField(changes, field) && !isNullOrUndefined(changes[field].currentValue);
}

//*************************************************************************************************
export function isChangedAndNullOrUndefined(changes: SimpleChanges, field: string): boolean
{
  return isChangedField(changes, field) && isNullOrUndefined(changes[field].currentValue);
}

//*************************************************************************************************
// export function executeIfWithValue<T, V>(formValueFunc: () => T, conditionFunc: (value: T) => boolean, callBackIf: (value: T) => V, callBackElse: (value: T) => V = (_value: T) => void 0) {
//   return tryExecute(() => {
//     const value = formValueFunc();
//     return executeIf(conditionFunc(value), () => callBackIf(value), () => callBackElse(value));
//   });
// }

//*************************************************************************************************
// export function tryExecute<V>(execFunc: () => V, errorCallBack: (error) => any = (error) => console.error(error)) {
//   try {
//     return execFunc();
//   } catch (error) {
//     errorCallBack(error);
//   }
// }

//*************************************************************************************************
