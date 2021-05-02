import { ProductService } from '../_Services/Product.service'
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  @Output() category =new EventEmitter();
  categories: string[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {

    this.getCategories();
  }

  getCategories() {
    this.productService.getCategories().subscribe(
      (data) => {
        console.log(data)
        this.categories = data;

      },
      (error) => {
        console.log(error);
      }
    );
  }
  selectCategory(category:string){
    this.category.emit(category);
  }
}
