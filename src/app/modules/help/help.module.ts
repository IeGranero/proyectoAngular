import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { GeneralHelpComponent } from './generalHelp/generalHelp.component';

@NgModule({
  declarations: [GeneralHelpComponent],
  imports: [CommonModule, HelpRoutingModule],
})
export class HelpModule {
  estaLogueadoHelp(): boolean {
    return false;
  }
}
