import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path:'personaje/:id',
    loadChildren: () => import('../vista-personaje/vista-personaje.module').then( m => m.VistaPersonajePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
