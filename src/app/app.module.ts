import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosModule } from './modules/productos/productos.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutModule } from './modules/about/about.module';
import { ShopModule } from './modules/shop/shop.module';
import { HelpModule } from './modules/help/help.module';

@NgModule({
  declarations: [AppComponent, NavComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    ProductosModule,
    AboutModule,
    ShopModule,
    HelpModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
