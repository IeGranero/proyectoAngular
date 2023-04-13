import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Producto,
  ProductoSimilar,
} from '../../../interfaces/producto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Input() pSeleccion!: Producto;
  @Input() productosFiltrado: Producto[] | undefined;

  @Output() delete = new EventEmitter<any>();
  @Output() fav = new EventEmitter<any>();
  @Output() productShop = new EventEmitter<Producto>();
  @Output() productModal = new EventEmitter<ProductoSimilar>();

  filtro = '';

  eliminar() {
    this.delete.emit();
  }
  favoritos() {
    this.fav.emit();
  }
  infoModal(similarProducts: ProductoSimilar) {
    this.productModal.emit(similarProducts);
  }
  AddShop() {
    this.productShop.emit();
  }
}
