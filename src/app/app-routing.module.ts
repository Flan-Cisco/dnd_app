import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'vista-personaje',
    loadChildren: () => import('./pages/vista-personaje/vista-personaje.module').then( m => m.VistaPersonajePageModule)
  },
  // {
  //   path: 'crear',
  //   loadChildren: () => import('./pages/crear/crear.module').then( m => m.CrearPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
