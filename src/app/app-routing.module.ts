import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogInfoComponent } from './blog-info/blog-info.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FishInfoComponent } from './fish-info/fish-info.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:'blog',component:BlogComponent},
  {path:'about',component:AboutComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'fish-info/:id/:image/:title/:lowPrice/:highPrice/:price',component:FishInfoComponent},
  {path:'blog-info/:id/:image/:title/:description/:link',component:BlogInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
