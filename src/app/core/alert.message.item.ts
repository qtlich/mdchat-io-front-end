import {MessageType} from "./message.type";

export class AlertMessageItem
{
  constructor(/**
               * Тип повідомлення
               */
              public type: MessageType,
              /**
               * Заголовок повідомлення
               */
              public title: string | null | undefined,
              /**
               * Текст повідомлення
               */
              public message: string | null)
  {
  }
}
