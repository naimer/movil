import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../data/interface/product.model';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.scss'
})
export class CrearProductoComponent {
  producto_add: Product[] = [];
  @Output() productoCreado = new EventEmitter<any>();

  id_new=0 
  title_new=''
  price_new=0
  description_new=''
  category_new=''
  imange_new=''
  rate=0
  count=0


  productos(){
    let nuevo: Product={
      id:this.id_new+=1,
      title:this.title_new,
      price: this.price_new,
      description:this.description_new,
      category:this.category_new,
      image:this.imange_new,
      rating: {
        rate: this.rate,
        count: this.count
      }  
    } 
    this.producto_add.push(nuevo);
    console.log(nuevo)
    this.resetForm()
    this.productoCreado.emit(nuevo);
  }

  resetForm() {
    this.title_new = '';
    this.price_new = 0;
    this.description_new = '';
    this.category_new = '';
    this.imange_new = '';
    this.rate = 0;
    this.count = 0;
  }
  
}
