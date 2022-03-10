import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverPhotoComponent } from './cover-photo/cover-photo.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', component: CoverPhotoComponent, data: {index : 0}},
  { path: 'shop', component: ShopComponent, data: {index : 1} },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
