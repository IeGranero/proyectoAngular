import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewproductComponent } from './generalNewProduct/newproduct.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'main', component: NewproductComponent },
      { path: '**', redirectTo: 'main' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewproductRoutingModule {}
