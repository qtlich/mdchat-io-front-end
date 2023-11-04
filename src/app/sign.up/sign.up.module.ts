import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {PanelModule} from "primeng/panel";
import {TooltipModule} from "primeng/tooltip";
import {CalendarModule} from "primeng/calendar";
import {SignUpComponent} from "./sign.up.component";
import {SignUpDataService} from "./ services/sign.up.data.service";
import {SignUpRestService} from "./ services/sign.up.rest.service";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [CommonModule,
    FormsModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    PanelModule,
    TooltipModule,
    CalendarModule],
  declarations: [SignUpComponent],
  exports: [SignUpComponent],
  providers: [SignUpDataService,
    SignUpRestService]
})
export class SignUpModule
{
}
