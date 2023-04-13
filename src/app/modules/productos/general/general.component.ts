import { Component, OnInit } from '@angular/core';

import { Producto, ProductoSimilar } from 'src/app/interfaces/producto';
import { ServicesProductosService } from 'src/app/services/services-productos.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  title = '5 Proyecto';

  productServices: Producto[] = [];
  pSeleccion: Producto = this.productServices[0];
  productoFiltrado: Producto[] = [];
  nombreModal = '';
  nombreShop = '';
  prodEstrella: Producto = this.productServices[0];
  estrellaYellow: boolean[] = Array(5).fill(true);
  productoSimilar: Producto[] = [];
  productoShop: Producto[] = [];
  review: Producto[] = [];
  productsCarro: number[] = [];

  dataModal: ProductoSimilar = {
    image: '',
    product: '',
    price: 0,
    currency: '',
    rating: 0,
    description: '',
  };

  constructor(private servicesProductosService: ServicesProductosService) {}

  ngOnInit(): void {
    this.servicesProductosService.$products.subscribe({
      next: (response) => {
        this.productServices = response;
        this.pSeleccion = this.productServices[0];
        this.productoFiltrado = this.productServices;
        this.nombreModal = '';
        this.nombreShop = '';
        this.prodEstrella = this.productServices[0];
        this.review = this.productServices;
      },
    });
    this.servicesProductosService.$productsCarro.subscribe({
      next: (response) => {
        this.productsCarro = response;
      },
    });
  }

  seleccionarProducto(product: any) {
    this.pSeleccion = product;
  }

  filtrarNombre(filtro: string) {
    this.productoFiltrado = this.productServices.filter((nombre) =>
      nombre.product.toLowerCase().includes(filtro.toLowerCase())
    );
  }

  reset() {
    this.productoFiltrado = this.productServices;
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
    this.pSeleccion = this.productServices[0];
    this.productoFiltrado = this.productServices;
  }
  favoritos() {
    if (this.pSeleccion.favoritos === false) {
      this.pSeleccion.favoritos = true;
    } else {
      this.pSeleccion.favoritos = false;
    }
  }
  addToShop() {
    const index = this.productServices.findIndex((prod) => {
      return prod.product === this.pSeleccion.product;
    });
    this.productsCarro.push(index);
    this.servicesProductosService.addShop(this.productsCarro);
  }
}
