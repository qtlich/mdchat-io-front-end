import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonModule} from "primeng/button";
import {SignUpModule} from "./sign.up/sign.up.module";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SignInModule} from "./sign.in/sign.in.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    SignUpModule,
    SignInModule,
    AppRoutingModule, NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule
{
}
