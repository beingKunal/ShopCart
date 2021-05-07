import { filter, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/app/Products/_Models/IProduct';
import { BehaviorSubject, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService{
  constructor(private http: HttpClient){}
  // baseUrl = environment.BASE_URL;
  baseUrl = 'http://localhost:3000'
  searchKey = new BehaviorSubject<string>("");


  getProducts(){
    return this.http.get<IProduct[]>(this.baseUrl+'/products')
  }

  getProduct(id:number){
    return this.http.get<IProduct[]>(this.baseUrl+`/products/${id}`)
  }

  filterProductsByCategory(category:string){
    return this.http.get<IProduct[]>(this.baseUrl+`/products?category=${category}`);
    // .pipe(map(data => data.filter(product => product.category == category)));
  }

  searchProducts(keyword:string){
    return this.http.get<IProduct[]>(this.baseUrl+`/products?description_like=${keyword}title_like=${keyword}`)
    // .pipe(map(data => data.filter(product => product.description.includes(keyword)
    //                               || product.title.includes(keyword))));
  }

  getCategories(){
    // https://fakestoreapi.com/products/categories
    return this.http.get<string[]>(this.baseUrl+'/categories')
  }
}
