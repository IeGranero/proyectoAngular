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
  myCart: Producto[]=[];

  constructor(private servicesProductosService: ServicesProductosService) {}

  ngOnInit(): void {
    this.servicesProductosService.$myCart.subscribe({
      next: (response) => {
        this.myCart = response;
      },
    });
    console.log('console log listado', this.myCart);
  }
  deleteShop(productShopSelect:Producto) {
    const indiceProducto:number=this.encontrarIndiceProducto(
      productShopSelect.id
    )
    this.myCart.splice(indiceProducto,1);
    productShopSelect.favoritos=false;
  }
  encontrarIndiceProducto(id:number):number{
    return this.myCart.findIndex((product)=>{
      return product.id===id;
    })
  }
}
