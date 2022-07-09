import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { BannerComponent } from './component/banner/banner.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { CarruselComponent } from './component/carrusel/carrusel.component';
import { NormatividadComponent } from './component/normatividad/normatividad.component';
import { NosotrosComponent } from './component/nosotros/nosotros.component';
import { ServiciosComponent } from './component/servicios/servicios.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    ContactComponent,
    CarruselComponent,
    NormatividadComponent,
    NosotrosComponent,
    ServiciosComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
