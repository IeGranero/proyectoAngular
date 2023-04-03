import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { GeneralShopComponent } from './generalShop/generalShop.component';

@NgModule({
  declarations: [GeneralShopComponent],
  imports: [CommonModule, ShopRoutingModule],
})
export class ShopModule {
  estaLogueadoShop(): boolean {
    return false;
  }
}
