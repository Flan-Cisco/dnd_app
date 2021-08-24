import { Component, Input, KeyValueDiffers, OnInit } from '@angular/core';
import {
  ActionSheetController,
  ModalController,
  NavParams,
} from '@ionic/angular';
import { Personaje } from 'src/app/models/personaje.model';
import { Saves } from 'src/app/models/saves.model';
import { Stats } from 'src/app/models/stats.model';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  @Input() personaje: Personaje;
  @Input() stats: any;
  atributos: string[] = ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'];

  statsDisponibles = {};
  statsAsignados: any = {};

  statsCopia = [];
  atributosPosicion = {};
  validarDistribucion = true;

  constructor(
    public modalController: ModalController,
    navParams: NavParams,
    private service: ServService
  ) {
    this.stats = navParams.get('stats');
    for (const stat of this.stats) {
      this.statsCopia.push(Number(stat));
    }

    this.personaje = navParams.get('personaje');

    console.log('statsCopia', this.statsCopia);

    if (this.personaje.statsBase) {
      for (const atributo of Object.keys(this.personaje.statsBase)) {
        const index = this.statsCopia.indexOf(this.personaje.statsBase[atributo]);
        if (index !== -1) {
          this.statsCopia[index] = -20;
          this.atributosPosicion[index] = this.atributos.indexOf(
            atributo.charAt(0).toUpperCase() +
              atributo.substring(1, atributo.length)
          );
        }
      }
      this.validarDistribucion = false;
    } else {
      for (const i of [0, 1, 2, 3, 4, 5]) {
        this.atributosPosicion[i] = 6;
      }
    }
    console.log('atributosPosicion', this.atributosPosicion);
  }

  ngOnInit() {}

  agregarAtributo(evento, index: number) {
    this.atributosPosicion[index] = evento.detail.value;

    console.log('atributosPosicion', this.atributosPosicion);

    this.validarDistribucion = this.validar();
  }
  validar() {
    const lista = [];

    for (const atributo of Object.keys(this.atributosPosicion)) {
      if (lista.includes(this.atributosPosicion[atributo])) {
        return true;
      } else {
        lista.push(this.atributosPosicion[atributo]);
      }
    }
    return false;
  }
  modificador(atrib: number) {
    return Math.floor((atrib - 10) / 2);
  }

  onClick() {
    const objTmp = {
      Str: 0,
      Dex: 0,
      Con: 0,
      Int: 0,
      Wis: 0,
      Cha: 0,
    };
    for (const stat of Object.keys(this.atributosPosicion)) {
      objTmp[this.atributos[this.atributosPosicion[stat]]] = Number(
        this.stats[stat]
      );
    }
    this.personaje.statsBase = objTmp;
    this.service.bonoRaza(this.personaje);
    console.log(this.personaje);
    this.service.generarSavings(this.personaje);
    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
