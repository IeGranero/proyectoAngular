import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsGuard } from './guards/permissions.guard';
import { PermissionsGuardHelp } from './guards/permissions.guardHelp';

const routes: Routes = [
  {
    path: 'productos',
    loadChildren: () =>
      import('./modules/productos/productos.module').then(
        (module) => module.ProductosModule
      ),
  },
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then(
        (module) => module.AboutModule
      ),
  },
  {
    path: 'shop',

    loadChildren: () =>
      import('./modules/shop/shop.module').then((module) => module.ShopModule),
  },
  {
    path: 'addNewProduct',

    loadChildren: () =>
      import('./modules/newproduct/newproduct.module').then(
        (module) => module.NewProductModule
      ),
  },
  {
    path: 'help',
    canActivate: [PermissionsGuard],
    loadChildren: () =>
      import('./modules/help/help.module').then((module) => module.HelpModule),
  },
  {
    path: '**',
    redirectTo: 'addNewProduct',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
