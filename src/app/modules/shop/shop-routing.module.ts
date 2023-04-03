import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralShopComponent } from './generalShop/generalShop.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralShopComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
