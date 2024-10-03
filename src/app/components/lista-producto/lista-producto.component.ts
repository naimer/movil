import { Component, Input } from '@angular/core';
import { Product } from '../../data/interface/product.model';
import { ProductoService } from '../../data/service/producto.service';
import { NONE_TYPE } from '@angular/compiler';
import { empty } from 'rxjs';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.scss'
})
export class ListaProductoComponent {
  @Input() productolst: Product[] = [];
  mis_productos = [];
  @Input() boton : boolean = false
  @Input() eliminar: boolean = false
  mostar(){
    console.log()
  }
  constructor(private _productoService:ProductoService){}
  
  comprar(producto:Product){
    this._productoService.agregarCarrito(producto)
  }
  eliminarCarro(producto:Product){
    this._productoService.eliminarCarrito(producto)
  }
}
