import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-fish-info',
  templateUrl: './fish-info.component.html',
  styleUrls: ['./fish-info.component.scss'],
})
export class FishInfoComponent implements OnInit {
  id:Number=0;
  image:String='';
  title:String='';
  lowPrice:String='';
  highPrice:String='';
  price:String='';
  constructor(private _ActicatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.id=this._ActicatedRoute.snapshot.params.id;
    this.image=this._ActicatedRoute.snapshot.params.image;
    this.title=this._ActicatedRoute.snapshot.params.title;
    this.lowPrice=this._ActicatedRoute.snapshot.params.lowPrice;
    this.highPrice=this._ActicatedRoute.snapshot.params.highPrice;
    this.price=this._ActicatedRoute.snapshot.params.price;

  }
}
