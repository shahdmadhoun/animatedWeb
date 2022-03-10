import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoverPhotoComponent } from './cover-photo/cover-photo.component';
import { ProductsTypesComponent } from './products-types/products-types.component';
import { BestSelerComponent } from './best-seler/best-seler.component';
import { CreamTypesComponent } from './cream-types/cream-types.component';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    CoverPhotoComponent,
    ProductsTypesComponent,
    BestSelerComponent,
    CreamTypesComponent,
    FooterComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
