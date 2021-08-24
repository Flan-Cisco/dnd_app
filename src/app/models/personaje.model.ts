import { Saves } from './saves.model';
import { Stats } from './stats.model';

export class Personaje {
    nombre: string;
    id: number;
    level: number;
    class: string;
    background: string;
    race: string;
    subrace: string;
    alineamiento: string;
    stats: Stats;
    statsBase: Stats;
    bonoAny: Stats;
    proficiency: number;
    hp: number;
    skills: Record<string, any>;
    savings: Saves;
    languagesCommon: string[];
    languagesExotic: string[];
    listaStats: number[];

    constructor(nombre: string) {
        this.id = new Date().getTime();
        this.nombre = nombre;
    }
}
