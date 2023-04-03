import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ShopModule } from '../modules/shop/shop.module';
import { HelpModule } from '../modules/help/help.module';

@Injectable({
  providedIn: 'root',
})
export class PermissionsGuard implements CanActivate {
  constructor(
    private shop: ShopModule,
    // private help: HelpModule,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.shop.estaLogueadoShop()) {
      return true;
    } else {
      alert('Lo siento, no estas loguedo, registrese por favor');
      return false;
    }
  }
}
