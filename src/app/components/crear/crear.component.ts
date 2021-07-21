import { Component, AfterContentInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavParams, PopoverController } from '@ionic/angular';
import { Personaje } from 'src/app/models/personaje.model';
import { CargaDBService } from 'src/app/services/carga-db.service';
import { ServService } from 'src/app/services/serv.service';
import { ModalTemplateComponent } from '../modal/modal-template/modal-template.component';
import { PopoverTemplateComponent } from '../popover/popover-template/popover-template.component';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements AfterContentInit {
  
  @Input() clases: any[];
  @Input() backgrounds: any[];
  @Input() razas: any[];
  @Input() subrazas: any[];

  personaje: Personaje;
  status: number[] = [];
  skills: string[];
  nSkills: number;
  raza: any = {};
  subraza: any = {};

  
  constructor(/*public serviceDB: CargaDBService,*/ public service: ServService,
    private route: ActivatedRoute,
    private modalController: ModalController,
    public popoverCtrl: PopoverController,
    private router: Router
    ) {
      // console.log("Clases:",this.service.clases);
      this.personaje = this.service.obtenerPersonaje(this.route.snapshot.paramMap.get('id'));
      this.setStats();
      console.log(this.personaje);
      
      // console.log(this.status);
      this.personaje.proficiencia = 1+Math.ceil(this.personaje.level/4);
      // console.log("prof", this.personaje.proficiencia);

      // if (this.personaje.raza) {
      //   for(let raza of this.razas) {
      //     console.log(raza);
      //   }
      // }
      
  }

  ngAfterContentInit(): void {
    if ( this.personaje.raza) {
      for(let raza of this.service.razas) {
        if ( raza.name == this.personaje.raza) {
          this.raza = raza;
        }
      }
    }
  }

  subracesActivator(evento) {
    for(let raza of this.razas) {
      if ( raza.name == evento.detail.value) {
        this.raza = raza;
      }
    }
    delete this.personaje.subraza;
    // console.log(this.personaje)
    
  }
  subraceTrigger(evento) {

    for( let subraza of this.subrazas) {
      if ( subraza.name == evento.detail.value) {
        this.subraza = subraza;
      }
    }

  }
  setStats() {
    if ( this.personaje.listaStats.length == 0) {
      if ( this.personaje.stats !== undefined){
        let key = Object.keys(this.personaje.stats);
        for (let a of key) {
          this.status.push(this.personaje.stats[a]);
        }
      } else {
        let total = 0;
        while (total < 70) {
          total = 0;
          this.status = [];
          for (let roll= 0; roll<6; roll++){
            let stat = 0;
            stat = 0;
            const rolls = [Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1,Math.floor(Math.random()*6)+1];
            rolls.forEach(numero => {
              stat += numero;
            });
            stat -= Math.min.apply(null,rolls);
            this.status.push(stat);
          }
          for(let dado of this.status) {
            total += dado;
          }
        }
      }
    } else {
      this.status = this.personaje.listaStats;
    }

  }

  async abrirModal(titulo: string) {
    const modal = await this.modalController.create({
      component:ModalTemplateComponent,
      backdropDismiss: false,
      componentProps: {
        "personaje": this.personaje,
        'titulo': titulo,
        'stats': this.status,

      }

    });
    return await modal.present();
  }

  async AbrirPopover(bool: boolean) {
    const popover = await this.popoverCtrl.create({
      component: PopoverTemplateComponent,
      componentProps:{
        'stats': this.personaje.stats,
        'raza': this.raza,
        'statsPopover': bool,
        'savings': this.personaje.savings,
        'prof': this.personaje.proficiencia,
        'clase': this.personaje.clase,
      },
      translucent: true,
    });
    await popover.present();
  }

  guardar() {
    this.service.guardarStorage();
    this.router.navigateByUrl(`/tabs/tab1`)

  }

  setLanguages() {

  }
  validateSubrace() {
    for ( let raza of this.service.razas) {
      if ( raza.name == this.personaje.raza) {
        if (raza.subraces) {
          return true;
        }
      }
    }
    return false;

  }
}
