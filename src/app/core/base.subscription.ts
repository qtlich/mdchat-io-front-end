import {Subscription} from "rxjs";
import {Component, OnDestroy, OnInit} from "@angular/core";
import {BaseConfig} from "./base.config";
import {isNullOrUndefined} from "./core.free.functions";
import {GlobalBusService} from "../services/global/global.bus.service";

@Component({
             selector: "BaseSubscription",
             templateUrl: './base.html'
           })
export abstract class BaseSubscription extends BaseConfig implements OnInit, OnDestroy
{
  private _subscriptions: Subscription[] = [];

  //*********************************************************************************************
  protected constructor(serviceBus: GlobalBusService)
  {
    super(serviceBus);
  }

  //*********************************************************************************************
  public ngOnDestroy(): void
  {
    this.__unsubscribe();
  }

  //*********************************************************************************************
  public ngOnInit(): void
  {
    this.__subscribeOnData();
  }

  //*********************************************************************************************
  protected subscribe(item: Subscription): void
  {
    this._subscriptions.push(item);
  }

  //*********************************************************************************************
  /**
   * Підписка на дані
   * Можна перекрити у нащадку
   */
  protected onSubscribeData(): void
  {
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
    this._subscriptions.forEach(item => !isNullOrUndefined(item) && item.unsubscribe());
    this._subscriptions = [];
  }
}
