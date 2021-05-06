import { ToastrService } from 'ngx-toastr';
import { IProduct } from '../../Products/_Models/IProduct';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from './../cart-service.service';
import { Component, OnInit } from '@angular/core';
import { ICart } from '../_models/ICart';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent implements OnInit {
  constructor(
    private cartService: CartServiceService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}
  cartItems: ICart;
  totalPrice: number = 0;
  totalAmount: number = 0;
  discount: number = 10;
  deliveryCharges: number = 20;
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.cartItems = data['cartItems'];
      console.log(this.cartItems);
    });
    this.getTotalPrice();
    //this.getCartItems();
  }
  Remove(product: IProduct) {
    this.cartItems.products.splice(
      this.cartItems.products.indexOf(product, 0),
      1
    );
    this.cartService.addtoCart(this.cartItems.id, this.cartItems).subscribe(
      () => {
        this.toastr.success('Removed Successfully');
      },
      (error) => console.log(error),
      () => this.getTotalPrice()
    );
  }

  getTotalPrice() {
    this.totalPrice = 0;
    this.cartItems.products.forEach((product) => {
      this.totalPrice += product.price * product.quantity;
    });
    this.totalAmount = this.totalPrice;
  }

  increaseQty(product: IProduct) {
    product.quantity < 4
      ? this.updateCart(product, true)
      : this.toastr.warning('Oops! Cannot exceed 4 quantities');
    this.getTotalPrice();
  }
  decreaseQty(product: IProduct) {
    product.quantity == 1
      ? this.toastr.warning('Please remove item from Cart')
      : this.updateCart(product, false);
    this.getTotalPrice();
  }

  updateCart(product: IProduct, isIncrease: boolean) {
    isIncrease ? (product.quantity += 1) : (product.quantity -= 1);
    this.cartService.addtoCart(this.cartItems.id, this.cartItems).subscribe(
      () => {
        this.toastr.success('Quantity Updated Successfully');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
