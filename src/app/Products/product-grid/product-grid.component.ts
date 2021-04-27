import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../_Models/Product';
import { ProductService } from '../_Services/Product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  constructor(private productService:ProductService , private route:ActivatedRoute) { }
  products:Product[];
  // registerMode:boolean = true;
  totalRecords: number;
  page: number = 1;
  ngOnInit(): void {
    this.route.data.subscribe((data)=>{
      this.products = data['products'];
    })
  }
  Search(){
    this.productService.searchProducts("Casual").subscribe((data)=>{
      this.products = data ;
    })
  }

  // CancelRegisterMode(registermode : boolean){
  //   this.registerMode = registermode ;
  // }
}
