import {Component, EventEmitter, Input, Output} from "@angular/core";
import {SignUpScreenDataModel} from "./models/sign.up.screen.data.model";

@Component({
  selector: 'sign-up-component',
  templateUrl: './sign.up.component.html',
  styleUrls: ['./sign.up.component.css']
})
export class SignUpComponent
{
// export class SignInComponent extends BaseDialog implements OnInit, OnDestroy {
  @Input() displayDialog: boolean = false;
  @Input() title: string = "";
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();
  public sD: SignUpScreenDataModel = new SignUpScreenDataModel();

  public onHideDialog(): void {
    this.onClose.emit(true);
  }

  constructor() {

  }

}
