import { IProduct } from '../_Models/IProduct'
import { catchError } from 'rxjs/operators';
import { Observable ,of} from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ProductService } from '../_Services/Product.service';

@Injectable()
export class ProductGridResolver implements Resolve<IProduct[]> {
  constructor(
    private productService: ProductService,
    private router: Router
  ){}

  resolve(route: ActivatedRouteSnapshot): Observable<IProduct[]>{
    return this.productService.getProducts().pipe(
      catchError(error => {

        return of(null);
      })
    )
  }
}
