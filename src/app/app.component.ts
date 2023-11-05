import {Component, OnInit} from '@angular/core';
import {MenuItem, PrimeNGConfig} from 'primeng/api';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  displaySignInDialog: boolean = false;
  displaySignUpDialog: boolean = false;
  public menuItems: MenuItem[] = [];

  constructor(private primengConfig: PrimeNGConfig,
              private _http: HttpClient)
  {
    this.testApi();
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

  public testApi(): void
  {
    this._http.get(`http://192.168.1.60:4200/json`).subscribe(data =>
    // this._http.get(`http://192.168.1.60:4200/json`, httpOptions).subscribe(data =>
    {
      console.log(data);
    });
  }

  public onCloseSignUpDialog(): void
  {
    this.displaySignUpDialog = false;
  }

  public ngOnInit(): void
  {

  }
}
