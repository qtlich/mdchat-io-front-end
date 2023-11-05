export class UiBlockInterfaceInput
{
  constructor(/**
               * Статус блокування
               */
              public blocked: boolean,
              /**
               * Повідомлення
               */
              public message?: string | null,
              /**
               *
               */
              public target?: any)
  {
  }
}
