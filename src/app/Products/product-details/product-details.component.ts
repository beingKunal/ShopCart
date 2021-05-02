import { ToastrService } from 'ngx-toastr';
import { Product } from '../../Products/_Models/Product';
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
    private router: Router
  ) {}
  product: Product;
  ngOnInit(): void {
    // console.log("hello");
    this.route.data.subscribe((data) => {
      this.product = data['product'];
    });
  }

  addtoCart(target) {
    target.textContent = 'Go To Cart';
    this.toastr.success(this.product.title + ' added to Cart!', '', {
      positionClass: 'toast-bottom-right',
    });
    target.addEventListener(
      'click',
      () => this.router.navigate(['/Cart']),
      true
    );
    console.log(target);
  }
}
