import { ICart } from '../_models/ICart';
import { CartServiceService } from './../cart-service.service';
import { catchError } from 'rxjs/operators';
import { Observable ,of} from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class CartItemsResolver implements Resolve<ICart> {
  constructor(
    private cartService : CartServiceService,
    private router: Router
  ){}

  resolve(route: ActivatedRouteSnapshot): Observable<ICart>{
    return this.cartService.getCart().pipe(
      catchError(error => {
        //this.router.navigate(['/members']);
        return of(null);
      })
    )
  }
}
