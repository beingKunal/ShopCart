import { CartRoutingModule } from './cart-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartItemsResolver } from './_Resolvers/cart-Items.resolver';



@NgModule({
  declarations: [
    CartItemsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CartRoutingModule
  ],
  providers:[CartItemsResolver]
  // exports:[CartItemsComponent]
})
export class CartModule { }
