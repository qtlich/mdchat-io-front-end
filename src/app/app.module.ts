import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonModule} from "primeng/button";
import {SignUpModule} from "./sign.up/sign.up.module";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SignInModule} from "./sign.in/sign.in.module";
import {PanelMenuModule} from "primeng/panelmenu";
import {HttpClientModule} from "@angular/common/http";
import {initializer} from "./app.init";
import {AppConfigService} from "./services/global/app.config.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    SignUpModule,
    SignInModule,
    AppRoutingModule,
    NgOptimizedImage,
    PanelMenuModule],
  providers: [
    // AppConfigService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializer,
    //   multi: true,
    //   deps: [AppConfigService]
    // },
    ],
  bootstrap: [AppComponent]
})
export class AppModule
{
}
