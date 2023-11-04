import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {PanelModule} from "primeng/panel";
import {TooltipModule} from "primeng/tooltip";
import {CalendarModule} from "primeng/calendar";
import {SignInComponent} from "./sign.in.component";
import {SignInDataService} from "./ services/sign.in.data.service";
import {SignInRestService} from "./ services/sign.in.rest.service";
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
  declarations: [SignInComponent],
  exports: [SignInComponent],
  providers: [SignInDataService,
    SignInRestService]
})
export class SignInModule
{
}
