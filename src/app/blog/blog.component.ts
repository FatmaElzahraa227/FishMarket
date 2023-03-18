import { Component } from '@angular/core';
import blog from '../blog.json';

interface Blog {
  id: Number;
  title: string;
  image: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blog: Blog[] = blog;
  
}
