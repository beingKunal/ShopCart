import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../_Models/Product';
import { ProductService } from '../_Services/Product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  constructor(private productService:ProductService) { }
  products:Product[];
  // totalRecords: number;
  // page: number = 1;
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products:Product[]) =>{
      this.products = products;
     // this.totalRecords = products.length;

    })
  }

}
