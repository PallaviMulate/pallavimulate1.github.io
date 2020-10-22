import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { TopnavComponent } from './topnav/topnav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BrandComponent } from './brand/brand.component';
import { FooterComponent } from './footer/footer.component';
import { FestiveoffersComponent } from './festiveoffers/festiveoffers.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomecategoriesComponent } from './homecategories/homecategories.component';

import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { DigiservicesService } from './digiservices.service';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';


import { from } from 'rxjs';





const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'products', component:ProductsComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'cart', component:CartComponent},
  {path:'header',component:HeaderComponent},
  {path:'login',component:LoginComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopnavComponent,
    CarouselComponent,
    BrandComponent,
    FooterComponent,
    FestiveoffersComponent,
    AboutusComponent,
    ProductsComponent,
    GalleryComponent,
    ContactusComponent,
    HomecategoriesComponent,
   
    HomeComponent,
   
    CartComponent,
   
    LoginComponent,
   
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
   
    
   
  
  
  ],
  providers: [DigiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule {
  FooterComponent;
  CarouselComponent;


 
 }
