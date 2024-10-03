import { Injectable } from '@angular/core';
import { Product } from '../interface/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  listaProductosCarrito:Product[]=[]
  constructor() { }
  agregarCarrito(producto:Product){
    this.listaProductosCarrito.push(producto)
  }
  eliminarCarrito(producto:Product){
    this.listaProductosCarrito.splice(producto.id)
  }
}
