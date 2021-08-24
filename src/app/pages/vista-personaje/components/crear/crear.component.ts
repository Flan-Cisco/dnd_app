import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavParams, PopoverController } from '@ionic/angular';
import { Personaje } from 'src/app/models/personaje.model';
import { ServService } from 'src/app/services/serv.service';
import { ModalTemplateComponent } from '../../../../components/modal/modal-template/modal-template.component';
import { PopoverTemplateComponent } from '../../../../components/popover/popover-template/popover-template.component';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent {
  personaje: Personaje;
  status: number[] = [];
  nSkills: number;
  raza: any = {};
  subraza: any = {};
  keyClases: string[];
  keyBackgrounds: string[];
  keyRazas: string[];
  keySubrazas: string[];

  constructor(
    public service: ServService,
    private route: ActivatedRoute,
    private modalController: ModalController,
    public popoverCtrl: PopoverController,
    private router: Router
  ) {
    // console.log("Clases:",this.service.clases);
    this.personaje = this.service.obtenerPersonaje(
      this.route.snapshot.paramMap.get('id')
    );
    this.setStats();
    this.keyClases = Object.keys(this.service.clases);
    this.keyBackgrounds = Object.keys(this.service.backgrounds);
    this.keyRazas = Object.keys(this.service.razas);
    if (this.personaje.race) {
      this.raza = this.service.razas[this.personaje.race];
      this.service.bonoRaza(this.personaje, this.raza);
      if (this.raza.subraces) {
        this.keySubrazas = Object.keys(this.raza.subraces);
      }
    }
    this.personaje.proficiency = 1 + Math.ceil(this.personaje.level / 4);
  }


  subracesActivator(evento) {
    this.raza = this.service.razas[evento.detail.value];
    if (this.raza.subraces) {
      this.keySubrazas = Object.keys(this.raza.subraces);
    }
    delete this.personaje.subrace;
    delete this.personaje.bonoAny;
    // console.log(this.personaje)

    this.service.bonoRaza(this.personaje, this.raza);
  }
  subraceTrigger(evento) {
    this.subraza = this.raza.subraces[evento.detail.value];
    this.service.bonoRaza(this.personaje, this.raza);
  }
  setStats() {
    if (this.personaje.listaStats.length === 0) {
      if (this.personaje.stats !== undefined) {
        for (const a of Object.keys(this.personaje.stats)) {
          this.status.push(this.personaje.stats[a]);
        }
      } else {
        let total = 0;
        while (total < 70) {
          total = 0;
          this.status = [];
          for (let roll = 0; roll < 6; roll++) {
            let stat = 0;
            stat = 0;
            const rolls = [
              Math.floor(Math.random() * 6) + 1,
              Math.floor(Math.random() * 6) + 1,
              Math.floor(Math.random() * 6) + 1,
              Math.floor(Math.random() * 6) + 1,
            ];
            rolls.forEach((numero) => {
              stat += numero;
            });
            stat -= Math.min.apply(null, rolls);
            this.status.push(stat);
          }
          for (const dado of this.status) {
            total += dado;
          }
        }
      }
    } else {
      this.status = this.personaje.listaStats;
    }
  }

  async abrirModal(title: string) {
    const modal = await this.modalController.create({
      component: ModalTemplateComponent,
      backdropDismiss: false,
      componentProps: {
        personaje: this.personaje,
        titulo: title,
        stats: this.status,
        skillList: this.service.skillList,
        raza: this.service.razas[this.personaje.race],
      },
    });
    return await modal.present();
  }

  async abrirPopover(tipo: string) {
    const popover = await this.popoverCtrl.create({
      component: PopoverTemplateComponent,
      componentProps: {
        personaje: this.personaje,
        tipoPopover: tipo,
      },
      translucent: true,
    });
    await popover.present();
  }

  guardar() {
    this.service.guardarStorage();
    this.router.navigateByUrl(`/tabs/tab1`);
  }

  calcularMod(stat: number) {
    if (stat >= 10) {
      return "+" + Math.floor((stat-10)/2);
    } else {
      return '-' + Math.floor((stat-10)/2);
    }
  }
  calculoSpeed(velocidad: number) {
    if (this.personaje.subrace === 'Wood Elf') {
      return 35;
    }
    return velocidad;
  }
}
