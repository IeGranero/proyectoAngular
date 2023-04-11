import { Component, Input, OnInit } from '@angular/core';

import { GeneralComponent } from '../../productos/general/general.component';
import { ServicesProductosService } from 'src/app/services/services-productos.service';

@Component({
  selector: 'app-general',
  templateUrl: './generalShop.component.html',
  styleUrls: ['./generalShop.component.scss'],
})
export class GeneralShopComponent implements OnInit {
  myCart: any;

  constructor(private servicesProductosService: ServicesProductosService) {}

  ngOnInit(): void {
    this.servicesProductosService.$myCart.subscribe({
      next: (response) => {
        this.myCart = response;
      },
    });
    console.log('console log listado', this.myCart);
  }
  deleteShop() {
    this.myCart.splice(
      this.myCart.findIndex((prod: { product: any }) => {
        return prod.product === this.myCart.product;
      }),
      1
    );
    this.myCart = this.servicesProductosService;
  }
}
