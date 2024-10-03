import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './modules/producto/producto.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { CarritoComponent } from './modules/carrito/carrito.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';
import { MostrarProductoComponent } from './modules/mostrar-producto/mostrar-producto.component';

const routes: Routes = [
  {path:'', component:ProductoComponent},
  {path:'lista',component:ListaProductoComponent},
  {path:'carrito', component:CarritoComponent},
  {path:'crea', component:CrearProductoComponent},
  {path: 'crear',component: MostrarProductoComponent},
  {path: 'nuevo', component: NuevoProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
