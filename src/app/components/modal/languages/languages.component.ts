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

  @Input() personaje:Personaje;
  nLanguages = 0;
  languagesCommon: any = [];
  languagesExotic: any =[];
  cambioLenguaje = false;
  lenguajesBase: number;

  constructor(private navParams: NavParams, public service: ServService, public modalController: ModalController,) {
    this.personaje = navParams.get("personaje")
    console.log(this.personaje)
    for (let back of this.service.backgrounds) {
      if ( back.nombre == this.personaje.background){
        if ( back.languages) {
          this.nLanguages += back.languages;
        }
      }
    }
    if (this.personaje.subraza){
      for ( let subrace of this.service.subrazas) {
        subrace.language;
        if ( subrace.language) {
          this.nLanguages += subrace.language;
        }
      }
    }

    console.log("n",this.nLanguages)

    let lenRaza =this.service.razas.find(resp => resp.name == this.personaje.raza).languages;

    if ( lenRaza.find(resp => resp == "Extra")) {
      this.nLanguages += 1;
      lenRaza = lenRaza.filter(function(len) {
        return len != "Extra";
      })
    }
    this.lenguajesBase = lenRaza.length;
    
    
    for ( let len of this.service.languages[0]["common"]) {
      this.languagesCommon.push({lan: len, checked: false})
    }
    for ( let len of this.service.languages[0]["exotic"]) {
      this.languagesExotic.push({lan: len, checked: false})
    }
    
    if (!this.personaje.languagesCommon){
      console.log(lenRaza);
      for ( let len of lenRaza) {
        for ( let lan of this.languagesCommon){
          if ( len == lan.lan) {
            console.log("asdqwe")
            lan.checked = true;
          }
        }
      }
    }
    if(this.personaje.languagesCommon) {
      for ( let lenP of this.personaje.languagesCommon) {
        for( let len of this.languagesCommon) {
          if ( lenP == len.lan) {
            len.checked = true;
          }
        }
      }
    } if ( this.personaje.languagesExotic) {
      for ( let lenP of this.personaje.languagesExotic) {
        for( let len of this.languagesExotic) {
          if ( lenP == len.lan) {
            len.checked = true;
          }
        }
      }
    }
    
  }

  validar() {
    let cont = 0;
    for ( let len of this.languagesCommon) {
      if ( len.checked) {
        cont += 1;
      }
    }
    cont -= this.lenguajesBase;
    
    if (cont == this.nLanguages) {
      return true;
    }

    return false;
  }

  guardar() {
    let lenguajes:string[] = [];
    for (let len of this.languagesCommon) {
      if ( len.checked) {
        lenguajes.push(len.lan);
      }
    }
    this.personaje.languagesCommon = lenguajes;
    lenguajes = [];
    for (let len of this.languagesExotic) {
      if ( len.checked) {
        lenguajes.push(len.lan);
      }
    }
    this.personaje.languagesExotic = lenguajes;
    this.dismiss();
  }
  validarBack(lenguaje: string) {
    let raza = this.service.razas.find(resp => resp.name == this.personaje.raza)
    return raza.languages.find(resp => resp == lenguaje);
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

  ngOnInit() {}

}
