import {Component, EventEmitter, Input, Output} from "@angular/core";
import {SignUpScreenDataModel} from "./models/sign.up.screen.data.model";
import {SignUpDataService} from "./ services/sign.up.data.service";
import {BaseSubscription} from "../core/base.subscription";
import {RegisterUserInputModel} from "./models/register.user.input.model";
import {GlobalBusService} from "../services/global/global.bus.service";
import {isEmptyArray, isEmptyStringField} from "../core/core.free.functions";
import {SignUpRestService} from "./ services/sign.up.rest.service";

@Component({
             selector: 'sign-up-component',
             templateUrl: './sign.up.component.html',
             styleUrls: ['./sign.up.component.css'],
             providers: [SignUpDataService,
               SignUpRestService]
           })
export class SignUpComponent extends BaseSubscription
{
// export class SignInComponent extends BaseDialog implements OnInit, OnDestroy {
  @Input() displayDialog: boolean = false;
  @Input() title: string = "";
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();
  public sD: SignUpScreenDataModel = new SignUpScreenDataModel();

  constructor(private _dS: SignUpDataService,
              serviceBus: GlobalBusService)
  {
    super(serviceBus);
    this.title = "Register";
  }

  public onHideDialog(): void
  {
    this.onClose.emit(true);
  }

  public onCloseClick(): void
  {
    this.displayDialog = false;
  }

  public onRegisterClick(): void
  {
    this.__saveData();
  }

  private __saveData(): void
  {
    this.__isValidData() ? this._dS.registerNewUser(new RegisterUserInputModel(this.sD.username,
                                                                               this.sD.displayName,
                                                                               this.sD.email,
                                                                               this.sD.password)) : this.serviceBus.showMessages(this.informationMessages);
  }

  private __isValidData(): boolean
  {
    let i: number = 0;
    this.clearInformationMessages();
    // @ts-ignore
    isEmptyStringField(this.sD.username) && this.addInformationMessage(--i, `enter username`);
    // @ts-ignore
    isEmptyStringField(this.sD.displayName) && this.addInformationMessage(--i, `enter display name`);
    // @ts-ignore
    isEmptyStringField(this.sD.email) && this.addInformationMessage(--i, `enter email`);
    // @ts-ignore

    isEmptyStringField(this.sD.password) && this.addInformationMessage(--i, `enter password`);
    if (this.sD.password != this.sD.repeatedpassword)
      this.addInformationMessage(--i, `Password mismatch`);
    return isEmptyArray(this.informationMessages);
  }
}
