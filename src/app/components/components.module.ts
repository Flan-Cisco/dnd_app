import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from '../pages/vista-personaje/components/modal/atributos/stats.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { StatsPopoverComponent } from '../pages/vista-personaje/components/popover/stats/stats.popover';
import { SavingsComponent } from '../pages/vista-personaje/components/popover/savings/savings.component';
import { SkillsComponent } from '../pages/vista-personaje/components/modal/skills/skills.component';
import { SignoPipePipe } from '../reutilizables/pipes/signo-pipe.pipe';
import { LanguagesComponent } from '../pages/vista-personaje/components/modal/languages/languages.component';
import { LoadingComponent } from '../reutilizables/loading/loading.component';
import { AtributosRazaModalComponent } from '../pages/vista-personaje/components/modal/atributos-raza/atributos-raza.component';
import { CasillaSelectComponent } from '../reutilizables/casilla-select/casilla-select.component';
import { CasillaDetalleComponent } from '../reutilizables/casilla-detalle/casilla-detalle.component';

@NgModule({
  declarations: [
    SkillsComponent,
    LanguagesComponent,
    StatsComponent,
    AtributosRazaModalComponent,

    StatsPopoverComponent,
    SavingsComponent,

    SignoPipePipe,

    LoadingComponent,
    CasillaSelectComponent,
    CasillaDetalleComponent,
  ],
  exports: [
    StatsComponent,
    LanguagesComponent,
    SkillsComponent,
    AtributosRazaModalComponent,

    StatsPopoverComponent,
    SavingsComponent,

    LoadingComponent,
    CasillaSelectComponent,
    CasillaDetalleComponent,
  ],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class ComponentsModule {}
