import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductlistComponent } from './components/productlist/productlist.component';

const routes: Routes = [
  { path: '',component:HomepageComponent},
  { path: 'productlist', component: ProductlistComponent},
  { path: 'cart', component:CartComponent},
  { path: 'checkout', component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
