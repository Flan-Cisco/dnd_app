import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { range } from 'rxjs';
import { Personaje } from '../models/personaje.model';
import { Saves } from '../models/saves.model';

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
  languages: {
    common: string[];
    exotic: string[];
  };
  razas: any;

  constructor(private router: Router) {
    this.cargarStorage();
  }

  async fetchClases(){
    const resp = await fetch('assets/clases.json');
    const data = await resp.json();
    this.clases = data.clases;
    this.skillList = data.skillList;
    this.languages = data.languages;
  }
  async fetchBacks() {
    const resp = await fetch('assets/backgrounds.json');
    const data = await resp.json();
    this.backgrounds = data.backgrounds;
  }
  async fetchRaces() {
    const resp = await fetch('assets/races.json');
    const data = await resp.json();
    this.razas = data.races;
  }

  fetchDatos() {
    this.fetchClases();
    this.fetchBacks();
    this.fetchRaces();
  }

  crearPersonaje(data) {
    const nuevoPj = new Personaje(data.nombre);
    nuevoPj.level = data.level;
    let stats = [];
    if (data.stats !== '') {
      stats = data.stats.split(' ');
    }
    nuevoPj.listaStats = stats;
    this.personajes.push(nuevoPj);

    this.guardarStorage();

    return nuevoPj.id;
  }
  cambiarNombre(id: number | string, nombre: string) {
    const pj = this.obtenerPersonaje(id);
    const index = this.personajes.indexOf(pj);
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
    const index = this.personajes.indexOf(personaje);
    this.personajes.splice(index, 1);
    this.guardarStorage();
  }

  bonoRaza(personaje: Personaje, raza?: any) {
    const objTmp = {
      Str: 0,
      Dex: 0,
      Con: 0,
      Int: 0,
      Wis: 0,
      Cha: 0,
    };
    if (personaje.race) {
      for (const key of Object.keys(this.razas[personaje.race].stats)) {
        if (key === 'all') {
          for (const atributo of Object.keys(objTmp)) {
            objTmp[atributo] = 1;
          }
        } else if (key !== 'all' && key !== 'any') {
          objTmp[key] = this.razas[personaje.race].stats[key];
        }
      }
      if (personaje.subrace) {
        for (const key of Object.keys(
          this.razas[personaje.race].subraces[personaje.subrace].stats
        )) {
          objTmp[key] +=
            this.razas[personaje.race].subraces[personaje.subrace].stats[key];
        }
      }
      personaje.stats = objTmp;
      if (personaje.statsBase) {
        for (const key of Object.keys(personaje.stats)) {
          personaje.stats[key] =
            personaje.statsBase[key] + personaje.stats[key];
          if (personaje.bonoAny) {
            personaje.stats[key] += personaje.bonoAny[key];
          }
          if (personaje.stats[key] >= 20) {
            personaje.stats[key] = 20;
          }
        }
      }
    } else {
      for (const key of Object.keys(personaje.statsBase)) {
        objTmp[key] = personaje.statsBase[key];
      }
      personaje.stats = objTmp;
    }
    this.generarSavings(personaje);
  }
  generarSavings(personaje: Personaje) {
    personaje.savings = new Saves(
      Math.floor((personaje.stats.Str - 10) / 2),
      Math.floor((personaje.stats.Dex - 10) / 2),
      Math.floor((personaje.stats.Con - 10) / 2),
      Math.floor((personaje.stats.Int - 10) / 2),
      Math.floor((personaje.stats.Wis - 10) / 2),
      Math.floor((personaje.stats.Cha - 10) / 2)
    );
  }

  setHp(personaje: Personaje) {
    const dadoHP = this.clases[personaje.class].hp;
    let hp = dadoHP;
    console.log("Hp at level 1: ",hp);
    for (let i=2; i<=personaje.level; i++ ) {
      hp += Math.floor(Math.random()*dadoHP) +1;
      console.log("Hp at level %o:",i,hp);
    }

    personaje.hp = hp;
  }
  bonoHP(personaje: Personaje) {
    return personaje.hp + personaje.level * Math.floor((personaje.stats.Con - 10) / 2);
  }
}
