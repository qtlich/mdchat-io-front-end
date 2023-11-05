import {Injectable} from "@angular/core";
import {BehaviorSubject, filter, map, Observable, ReplaySubject, Subject} from "rxjs";
import {MessageType} from "../../core/message.type";

import {GlobalBusRestService} from "./global.bus.rest.service";
import {BusEvent} from "../../models/bus.event";
import {EActionType} from "../../models/event.type";
import {IInformationMessage} from "../../core/i.information.message";
import {OperationResult} from "../../models/operation.result";
import {isEmptyArray} from "../../core/core.free.functions";
import {UiBlockInterfaceInput} from "../../core/ui.block.interface.input";
import {AlertMessageItem} from "../../core/alert.message.item";

@Injectable({providedIn: "root"})
export class GlobalBusService
{
  private _cashedEventSubject: ReplaySubject<BusEvent<any>> = new ReplaySubject<BusEvent<any>>(1);
  private _eventSubject: Subject<BusEvent<any>> = new Subject<BusEvent<any>>();
  private readonly _onChangeSelectedAccountIdSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  private readonly _onLoadingSubject: ReplaySubject<UiBlockInterfaceInput> = new ReplaySubject(1);

  // *********************************************************************************************
  constructor(protected restService: GlobalBusRestService)
  {
  }

  // *********************************************************************************************
  // public blockInterface(message: string, target: any = null): void
  // {
  //   this.sendEvent<UiBlockInterfaceInput>(EActionType.BLOCK_INTERFACE, new UiBlockInterfaceInput(true, message, target));
  // }
  // *********************************************************************************************
  public clear(): void
  {
    this.sendCashedEvent<null>(EActionType.EMPTY, null);
  }

  // *********************************************************************************************
  public endLoading(): void
  {
    this._onLoadingSubject.next(<UiBlockInterfaceInput>{blocked: false, message: null});
  }

  // *********************************************************************************************
  public onCashedEvent<T>(type: EActionType, action: any): Observable<any>
  {
    return this._cashedEventSubject.pipe(filter(e => e.type == type), map(e => e.payload));
  }

  // *********************************************************************************************
  public onEvent<T>(type: EActionType, action: any): Observable<any>
  {
    return this._eventSubject.pipe(filter(e => e.type == type), map(e => e.payload));
  }

  // *********************************************************************************************
  public onEvents<T>(types: EActionType[], action: any): Observable<any>
  {
    return this._eventSubject.pipe(filter(e => types.some(item => item == e.type)), map(e => e.payload));
  }

  // *********************************************************************************************
  public onLoadingEvent(): Observable<UiBlockInterfaceInput>
  {
    return this._onLoadingSubject;
  }

  // *********************************************************************************************
  public sendCashedEvent<T>(type: EActionType, payload: T): void
  {
    console.log("sendCashedEvent->", type, "payload", payload);
    this._cashedEventSubject.next(new BusEvent<T>(type, payload));
  }

  // *********************************************************************************************
  public sendEvent<T>(type: EActionType, payload: T): void
  {
    console.log("sendEvent->", type, "payload", payload);
    this._eventSubject.next(new BusEvent<T>(type, payload));
  }

  // *********************************************************************************************
  public setSelectedAccountId(accountId: number): void
  {
    this._onChangeSelectedAccountIdSubject.next(accountId);
  }

  // *********************************************************************************************
  public showInformationMessage(id: number, message: string, title?: string): void
  {
    this.sendEvent<IInformationMessage>(EActionType.SHOW_INFORMATION_MESSAGE, <IInformationMessage>{
      items: [new OperationResult(id, message)],
      title: title
    });
  }

  // *********************************************************************************************
  public showInformationMessages(items: OperationResult[], title?: string): void
  {
    this.sendEvent<IInformationMessage>(EActionType.SHOW_INFORMATION_MESSAGE, <IInformationMessage>{
      items: items,
      title: title
    });
  }

  // *********************************************************************************************
  public showMessage(type: MessageType, message: string, title?: string): void
  {
    this.sendEvent<AlertMessageItem>(EActionType.SHOW_MESSAGE, new AlertMessageItem(type, title, message));
  }

  // *********************************************************************************************
  public showMessages(items: OperationResult[]): void
  {
    // @ts-ignore
    !isEmptyArray(items) && items.forEach(item => this.showMessage(item.id >= 0 ? MessageType.SUCCESS : MessageType.ERROR, item.message));
  }

  // *********************************************************************************************
  public startLoading(message?: string): void
  {
    this._onLoadingSubject.next(<UiBlockInterfaceInput>{blocked: true, message: message});
  }

  // *********************************************************************************************
  public unblockInterface(): void
  {
    this.sendEvent<UiBlockInterfaceInput>(EActionType.BLOCK_INTERFACE, new UiBlockInterfaceInput(false));
  }

  // *********************************************************************************************
}
