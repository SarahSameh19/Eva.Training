import { Component } from '@angular/core';
import { DiscountOffers, IProduct, ICategory } from '../shared-classes-and-types/iproduct.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  Discount: DiscountOffers = DiscountOffers.TenPercent;
  StoreName: string = "My Store";
  StoreLogo: string = "assets/store-logo.png"; 
  ProductList: IProduct[] = []; 
  CategoryList: ICategory[] = []; 
  ClientName: string = "John Doe";
  IsPurchased: boolean = false;
}
