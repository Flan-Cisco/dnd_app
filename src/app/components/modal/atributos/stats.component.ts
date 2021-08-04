import { Component, Input, KeyValueDiffers, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
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


  constructor(public modalController: ModalController, navParams: NavParams, private service: ServService) {
    this.stats = navParams.get("stats");
    this.personaje = navParams.get("personaje");

    // console.log(this.personaje);
    
    console.log("posicionstats",this.posicionStats);
    for (let stat of this.atributos) {
      this.statsDisponibles[stat] = 0;
    }

    if ( this.personaje.statsBase) {
      console.log("stats")
      let keys = Object.keys(this.personaje.statsBase);
      for(let i=0; i< keys.length; i++) {
        this.statsAsignados[i] = this.personaje.statsBase[keys[i]];
        // console.log(this.stats.indexOf(this.personaje.stats))
        this.posicionStats[this.stats.indexOf(this.personaje.statsBase[keys[i]],this.index(this.personaje.statsBase[keys[i]]))] = keys[i].charAt(0).toUpperCase() + keys[i].substring(1,keys[i].length);
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
      this.statsPersonaje[this.posicionStats[posicion].toLowerCase()] = Number(this.stats[posicion]);
    }
    


    console.log("posicion",this.posicionStats);
    console.log("stats",this.statsPersonaje);
    
  }
  modificador(atrib: number) {
    return Math.floor((atrib-10)/2);
  }

  onClick() {
    this.personaje.statsBase = this.statsPersonaje;
    this.service.bonoRaza(this.personaje)
    console.log(this.personaje);
    this.service.generarSavings(this.personaje);
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
  

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

}
