import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Personaje } from 'src/app/models/personaje.model';
import { Stats } from 'src/app/models/stats.model';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-atributos-raza-modal',
  templateUrl: './atributos-raza.component.html',
  styleUrls: ['./atributos-raza.component.scss'],
})
export class AtributosRazaModalComponent implements OnInit {
  @Input() raza: any;
  @Input() personaje: Personaje;
  atributos = ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'];

  totalStats: number;

  bonosAny = {
    Str: 0,
    Dex: 0,
    Con: 0,
    Int: 0,
    Wis: 0,
    Cha: 0,
  };

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private service: ServService
  ) {
    this.raza = navParams.get('raza');
    this.personaje = navParams.get('personaje');

    this.totalStats = this.raza.stats.any.length;
    if (this.personaje.bonoAny) {
      for (const atributo of Object.keys(this.personaje.bonoAny)) {
        this.bonosAny[atributo] = this.personaje.bonoAny[atributo];
      }
    }
  }

  cambioBono(event) {
    this.bonosAny = event;
  }

  setDisableMenos(atributo: string) {
    return this.bonosAny[atributo] === 0 ? true : false;
  }
  setDisableMas(atributo: string) {
    return this.bonosAny[atributo] === this.totalStats ? true : false;
  }
  click(atributo: string, aumento: boolean) {
    if (aumento) {
      this.bonosAny[atributo] += 1;
    } else {
      this.bonosAny[atributo] -= 1;
    }
  }

  sumaTotal() {
    let total = 0;
    for (const atributo of Object.keys(this.bonosAny)) {
      total += this.bonosAny[atributo];
    }
    return total === this.totalStats ? true : false;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
  guardar() {
    this.personaje.bonoAny = new Stats();
    for (const atributo of Object.keys(this.bonosAny)) {
      this.personaje.bonoAny[atributo] = this.bonosAny[atributo];
    }
    // this.personaje.bonoAny = this.bonosAny;
    this.service.bonoRaza(this.personaje);

    this.dismiss();
  }

  calculoBonificacion(atrib: string, bono = 0) {
    return this.personaje.race === 'Half Elf' && atrib === 'Cha'
      ? bono === 0
        ? this.personaje.statsBase[atrib] === 19
          ? this.personaje.statsBase[atrib] + 1
          : this.personaje.statsBase[atrib] + 2
        : this.personaje.statsBase[atrib] + bono + 2
      : bono === 0
      ? this.personaje.statsBase[atrib]
      : this.personaje.statsBase[atrib] + bono;
  }
  totalBonificacion(atributo: string) {
    if (this.calculoBonificacion(atributo, this.bonosAny[atributo]) >= 20) {
      return true;
    }
    return false;
  }
  ngOnInit() {}
}
