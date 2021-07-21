import { Component, Input, KeyValueDiffers, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Personaje } from 'src/app/models/personaje.model';
import { Saves } from 'src/app/models/saves.model';
import { Stats } from 'src/app/models/stats.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {

  @Input() personaje: Personaje;
  @Input() stats: any;
  atributos: string[] = [
    "Str",
    "Dex",
    "Con",
    "Int",
    "Wis",
    "Cha"
  ];
  statsDisponibles = {};
  posicionStats = {
  };
  statsAsignados: any = {}
  statsPersonaje: Stats = new Stats();

  constructor(public modalController: ModalController, navParams: NavParams) {
    this.stats = navParams.get("stats");
    this.personaje = navParams.get("personaje");

    // console.log(this.personaje);
    
    console.log("posicionstats",this.posicionStats);
    for (let stat of this.atributos) {
      this.statsDisponibles[stat] = 0;
    }

    if ( this.personaje.stats) {
      console.log("stats")
      let keys = Object.keys(this.personaje.stats);
      for(let i=0; i< keys.length; i++) {
        this.statsAsignados[i] = this.personaje.stats[keys[i]];
        // console.log(this.stats.indexOf(this.personaje.stats))
        this.posicionStats[this.stats.indexOf(this.personaje.stats[keys[i]],this.index(this.personaje.stats[keys[i]]))] = keys[i].charAt(0).toUpperCase() + keys[i].substring(1,keys[i].length);
      }
      console.log("statsAsignado",this.statsAsignados);
      console.log("posicion",this.posicionStats);
    }

    // console.log(this.statsDisponibles)
  }
  index(valor:number) {
    if ( this.stats.indexOf(valor) in Object.keys(this.posicionStats)) {
      return this.stats.indexOf(valor)+1;
    } else {
      return 0;
    }
  }

  ngOnInit() {
    
    
  }
  
  
  agregarAtributo(evento, index: number) {

    this.posicionStats[index] = this.atributos[evento.detail.value];
    console.log("evento",evento.detail.value);
    let keys = Object.keys(this.posicionStats)
    for(let posicion of keys) {
      this.statsPersonaje[this.posicionStats[posicion].toLowerCase()] = this.stats[posicion];
    }
    


    console.log("posicion",this.posicionStats);
    console.log("stats",this.statsPersonaje);
    

    // if ( this.posicionStats[index]) {
    //   console.log("posicion ocupada por ",this.posicionStats[index]);
    //   this.statsDisponibles[this.posicionStats[index]] -= 1;
    // }
    // console.log(this.posicionStats[index]);
    // console.log(this.statsDisponibles);
    // this.statsDisponibles[this.atributos[evento.detail.value]] += 1;
    // console.log("posicionStats",this.statsDisponibles);
    // this.posicionStats[index] = this.atributos[evento.detail.value];
    
    
    // this.statsPersonaje[this.posicionStats[index].toLowerCase()] = atrib;
    // console.log(this.posicionStats);
    
  }
  modificador(atrib: number) {
    return Math.abs(Math.floor((atrib-10)/2));
  }

  onClick() {
    this.personaje.stats = this.statsPersonaje;
    console.log(this.personaje);
    this.generarSavings();
    this.dismiss();
  }
  validar() {
    let keys = Object.keys(this.posicionStats);
    let numeroStats= {}

    for( let posicion of keys) {
      numeroStats[this.posicionStats[posicion]] = 0;
    }
    let cantidadStats = Object.keys(numeroStats).length;
    if ( cantidadStats === 6) {
      return false;
    } else {
      return true;
    }
  }

  generarSavings() {
    this.personaje.savings = new Saves(
      Math.floor((this.personaje.stats.str-10)/2),
      Math.floor((this.personaje.stats.dex-10)/2),
      Math.floor((this.personaje.stats.con-10)/2),
      Math.floor((this.personaje.stats.int-10)/2),
      Math.floor((this.personaje.stats.wis-10)/2),
      Math.floor((this.personaje.stats.cha-10)/2)
    );
    console.log(this.personaje);
  }
  

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

}
