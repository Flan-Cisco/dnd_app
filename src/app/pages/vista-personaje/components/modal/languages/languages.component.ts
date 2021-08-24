import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Personaje } from 'src/app/models/personaje.model';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent implements OnInit {
  @Input() personaje: Personaje;
  nLanguages = 0;
  languagesCommon: any = [];
  languagesExotic: any = [];
  cambioLenguaje = false;
  lenguajesBase: number;

  constructor(
    private navParams: NavParams,
    public service: ServService,
    public modalController: ModalController
  ) {
    //TODO fix limite lenguajes
    this.personaje = navParams.get('personaje');
    if (this.service.backgrounds[this.personaje.background].languages) {
      this.nLanguages +=
        this.service.backgrounds[this.personaje.background].languages;
    }
    if (this.personaje.subrace) {
      if (
        this.service.razas[this.personaje.race].subraces[this.personaje.subrace]
          .language
      ) {
        this.nLanguages +=
          this.service.razas[this.personaje.race].subraces[
            this.personaje.subrace
          ].language;
      }
    }

    let lenRaza = this.service.razas[this.personaje.race].languages;

    if (lenRaza.find((resp) => resp === 'Extra')) {
      this.nLanguages += 1;
      lenRaza = lenRaza.filter((len) => len !== 'Extra');
    }
    this.lenguajesBase = lenRaza.length;

    for (const len of this.service.languages.common) {
      this.languagesCommon.push({ lan: len, checked: false });
    }
    for (const len of this.service.languages.exotic) {
      this.languagesExotic.push({ lan: len, checked: false });
    }

    if (!this.personaje.languagesCommon) {
      for (const len of lenRaza) {
        for (const lan of this.languagesCommon) {
          if (len === lan.lan) {
            lan.checked = true;
          }
        }
      }
    }
    if (this.personaje.languagesCommon) {
      for (const lenP of this.personaje.languagesCommon) {
        for (const len of this.languagesCommon) {
          if (lenP === len.lan) {
            len.checked = true;
          }
        }
      }
    }
    if (this.personaje.languagesExotic) {
      for (const lenP of this.personaje.languagesExotic) {
        for (const len of this.languagesExotic) {
          if (lenP === len.lan) {
            len.checked = true;
          }
        }
      }
    }
  }

  validar() {
    let cont = 0;
    for (const len of this.languagesCommon) {
      if (len.checked) {
        cont += 1;
      }
    }
    cont -= this.lenguajesBase;

    if (cont === this.nLanguages) {
      return true;
    }

    return false;
  }

  guardar() {
    let lenguajes: string[] = [];
    for (const len of this.languagesCommon) {
      if (len.checked) {
        lenguajes.push(len.lan);
      }
    }
    this.personaje.languagesCommon = lenguajes;
    lenguajes = [];
    for (const len of this.languagesExotic) {
      if (len.checked) {
        lenguajes.push(len.lan);
      }
    }
    this.personaje.languagesExotic = lenguajes;
    this.dismiss();
  }
  validarBack(lenguaje: string) {
    const raza = this.service.razas[this.personaje.race];
    return raza.languages.find((resp) => resp === lenguaje);
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  ngOnInit() {}
}
