import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './modal/atributos/stats.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { StatsPopoverComponent } from './popover/stats/stats.popover';
import { SavingsComponent } from './popover/savings/savings.component';
import { SkillsComponent } from './modal/skills/skills.component';
import { SignoPipePipe } from '../reutilizables/pipes/signo-pipe.pipe';
import { CrearComponent } from './crear/crear.component';
import { ModalTemplateComponent } from './modal/modal-template/modal-template.component';
import { LanguagesComponent } from './modal/languages/languages.component';
import { PopoverTemplateComponent } from './popover/popover-template/popover-template.component';
import { LoadingComponent } from '../reutilizables/loading/loading.component';
import { AtributosRazaModal } from './modal/atributos-raza/atributos-raza.component';
import { CasillaSelectComponent } from '../reutilizables/casilla-select/casilla-select.component';
import { CasillaDetalleComponent } from '../reutilizables/casilla-detalle/casilla-detalle.component';



@NgModule({
  declarations: [
    ModalTemplateComponent,
    SkillsComponent,
    LanguagesComponent,
    StatsComponent,
    AtributosRazaModal,
    
    PopoverTemplateComponent,
    StatsPopoverComponent,
    SavingsComponent,
    
    SignoPipePipe,
    
    CrearComponent,

    LoadingComponent,
    CasillaSelectComponent,
    CasillaDetalleComponent
  ],
  exports: [
    ModalTemplateComponent,
    StatsComponent,
    LanguagesComponent,
    SkillsComponent,
    AtributosRazaModal,

    PopoverTemplateComponent,
    StatsPopoverComponent,
    SavingsComponent,

    CrearComponent,

    LoadingComponent,
    CasillaSelectComponent,
    CasillaDetalleComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ]
})
export class ComponentsModule { }
