import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewproductComponent } from './generalNewProduct/newproduct.component';
import { NewproductRoutingModule } from './newproduct-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewproductComponent],
  imports: [CommonModule, NewproductRoutingModule, ReactiveFormsModule],
})
export class NewProductModule {}
