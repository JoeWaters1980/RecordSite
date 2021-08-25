import { NgModule,ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { VinylComponent } from './Components/vinyl/vinyl.component';
import { AccessComponent } from './Components/access/access.component';
import { LoginComponent } from './Components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import {vinylProducts} from '../data/vinylProducts';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountComponent } from './Components/account/account.component';


/* Adding the routes for navigation */
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'access', component: AccessComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: 'account', component: AccountComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    VinylComponent,
    AccessComponent,
    LoginComponent,
    CheckoutComponent,
    ProductListComponent,
    SignUpComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
