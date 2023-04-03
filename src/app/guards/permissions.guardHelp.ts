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

import { HelpModule } from '../modules/help/help.module';

@Injectable({
  providedIn: 'root',
})
export class PermissionsGuardHelp implements CanActivate {
  constructor(private help: HelpModule, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.help.estaLogueadoHelp()) {
      return true;
    } else {
      alert('Lo siento, no estas loguedo 2, registrese por favor');
      return false;
    }
  }
}
