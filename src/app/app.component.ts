import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  displaySignInDialog: boolean = false;
  displaySignUpDialog: boolean = false;

  constructor(private primengConfig: PrimeNGConfig)
  {
  }

  public onShowSignInDialog(): void
  {
    this.displaySignInDialog = true;
  }

  public onCloseSignInDialog(): void
  {
    this.displaySignInDialog = false;
  }

  public onShowSignUpDialog(): void
  {
    this.displaySignUpDialog = true;
  }

  public onCloseSignUpDialog(): void
  {
    this.displaySignUpDialog = false;
  }

  public ngOnInit(): void
  {

  }
}
