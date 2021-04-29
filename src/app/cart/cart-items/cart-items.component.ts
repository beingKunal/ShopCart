import { Product } from '../../Products/_Models/Product';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from './../cart-service.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../_models/Cart';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
})
export class CartItemsComponent implements OnInit {
  constructor(
    private cartService: CartServiceService,
    private route: ActivatedRoute
  ) {}
  cartItems: Cart;
  totalPrice: number = 0;
  totalAmount: number = 0;
  discount: number = 10;
  deliveryCharges: number = 20;
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.cartItems = data['cartItems'];
    });
    this.getTotalPrice();
    //this.getCartItems();
  }
  Remove(product: Product) {
    this.cartItems.products.splice(
      this.cartItems.products.indexOf(product, 0),
      1
    );
    this.getTotalPrice();
  }


  getTotalPrice() {
    this.totalPrice = 0;
    this.cartItems.products.forEach((product) => {
      this.totalPrice += product.price * product.quantity;
    });
    this.totalAmount = this.totalPrice - this.discount + this.deliveryCharges;
  }

  increaseQty(product: Product) {
    product.quantity < 4 ? (product.quantity += 1) : console.log('Limit is 4');
  }
  decreaseQty(product: Product) {
    product.quantity == 1 ? (product.quantity -= 1) : 1;
  }
}
