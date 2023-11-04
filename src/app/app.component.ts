import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  displayDialog: boolean = false;

  constructor(private primengConfig: PrimeNGConfig)
  {
  }

  public showDialog(): void
  {
    this.displayDialog = true;
  }

  public ngOnInit(): void
  {

  }
}
