import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaPersonajePageRoutingModule } from './vista-personaje-routing.module';


import { CrearComponent } from './components/crear/crear.component';


import { ModalTemplateComponent } from '../../components/modal/modal-template/modal-template.component';
import { PopoverTemplateComponent } from '../../components/popover/popover-template/popover-template.component';

import { VistaPersonajePage } from './vista-personaje.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaPersonajePageRoutingModule,
    ComponentsModule,

  ],
  declarations: [
    VistaPersonajePage,
    CrearComponent,
    ModalTemplateComponent,
    PopoverTemplateComponent,
  ]
})
export class VistaPersonajePageModule {}
