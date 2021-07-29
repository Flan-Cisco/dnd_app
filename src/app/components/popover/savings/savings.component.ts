import { Component, Input, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Personaje } from 'src/app/models/personaje.model';
import { Saves } from 'src/app/models/saves.model';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'savings-popover',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss'],
})
export class SavingsComponent implements OnInit {
  @Input() personaje: Personaje;

  atributos: string[] = [
    "Str",
    "Dex",
    "Con",
    "Int",
    "Wis",
    "Cha"
  ];
  saves = [];
  descClase: any;
  proffi = [];
  constructor(navParams: NavParams, public service:ServService) {
    this.personaje = navParams.get("personaje");
    for (let a of this.atributos) {
      this.saves.push(this.personaje.savings[a.toLowerCase()])
    }

    this.descClase = this.service.clases[this.personaje.clase];

  }

  validarProf(atrib: string) {
    atrib = atrib.toLowerCase();
    if (this.descClase.savings.find(resp => resp == atrib)) {
      this.proffi.push(this.personaje.proficiencia);
      return true;
    } else {
      this.proffi.push(0);
      return false;
    }
  }

  ngOnInit() {}

}
