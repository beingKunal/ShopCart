import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/_Models/Product';
@Injectable({
  providedIn: 'root',
})
export class ProductService{
  constructor(private http: HttpClient){}
  baseUrl = environment.BASE_URL;

  getProducts(){
    return this.http.get<Product[]>(this.baseUrl+'/products')
  }
  getProduct(id:number){
    return this.http.get<Product[]>(this.baseUrl+`/products/+${id}`)
  }
}
