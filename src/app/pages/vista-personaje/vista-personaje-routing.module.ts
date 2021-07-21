import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaPersonajePage } from './vista-personaje.page';

const routes: Routes = [
  {
    path: '',
    component: VistaPersonajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaPersonajePageRoutingModule {}
