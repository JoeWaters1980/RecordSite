import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AccountComponent } from './Components/account/account.component'
import { CheckoutComponent } from './Components/checkout/checkout.component'
import { HomeComponent } from './Components/home/home.component'
import { LoginComponent } from './Components/login/login.component'
import { ShopComponent } from './Components/shop/shop.component'
import { SignUpComponent } from './Components/sign-up/sign-up.component'

const routes: Routes = [
  
/* Adding the routes for navigation */
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'signUp', component: SignUpComponent },
    { path: 'checkout', component: CheckoutComponent},
    { path: 'account', component: AccountComponent},
    { path: 'Shop', component: ShopComponent},
  
  ];
//   { path: '**', component: PageNotFoundComponent }


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}