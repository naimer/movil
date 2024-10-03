import { Component, importProvidersFrom } from '@angular/core';
import { CrearProductoComponent } from '../../components/crear-producto/crear-producto.component';



@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrl: './mostrar-producto.component.scss'
})
export class MostrarProductoComponent {

 productos: any[] = []; 

 recibirProducto(nuevoProducto: any) {
   this.productos.push(nuevoProducto);
 }
}
