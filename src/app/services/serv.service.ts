import { Injectable } from '@angular/core';
import { Clase } from '../models/clase.model';
import { Personaje } from '../models/personaje.model';

@Injectable({
  providedIn: 'root'
})
export class ServService {
  
  personajes: Personaje[] = [];
  clases: Clase[];
  skills: [{
    atributo: string;
    skill: string[];
  }]
  backgrounds: [{
    nombre: string,
    skills: string[],
    languages?: number,
    tools?: string[],
  }];
  skillList: string[];
  languages = {};
  razas: any;
  subrazas: any;

  


  constructor() {
    fetch("/assets/clases.json")
      .then(resp => resp.text())
      .then(text => {
        this.clases = (JSON.parse(text).clase)
        this.skills = (JSON.parse(text).skills)
        this.backgrounds = (JSON.parse(text).backgrounds)
        this.skillList = (JSON.parse(text).skillList)
        this.languages = (JSON.parse(text).languages)
        this.razas = (JSON.parse(text).races)
        this.subrazas = (JSON.parse(text).subraces)
      });
    this.cargarStorage();
  }

  crearPersonaje ( data ) {
    const nuevoPj = new Personaje(data.nombre);
    nuevoPj.level = data.level;
    let stats = []
    if ( data.stats != "") {
      stats = data.stats.split(" ");
    }
    nuevoPj.listaStats = stats;
    this.personajes.push(nuevoPj);
    this.guardarStorage();

    return nuevoPj.id;

  }
  cambiarNombre(id: number | string, nombre: string) {
    let pj = this.obtenerPersonaje(id);
    let index = this.personajes.indexOf(pj);
    pj.nombre = nombre;
    this.personajes.splice(index,1);
    this.personajes.push(pj);
    this.guardarStorage();


  }

  obtenerPersonaje(id: number | string) {
    id = Number(id);

    return this.personajes.find(resp => resp.id === id);
  }

  guardarStorage() {
    localStorage.setItem('data',JSON.stringify(this.personajes));
  }

  cargarStorage() {
    if ( localStorage.getItem('data') ){
      this.personajes = JSON.parse(localStorage.getItem('data'));
    }
  }

  swipe(personaje: Personaje) {
    let index = this.personajes.indexOf(personaje);
    this.personajes.splice(index,1);
    this.guardarStorage();

  }
}
