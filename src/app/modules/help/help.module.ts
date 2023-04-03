import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './help-routing.module';
import { GeneralHelpComponent } from './generalHelp/generalHelp.component';

@NgModule({
  declarations: [GeneralHelpComponent],
  imports: [CommonModule, ShopRoutingModule],
})
export class HelpModule {
  estaLogueadoHelp(): boolean {
    return true;
  }
}
