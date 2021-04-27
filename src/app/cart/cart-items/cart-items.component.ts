import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from './../cart-service.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../_models/Cart';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  constructor(private cartService:CartServiceService,private route:ActivatedRoute) { }
  cartItems:Cart;

  ngOnInit(): void {
    this.route.data.subscribe((data)=>{
      this.cartItems = data['cartItems'];
    })
    //this.getCartItems();
  }


}
