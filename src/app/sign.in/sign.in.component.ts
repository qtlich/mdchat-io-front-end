import {Component, EventEmitter, Input, Output} from "@angular/core";
import {SignInScreenDataModel} from "./models/sign.in.screen.data.model";

@Component({
  selector: 'sign-in-component',
  templateUrl: './sign.in.component.html',
  styleUrls: ['./sign.in.component.css']
})
export class SignInComponent
{
  @Input() displayDialog: boolean = false;
  @Input() title: string = "";
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();
  public sD: SignInScreenDataModel = new SignInScreenDataModel();

  public onHideDialog(): void {
    this.onClose.emit(true);
  }

  constructor() {

  }

}
