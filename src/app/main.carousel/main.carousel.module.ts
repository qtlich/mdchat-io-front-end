import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {PanelModule} from "primeng/panel";
import {TooltipModule} from "primeng/tooltip";
import {CalendarModule} from "primeng/calendar";
import {MainCarouselComponent} from "./main.carousel.component";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";

@NgModule({
            imports: [CommonModule,
              FormsModule,
              InputTextModule,
              DialogModule,
              ButtonModule,
              PanelModule,
              TooltipModule,
              CalendarModule, CarouselModule, TagModule],
            declarations: [MainCarouselComponent],
            exports: [MainCarouselComponent]
          })
export class MainCarouselModule
{
}
