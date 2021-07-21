import { Saves } from "./saves.model";
import { Skills } from "./skills.model";
import { Stats } from "./stats.model";


export class Personaje {
    nombre: string;
    id: number;
    level: number;
    clase: string;
    background: string;
    raza: string;
    subraza: string;
    alineamiento: string;
    stats: Stats;
    proficiencia: number;
    hp: number;
    skills: [{
        skill: string;
        prof: boolean;
        expertice: boolean;
    }];
    savings: Saves;
    languagesCommon: string[];
    languagesExotic: string[];
    listaStats: number[];

    constructor(nombre: string) {
        this.id = new Date().getTime();
        this.nombre = nombre;
    }


}