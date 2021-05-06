import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../_Models/IProduct';
import { ProductService } from '../_Services/Product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
})
export class ProductGridComponent implements OnInit, OnDestroy {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}
  products: IProduct[];
  searchForm: FormGroup;
  totalRecords: number;
  page: number = 1;
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.products = data['products'];
    });
    this.createSearchForm();
  }
  createSearchForm() {
    this.searchForm = this.fb.group({
      search: [''],
    });
  }
  Search() {
    this.productService
      .searchProducts(this.searchForm.value['search'])
      .subscribe((data) => {
        this.products = data;
        this.products.length <= 0
          ? this.toastr.info('Please use different keywords', 'No products', {
              positionClass: 'toast-center-center',
            })
          : null;
      });
  }
  categoryFilter(event) {
    this.productService.filterProductsByCategory(event).subscribe((data) => {
      this.products = data;
      this.products.length <= 0
        ? this.toastr.info('No product under specific category', 'No products', {
            positionClass: 'toast-center-center',
          })
        : null;
    });
  }

  ngOnDestroy() {
    this.searchForm.reset();
  }
  // CancelRegisterMode(registermode : boolean){
  //   this.registerMode = registermode ;
  // }
}
