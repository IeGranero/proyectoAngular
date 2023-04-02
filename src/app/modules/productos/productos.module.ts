import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosRoutingModule } from './productos-routing.module';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { ModalComponent } from './modal/modal.component';
import { GeneralComponent } from './general/general.component';

@NgModule({
  declarations: [
    AsideComponent,
    MainComponent,
    ModalComponent,
    GeneralComponent,
  ],

  imports: [CommonModule, ProductosRoutingModule, FormsModule],
})
export class ProductosModule {}
