import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductDetailResolver } from './_Resolvers/product-detail.resolver';

const routes: Routes = [{
  path: '',
  component: ProductGridComponent

},
{
  path: 'product/:id',
  component: ProductDetailsComponent,
  resolve: { product: ProductDetailResolver },
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
