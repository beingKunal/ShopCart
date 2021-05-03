import { ToastrService } from 'ngx-toastr';
import { CartServiceService } from './../cart-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Checkout',
  templateUrl: './Checkout.component.html',
  styleUrls: ['./Checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor(
    private cartService: CartServiceService,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {}
  checkOutForm: FormGroup;
  cartItems : any[];
  totalAmount:number = 0;
  ngOnInit() {
    this.getCartItems();
    this.createCheckOutForm();
  }

  createCheckOutForm() {
    this.checkOutForm = this.fb.group({
      fullName: ['',[Validators.required]],
      email: ['',[Validators.required]],
      address: ['',[Validators.required]],
      state:['',[Validators.required]],
      city: ['',Validators.required],
      zip: ['',Validators.required],
      cardname: ['',Validators.required],
      cardnumber: ['',Validators.required],
      expmonth: ['',Validators.required],
      expyear: ['',Validators.required],
      sameaddress: ['',Validators.required],
      cvv:['',Validators.required]
    });
  }
  placeOrder(){
    this.toastr.success("Order Placed Successfully");
  }

  getCartItems(){
    this.cartService.getCart().subscribe((data)=>{
    this.cartItems = data.products
    data.products.forEach((item)=>this.totalAmount+= item.quantity*item.price)}
    ),()=>{console.error();}
  }
}
