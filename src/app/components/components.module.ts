import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './modal/atributos/stats.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { StatsPopoverComponent } from './popover/stats/stats.popover';
import { SavingsComponent } from './popover/savings/savings.component';
import { SkillsComponent } from './modal/skills/skills.component';
import { SignoPipePipe } from '../pipes/signo-pipe.pipe';
import { CrearComponent } from './crear/crear.component';
import { ModalTemplateComponent } from './modal/modal-template/modal-template.component';
import { LanguagesComponent } from './modal/languages/languages.component';
import { PopoverTemplateComponent } from './popover/popover-template/popover-template.component';



@NgModule({
  declarations: [
    ModalTemplateComponent,
    SkillsComponent,
    LanguagesComponent,
    StatsComponent,
    
    PopoverTemplateComponent,
    StatsPopoverComponent,
    SavingsComponent,
    
    SignoPipePipe,
    
    CrearComponent,
  ],
  exports: [
    ModalTemplateComponent,
    StatsComponent,
    LanguagesComponent,
    SkillsComponent,

    PopoverTemplateComponent,
    StatsPopoverComponent,
    SavingsComponent,

    CrearComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ]
})
export class ComponentsModule { }
