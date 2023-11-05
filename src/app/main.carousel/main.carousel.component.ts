import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {SignUpDataService} from "../sign.up/ services/sign.up.data.service";
import {SignUpRestService} from "../sign.up/ services/sign.up.rest.service";
import {BaseSubscription} from "../core/base.subscription";
import {SignUpScreenDataModel} from "../sign.up/models/sign.up.screen.data.model";
import {GlobalBusService} from "../services/global/global.bus.service";
import {ProductService} from "./services/main.carousel.data.service";


export interface Product
{
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
             selector: 'main-carousel-component',
             templateUrl: './main.carousel.component.html',
             styleUrls: ['./main.carousel.component.css'],
             providers: [ProductService]
           })
export class MainCarouselComponent extends BaseSubscription implements OnInit
{
// export class SignInComponent extends BaseDialog implements OnInit, OnDestroy {
  @Input() displayDialog: boolean = false;
  @Input() title: string = "";
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();
  public sD: SignUpScreenDataModel = new SignUpScreenDataModel();
  public responsiveOptions: any[] | undefined;
  public products: Product[] | undefined;

  constructor(private productService: ProductService,
              serviceBus: GlobalBusService)
  {
    super(serviceBus);
    this.title = "carousel";
  }

  public override ngOnInit()
  {
    super.ngOnInit();
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });
  }

  public getSeverity(status: string)
  {
    switch (status)
    {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
    return;
  }
}
