import { Component, Input, OnInit } from '@angular/core';

import { GeneralComponent } from '../../productos/general/general.component';
import { ServicesProductosService } from 'src/app/services/services-productos.service';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-general',
  templateUrl: './generalShop.component.html',
  styleUrls: ['./generalShop.component.scss'],
})
export class GeneralShopComponent implements OnInit {
  products: Producto[]=[];
  productsCarro: number[] = [];
  contador: number[] = [];

  constructor(private servicesProductosService: ServicesProductosService) {}

  ngOnInit(): void {
    this.servicesProductosService.$products.subscribe({
      next: (response) => {
        this.products = response;
      },
    });
    this.servicesProductosService.$productsCarro.subscribe({
      next: (response) => {
        this.productsCarro = response;
      },
    });
    this.contarproductos();
  }

  deleteproduct(index:number) {
    for (let i = 0; i < this.productsCarro.length; i++) {
      if (this.productsCarro[i] === index) {
        this.productsCarro.splice(i, 1);
        i--;
      }
    }
    this.contador.splice(index, 1);
  }

  contarproductos(){
    this.productsCarro.forEach(
      (el) => (this.contador[el] = this.contador[el] + 1 || 1)
    )
  }
}
