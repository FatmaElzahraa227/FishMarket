import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-info',
  templateUrl: './blog-info.component.html',
  styleUrls: ['./blog-info.component.scss']
})
export class BlogInfoComponent implements OnInit {
  id:Number=0;
  image:String='';
  title:String='';
  description:String='';
  link:String='';
  constructor(private _ActicatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.id=this._ActicatedRoute.snapshot.params.id;
    this.image=this._ActicatedRoute.snapshot.params.image;
    this.title=this._ActicatedRoute.snapshot.params.title;
    this.description=this._ActicatedRoute.snapshot.params.description;
    this.link=this._ActicatedRoute.snapshot.params.link;

  }
}
