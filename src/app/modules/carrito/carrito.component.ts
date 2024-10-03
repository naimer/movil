import { Component, Input } from '@angular/core';
import { Product } from '../../data/interface/product.model';
import { ProductoService } from '../../data/service/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  productoCarrito:Product[]=[];
  @Input() boton:boolean=false
  constructor(private _productoService:ProductoService){}
  agregarCarrito(){
    this.productoCarrito=this._productoService.listaProductosCarrito
  }
  ngOnInit(): void {
    // this.carritoLista();
    this.agregarCarrito()

  }
}
