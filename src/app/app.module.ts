import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './modules/producto/producto.component';
import { CarritoComponent } from './modules/carrito/carrito.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './modules/home/home.component';
import { FormsModule } from '@angular/forms';
import { MostrarProductoComponent } from './modules/mostrar-producto/mostrar-producto.component';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    CarritoComponent,
    ListaProductoComponent,
    CrearProductoComponent,
    MenuComponent,
    HomeComponent,
    MostrarProductoComponent,
    NuevoProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
