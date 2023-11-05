interface IAction<T>
{
  payload: T
  type: EActionType,
}

export const enum EActionType
{
  EMPTY = "EMPTY", // null
  BLOCK_INTERFACE = "BLOCK_INTERFACE", // boolean
  SHOW_INFORMATION_MESSAGE = "SHOW_INFORMATION_MESSAGE",
  SHOW_MESSAGE = "SHOW_MESSAGE",

}
