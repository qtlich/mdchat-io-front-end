import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {PanelModule} from "primeng/panel";
import {TooltipModule} from "primeng/tooltip";
import {CalendarModule} from "primeng/calendar";
import {NewUserComponent} from "./new.user.component";
import {NewUserDataService} from "./ services/new.user.data.service";
import {NewUserRestService} from "./ services/new.user.rest.service";
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
  declarations: [NewUserComponent],
  exports: [NewUserComponent],
  providers: [NewUserDataService,
    NewUserRestService]
})
export class NewUserModule {
}
