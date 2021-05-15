import { AuthService } from './../../Shared/Auth.service';
import { ICart } from './../../cart/_models/ICart';
import { CartServiceService } from './../../cart/cart-service.service';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from '../_Models/IProduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private cartService: CartServiceService,
    private authService: AuthService
  ) { }
  product: IProduct;
  ifGoToCart:boolean = false;
  cart: ICart;
  ngOnInit(): void {
    // console.log("hello");
    this.route.data.subscribe((data) => {
      this.product = data['product'];
    });
  }

  cartOptions(item: IProduct, target , ifGoToCart:boolean){
    ifGoToCart?this.router.navigate(['/Cart']):this.addtoCart(item, target)
  }
  addtoCart(item: IProduct, target ) {
    this.cartService.getCart().subscribe((data) => {
      this.cart = data;
      // console.log("Product", item)
      console.log("products", this.cart.products)

      // console.log("Index is", this.cart.products.findIndex((product)=>product.id == product.id,1))
      // console.log("Filter ?", this.cart.products.filter((product) => product.id == product.id))
      this.cart.products.filter((product) => product.id == item.id).length > 0
        ? this.toastr.info("Already in Cart")
        : this.updateCart(item)

    }, (error) => {this.toastr.error(error)}, () => {
      console.log("In complete")
      console.log("products", this.cart.products)
      target.textContent = 'Go To Cart';
      this.ifGoToCart = true
    });

  }

  updateCart(product: IProduct) {
    product.quantity = 1;
    this.cart.products.push(product);
    // console.log("inside update cart", this.cart)
    this.cartService.addtoCart(this.cart.id, this.cart).subscribe((response) => {
      console.log("respons after Update" , response)
      this.toastr.success(this.product.title + ' added to Cart!');
    }, (error) => this.toastr.error("Something went Wrong") ,()=>{
      this.cartService.getCart().subscribe((data) => {
        console.log("After Update",data)
          })
    })

  }

  loggedIn() {
    return this.authService.loggedIn();
  }
  // navigate() {
  //   this.router.navigate([''])
  // }
}
