import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoverPhotoComponent } from './cover-photo/cover-photo.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', component: CoverPhotoComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'ContactUs', component: ContactUsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
