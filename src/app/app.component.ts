import { Component } from '@angular/core';
import { PRODUCTOS } from './data/datos';
import { Producto } from './interfaces./producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '3 Proyecto';

  prodJson: Producto[] = PRODUCTOS;
  pSeleccion: Producto = this.prodJson[0];
  productoFiltrado: Producto[] = this.prodJson;
  nombreModal = '';
  prodEstrella: Producto = this.prodJson[0];
  estrellaYellow: boolean[] = Array(5).fill(true);
  productoSimilar: Producto[] = this.prodJson;
  review: Producto[] = this.prodJson;

  seleccionarProducto(product: any) {
    this.pSeleccion = product;
  }

  filtrarNombre(filtro: string) {
    this.productoFiltrado = this.prodJson.filter((nombre) =>
      nombre.product.toLowerCase().includes(filtro.toLowerCase())
    );
  }

  reset() {
    this.productoFiltrado = this.prodJson;
  }

  // asignarEstrella(idproducto: number) {
  //   const productoEncontrado = this.prodJson.find(
  //     (prod) => prod.id === idproducto
  //   );
  //   // si productoEncontrado = {} entonces TRUE ->lo agrega a prodencontrado
  //   // si productoEncontrado = undefined entonces FALSE ->deja en prod estrella this.prodJson[0];

  //   this.prodEstrella = productoEncontrado
  //     ? productoEncontrado
  //     : this.prodEstrella;
  // }

  eliminar(id: number) {
    this.productoFiltrado.splice(
      this.productoFiltrado.findIndex((prod) => prod.id === id),
      1
    );
    this.pSeleccion = this.prodJson[0];
  }
  favoritos() {
    if (this.pSeleccion.favoritos === false) {
      this.pSeleccion.favoritos = true;
    } else {
      this.pSeleccion.favoritos = false;
    }
  }
}
