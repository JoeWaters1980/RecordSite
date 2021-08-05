import { NgModule } from '@angular/core';
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
// import { CheckoutComponent } from './components/checkout/checkout.component';


/* Adding the routes for navigation */
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'access', component: AccessComponent },
  { path: 'vinyl', component: VinylComponent },

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
    // vinylProducts,
    // CheckoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
