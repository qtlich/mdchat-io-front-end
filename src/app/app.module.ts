import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonModule} from "primeng/button";
import {NewUserModule} from "./new.user/new.user.module";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    NewUserModule,
    AppRoutingModule, NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
