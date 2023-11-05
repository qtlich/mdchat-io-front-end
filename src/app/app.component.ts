import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem, PrimeNGConfig} from 'primeng/api';
import {HttpClient} from "@angular/common/http";
import {BaseSubscription} from "./core/base.subscription";
import {GlobalBusService} from "./services/global/global.bus.service";
import {AppDataService} from "./services/app.data.service";

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.scss']
           })
export class AppComponent extends BaseSubscription implements OnInit, OnDestroy
{
  displaySignInDialog: boolean = false;
  displaySignUpDialog: boolean = false;

  public menuItems: MenuItem[] = [];

  constructor(private primengConfig: PrimeNGConfig,
              private _http: HttpClient,
              private _dS: AppDataService,
              serviceBus: GlobalBusService)
  {
    super(serviceBus);
  }

  protected override onSubscribeData()
  {
    super.onSubscribeData();
    this.subscribe(this._dS.onLoadMenuEvent().subscribe(data => this.menuItems = data));
  }

  public onShowSignInDialog(): void
  {
    this.displaySignInDialog = true;
  }

  public onCloseSignInDialog(): void
  {
    this.displaySignInDialog = false;
  }

  public onShowSignUpDialog(): void
  {
    this.displaySignUpDialog = true;
  }


  public onCloseSignUpDialog(): void
  {
    this.displaySignUpDialog = false;
  }

}
