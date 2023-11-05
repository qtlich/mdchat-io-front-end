import {Observable, ReplaySubject, Subject, Subscription} from "rxjs";
import {GlobalBusService} from "./global/global.bus.service";

export class BaseService
{
  //*********************************************************************************************
  private readonly _blockButtonSubject: Subject<boolean>               = new Subject<boolean>();
  private readonly _messageSubject: Subject<InformationMessage>        = new Subject<InformationMessage>();
  private readonly _onLoadingSubject: ReplaySubject<boolean>           = new ReplaySubject(1);
  private readonly _operationResultSubject: Subject<OperationResult[]> = new Subject<OperationResult[]>();
  private _subscriptions: Subscription[]                               = [];
  private loading: Subject<boolean>                                    = new Subject<boolean>();
  //*********************************************************************************************
  constructor(protected serviceBus: GlobalBusService)
  {

  }
  //*********************************************************************************************
  public onBlockButtonEvent(): Observable<boolean>
  {
    return this._blockButtonSubject;
  }
  //*********************************************************************************************
  public onLoadingEvent(): Observable<boolean>
  {
    // uncomment on new version
    //return this._onLoadingSubject;
    // delete on new version
    return this.loading;
  }
  //*********************************************************************************************
  /**
   * @deprecated
   * instead it use this.showEventMessage() in components or
   * this.serviceBus.showMessage() everywhere
   * @returns {Subject<InformationMessage>}
   */
  public onMessageEvent(): Subject<InformationMessage>
  {
    return this._messageSubject;
  }
  //*********************************************************************************************
  public onSendOperationResultEvent(): Subject<OperationResult[]>
  {
    return this._operationResultSubject;
  }
  //*********************************************************************************************
  public sendOperationResult(items: OperationResult[]): void
  {
    this._operationResultSubject.next(items);
  }
  //*********************************************************************************************
  public showInformationMessages(items: OperationResult[]): void
  {
    this.serviceBus.showInformationMessages(items);
  }
  //*********************************************************************************************
  public showMessage(type: MessageType, message: string, title?: string): void
  {
    this.serviceBus.showMessage(type, message, title);
  }
  //*********************************************************************************************
  protected addToSubscription(item: Subscription): void
  {
    this._subscriptions.push(item);
  }
  //*********************************************************************************************
  protected blockButton(state: boolean = true): void
  {
    this._blockButtonSubject.next(state);
  }
  //*********************************************************************************************
  protected endLoading(): void
  {
    // uncomment on new version
    //this.serviceBus.endLoading();
    //this.serviceBus.unblockInterface();
    this._onLoadingSubject.next(false);
    //
    // this.__blockButton(false);
    this.loading.next(false);
    this.__blockButton(false);
  }
  //*********************************************************************************************
  protected onSubscribeData(): void
  {
  }
  //*********************************************************************************************
  protected sendMessage(id: MESSAGE_CODES, message: string, error?: any): void
  {
    if(message)
    {
      this._messageSubject.next(error ? new InformationMessage(id, (message + error ? errorToText(error) : ``)) : new InformationMessage(id, message));
    }
  }
  //*********************************************************************************************
  protected startLoading(message?: string): void
  {
    // uncomment after new version
    // this.serviceBus.startLoading(message);
    this._onLoadingSubject.next(true);
    // uncomment after new version
    // message && this.serviceBus.blockInterface(message);
    // delete on new version
    this.__blockButton();
    this.loading.next(true);
  }
  //*********************************************************************************************
  protected toDb<TInputParametersRestFunction, TResultParameterRestFunction>(input: TInputParametersRestFunction,
                                                                             restFunction: (item: TInputParametersRestFunction) => Observable<TResultParameterRestFunction>,
                                                                             subscribeFunc: (data: TResultParameterRestFunction) => void,
                                                                             errorMessage: string,
                                                                             starMessage?: string,
                                                                             sendLoadingEvent: boolean = true,
                                                                             errorFunction?: (error: any) => void): void
  {
    this.blockButton();
    sendLoadingEvent && this.startLoading(starMessage);
    restFunction(input)
      .take(1)
      .finally(() => this.blockButton(false))
      .subscribe(data =>
        {
          sendLoadingEvent && this.endLoading();
          subscribeFunc(data);
        },
        (error: Error) =>
        {
          this.showMessage(MessageType.ERROR, errorMessage + ". Код помилки:" + toString(error.message));
          sendLoadingEvent && this.endLoading();
          errorFunction && errorFunction(error);
        });
  }
  //*********************************************************************************************
  protected toString(item: any): string
  {
    return JSON.stringify(item);
  }
  //*********************************************************************************************
  private __blockButton(state: boolean = true): void
  {
    this._blockButtonSubject.next(state);
  }
  //*********************************************************************************************
  private __subscribeOnData(): void
  {
    this._subscriptions = [];
    this.onSubscribeData();
  }
  //*********************************************************************************************
  private __unsubscribe(): void
  {
    this._subscriptions.forEach(item => item && item.unsubscribe());
    this._subscriptions = [];
  }
  //*********************************************************************************************
}
