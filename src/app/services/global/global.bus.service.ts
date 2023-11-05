/*
 *  Copyright (c) 2021 by JSC POE
 *  23.12.2021, 11:26
 *  @author (created/modified) by Vladimir Yushko
 */
import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, ReplaySubject, Subject, Subscription} from "rxjs";
import {AlertMessageItem} from "../../components/common/notifications/alert/services/alert-notification.service";
import {MessageType} from "../../core/message.type";
import {OperationResult} from "../../models/operation.result.model";
import {GlobalBusRestService} from "./global.bus.rest.service";
import {BusEvent} from "./models/bus.event";
import {EActionType} from "./models/event.type";
import {UiBlockInterfaceInput} from "../../components/common/ui/blockUI/models/ui.block.input.model";
import {isEmptyArray} from "@app-core/core.free.functions";
import {IInformationMessage} from "@app-common-dialogs/information.dialog.new/information.dialog.new.component";

@Injectable()
export class GlobalBusService
{
  private _cashedEventSubject: ReplaySubject<BusEvent<any>>                   = new ReplaySubject<BusEvent<any>>(1);
  private _eventSubject: Subject<BusEvent<any>>                               = new Subject<BusEvent<any>>();
  private readonly _onChangeSelectedAccountIdSubject: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  private readonly _onLoadingSubject: ReplaySubject<UiBlockInterfaceInput>    = new ReplaySubject(1);
  // *********************************************************************************************
  constructor(protected restService: GlobalBusRestService)
  {
  }
  // *********************************************************************************************
  public get selectedAccountId(): number
  {
    return this._onChangeSelectedAccountIdSubject.getValue();
  }
  // *********************************************************************************************
  public blockInterface(message: string, target: any = null): void
  {
    this.sendEvent<UiBlockInterfaceInput>(EActionType.BLOCK_INTERFACE, new UiBlockInterfaceInput(true, message, target));
  }
  // *********************************************************************************************
  public clear(): void
  {
    this.sendCashedEvent<null>(EActionType.EMPTY, null);
  }
  // *********************************************************************************************
  public endLoading(): void
  {
    this._onLoadingSubject.next(<UiBlockInterfaceInput>{blocked : false, message : null});
  }
  // *********************************************************************************************
  public onCashedEvent<T>(type: EActionType, action: any): Subscription
  {
    return this._cashedEventSubject.filter(e => e.type == type).map(e => e.payload).subscribe(action);
  }
  // *********************************************************************************************
  public onEvent<T>(type: EActionType, action: any): Subscription
  {
    return this._eventSubject.filter(e => e.type == type).map(e => e.payload).subscribe(action);
  }
  // *********************************************************************************************
  public onEvents<T>(types: EActionType[], action: any): Subscription
  {
    return this._eventSubject.filter(e => types.some(item => item == e.type)).map(e => e.payload).subscribe(action);
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
    this.sendEvent<IInformationMessage>(EActionType.SHOW_INFORMATION_MESSAGE, <IInformationMessage>{items : [new OperationResult(id, message)], title : title});
  }
  // *********************************************************************************************
  public showInformationMessages(items: OperationResult[], title?: string): void
  {
    this.sendEvent<IInformationMessage>(EActionType.SHOW_INFORMATION_MESSAGE, <IInformationMessage>{items : items, title : title});
  }
  // *********************************************************************************************
  public showMessage(type: MessageType, message: string, title?: string): void
  {
    this.sendEvent<AlertMessageItem>(EActionType.SHOW_MESSAGE, new AlertMessageItem(type, title, message));
  }
  // *********************************************************************************************
  public showMessages(items: OperationResult[]): void
  {
    !isEmptyArray(items) && items.forEach(item => this.showMessage(item.id >= 0 ? MessageType.SUCCESS : MessageType.ERROR, item.message));
  }
  // *********************************************************************************************
  public startLoading(message?: string): void
  {
    this._onLoadingSubject.next(<UiBlockInterfaceInput>{blocked : true, message : message});
  }
  // *********************************************************************************************
  public unblockInterface(): void
  {
    this.sendEvent<UiBlockInterfaceInput>(EActionType.BLOCK_INTERFACE, new UiBlockInterfaceInput(false));
  }
  // *********************************************************************************************
}
