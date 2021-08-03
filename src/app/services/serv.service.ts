import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from '../models/personaje.model';

@Injectable({
  providedIn: 'root',
})
export class ServService {
  personajes: Personaje[] = [];
  clases: any = {};
  skills: any;
  backgrounds: [
    {
      nombre: string;
      skills: string[];
      languages?: number;
      tools?: string[];
    }
  ];
  skillList: string[];
  languages = {};
  razas: any;

  constructor(private router: Router) {
    this.fetchAsync();
    this.cargarStorage();
    console.log('archivos cargados');
  }

  fetchAsync = async () => {
    let resp = await fetch('assets/clases.json');
    let data = await resp.json();
    this.clases = data.clases;
    this.skillList = data.skillList;
    this.languages = data.languages;

    let backs = await fetch('assets/backgrounds.json');
    data = await backs.json();
    this.backgrounds = data.backgrounds;

    let races = await fetch('assets/races.json');
    data = await races.json();
    this.razas = data.races;
    console.log('cargando archivos');
  };

  crearPersonaje(data) {
    const nuevoPj = new Personaje(data.nombre);
    nuevoPj.level = data.level;
    let stats = [];
    if (data.stats != '') {
      stats = data.stats.split(' ');
    }
    nuevoPj.listaStats = stats;
    this.personajes.push(nuevoPj);

    return nuevoPj.id;
  }
  cambiarNombre(id: number | string, nombre: string) {
    let pj = this.obtenerPersonaje(id);
    let index = this.personajes.indexOf(pj);
    pj.nombre = nombre;
    this.personajes.splice(index, 1);
    this.personajes.push(pj);
    this.guardarStorage();
  }

  obtenerPersonaje(id: number | string) {
    id = Number(id);

    return this.personajes.find((resp) => resp.id === id);
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.personajes));
  }

  cargarStorage() {
    if (localStorage.getItem('data')) {
      this.personajes = JSON.parse(localStorage.getItem('data'));
    }
  }

  swipe(personaje: Personaje) {
    let index = this.personajes.indexOf(personaje);
    this.personajes.splice(index, 1);
    this.guardarStorage();
  }

  bonoRaza(personaje: Personaje, raza?: any) {
    //TODO agregar caso en que stat sea "any"
    let ObjTmp = {
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
    };
    if (raza) {
      for (let key of Object.keys(raza.stats)) {
        if (key == 'all') {
          for (let atributo of Object.keys(ObjTmp)) {
            ObjTmp[atributo] = 1;
          }
        } else {
          ObjTmp[key] = raza.stats[key];
        }
      }
      if (personaje.subraza) {
        for (let key of Object.keys(raza.subraces[personaje.subraza].stats)) {
          ObjTmp[key] += raza.subraces[personaje.subraza].stats[key];
        }
      }
      personaje.stats = ObjTmp;
      if (personaje.statsBase) {
        for (let key of Object.keys(personaje.stats)) {
          personaje.stats[key] =
            personaje.statsBase[key] + personaje.stats[key];
        }
      }

      console.log(personaje);
    } else {
      for (let key of Object.keys(personaje.statsBase)) {
        ObjTmp[key] = personaje.statsBase[key];
      }
      personaje.stats = ObjTmp;
    }
  }
}
