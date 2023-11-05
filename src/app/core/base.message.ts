import {InformationMessage} from "../models/information.message";
import {MessageType} from "./message.type";
import {AlertMessageItem} from "./alert.message.item";
import {GlobalBusService} from "../services/global/global.bus.service";
import {EActionType} from "../models/event.type";

export class BaseMessage
{
  public operationMessage: string | null = null;
  public informationMessages: InformationMessage[] = [];

  constructor(protected serviceBus:GlobalBusService)
  {

  }

  public addInformationMessage(id: number, message: string): void
  {
    this.informationMessages.push(new InformationMessage(id, message));
  }

  public clearInformationMessages(): void
  {
    this.informationMessages = [];
  }
  // *********************************************************************************************
  public showEventMessage(type: MessageType, message: string, title?: string): void
  {
    if(!title)
    {
      switch (type)
      {
        case MessageType.ERROR:
          title = "Помилка";
          break;
        case MessageType.INFO:
          title = "Інформація";
          break;
        case MessageType.WARNING:
          title = "Попередження";
          break;
        case MessageType.SUCCESS:
          title = "Успішне виконання операції";
          break;
      }
    }
    this.serviceBus.sendEvent<AlertMessageItem>(EActionType.SHOW_MESSAGE, new AlertMessageItem(type, title, message));
  }
}
