import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NewUserScreenDataModel} from "./models/new.user.screen.data.model";

@Component({
  selector: 'new-user-component',
  templateUrl: './new.user.component.html',
  styleUrls: ['./new.user.component.css']
})
export class NewUserComponent {
// export class NewUserComponent extends BaseDialog implements OnInit, OnDestroy {
  @Input() displayDialog: boolean = false;
  @Input() title: string = "";
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();
  public sD: NewUserScreenDataModel = new NewUserScreenDataModel();

  public onHideDialog(): void {
    this.onClose.emit(true);
  }

  constructor() {

  }

}
