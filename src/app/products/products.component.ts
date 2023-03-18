import { Component } from '@angular/core';
import fishData from '../Fish.json';
import fishData2 from '../Fish2.json';

interface Fish{
  id:Number;
  image:String;
  title:String;
  lowPrice:String;
  highPrice:String;
  price:String;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  searchText:any;
  fish:Fish[]=fishData;
  fish2:Fish[]=fishData2;
}
