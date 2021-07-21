import { Component, Input, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Saves } from 'src/app/models/saves.model';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'savings-popover',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss'],
})
export class SavingsComponent implements OnInit {

  @Input() savings: Saves;
  @Input() prof: number;
  @Input() clase: string

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
    this.savings = navParams.get("savings");
    this.prof = navParams.get("prof");
    this.clase = navParams.get("clase");
    console.log(this.savings);
    for (let a of this.atributos) {
      this.saves.push(this.savings[a.toLowerCase()])
    }

    this.descClase = this.service.clases.find(resp => {
      return resp.nombre == this.clase;
    });

  }

  validarProf(atrib: string) {
    atrib = atrib.toLowerCase();
    if (this.descClase.savings.find(resp => resp == atrib)) {
      this.proffi.push(this.prof);
      return true;
    } else {
      this.proffi.push(0);
      return false;
    }
  }

  ngOnInit() {}

}
