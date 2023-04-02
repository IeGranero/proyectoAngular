import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  @Input() pSeleccion: Producto | undefined;
  @Input() productosFiltrado: Producto[] | undefined;
  @Output() reset = new EventEmitter<void>();
  @Output() filtrado = new EventEmitter<string>();
  @Output() seleccionarProducto = new EventEmitter<Producto>();

  filtro = '';

  resetFiltros() {
    this.reset.emit();
  }

  filtrarNombre() {
    this.filtrado.emit(this.filtro);
  }

  setProductoSeleccionado(producto: Producto) {
    this.seleccionarProducto.emit(producto);
  }
}
