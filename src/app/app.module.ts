import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductComponent } from './Product/product.component';
import { ProductDetailResolver } from './_Resolvers/product-detail.resolver';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductGridComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [ProductDetailResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
