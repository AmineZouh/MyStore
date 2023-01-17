import { ProductItemShowComponent } from './components/product-item-show/product-item-show.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {path:"", component:ProductListComponent},
  {path:"cart", component:CartComponent},
  {path:"order", component:OrderComponent},
  {path:"product/:id", component:ProductItemShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
