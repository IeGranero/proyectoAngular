import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralHelpComponent } from './generalHelp/generalHelp.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralHelpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpRoutingModule {}
