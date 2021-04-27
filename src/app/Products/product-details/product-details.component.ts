import { Product } from '../../Products/_Models/Product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  product : Product
  ngOnInit(): void {
    console.log("hello");
    this.route.data.subscribe((data)=>{
      this.product = data['product'];
    })

  }

}
