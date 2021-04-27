import { RegisterGuard } from './Shared/Guards/register.guard';
import { RegisterComponent } from './Shared/register/register.component';
import { AuthGuard } from './Shared/Guards/auth.guard';
import { ProductGridResolver } from './Products/_Resolvers/product-grid.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Products/product-details/product-details.component';
import { ProductGridComponent } from './Products/product-grid/product-grid.component';
import { ProductDetailResolver } from './Products/_Resolvers/product-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductGridComponent,
    resolve:{products : ProductGridResolver}
  },
  {path:'register',
  component:RegisterComponent,
  canActivate:[RegisterGuard]
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
    resolve: { product: ProductDetailResolver },
  },
  {
    path: 'Cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
