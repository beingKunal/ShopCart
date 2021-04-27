import { Cart } from './_models/Cart';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  baseUrl = environment.BASE_URL ;
  constructor(private http : HttpClient) { }
  cartUrl = "../../assets/Templates/Cart.json";
  getCart(){
    return this.http.get<Cart>(this.cartUrl);
  }
}
