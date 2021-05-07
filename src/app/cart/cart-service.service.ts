import { ICart } from './_models/ICart';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  baseUrl = environment.BASE_URL ;
  //baseUrl = 'http://localhost:3000'
  constructor(private http : HttpClient) { }
  //cartUrl = "../../assets/Templates/Cart.json";
  getCart(){
    return this.http.get<ICart>(this.baseUrl+'/carts/1');
  }

  addtoCart(id:number , cart:ICart){
    return this.http.put<ICart>(this.baseUrl+'/carts/' + id , cart);
  }

}
