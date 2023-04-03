import { Component } from '@angular/core';
import { PRODUCTOS } from 'src/app/data/datos';
import { Producto, ProductoSimilar } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent {
  title = '4 Proyecto';

  prodJson: Producto[] = PRODUCTOS;
  pSeleccion: Producto = this.prodJson[0];
  productoFiltrado: Producto[] = this.prodJson;
  nombreModal = '';
  prodEstrella: Producto = this.prodJson[0];
  estrellaYellow: boolean[] = Array(5).fill(true);
  productoSimilar: Producto[] = this.prodJson;
  review: Producto[] = this.prodJson;

  dataModal: ProductoSimilar = {
    image: '',
    product: '',
    price: 0,
    currency: '',
    rating: 0,
    description: '',
  };
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

  infoModal(productModal: ProductoSimilar) {
    this.dataModal = productModal;
  }

  eliminar() {
    this.productoFiltrado.splice(
      this.productoFiltrado.findIndex((prod) => {
        return prod.product === this.pSeleccion.product;
      }),
      1
    );
    //console.log(this.productoFiltrado);
    this.pSeleccion = this.prodJson[0];
    this.productoFiltrado = this.prodJson;
  }
  favoritos() {
    if (this.pSeleccion.favoritos === false) {
      this.pSeleccion.favoritos = true;
    } else {
      this.pSeleccion.favoritos = false;
    }
  }
}
