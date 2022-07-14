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
import { HomeComponent } from './component/home/home.component';
import { PresentacionComponent } from './component/presentacion/presentacion.component';
import { IndexAdminComponent } from './component/index-admin/index-admin.component';



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
    HomeComponent,
    PresentacionComponent,
    IndexAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
