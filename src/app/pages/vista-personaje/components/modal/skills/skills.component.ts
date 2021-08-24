import { Attribute, Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Personaje } from 'src/app/models/personaje.model';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {

  @Input() personaje: Personaje;
  @Input() skillList: string[];

  skillsDisponibles: any;
  keySkills: string[];
  skillsSeleccionadas: any = {};
  nSkills: number;
  background: any;

  constructor(private modalController: ModalController, private service: ServService, navParams: NavParams) {
    this.personaje = navParams.get('personaje');
    this.skillList = navParams.get('skillList');

    this.skillsDisponibles = this.service.clases[this.personaje.class].skills;
    this.nSkills = this.service.clases[this.personaje.class].nSkills;
    this.keySkills = Object.keys(this.skillsDisponibles);
    this.background = this.service.backgrounds[this.personaje.background];


    //TODO reset de skills de background al cambiar de background al pj
    for ( const skill of this.background.skills) {
      for ( const atributo of Object.keys(this.skillList)) {
        if ( this.skillList[atributo].includes(skill)) {
          if (!this.skillsDisponibles[atributo].includes(skill)){
            this.skillsDisponibles[atributo].push(skill);
          }
        }
      }
    }

    if (this.personaje.skills) {
      for ( const skill of Object.keys(this.personaje.skills)) {
        this.skillsSeleccionadas[skill] = this.personaje.skills[skill];
      }
    } else {
      for ( const atributo of Object.keys(this.skillList)) {
        for ( const skill of this.skillList[atributo]) {
          this.skillsSeleccionadas[skill] = false;
        }
      }
      for(const skill of this.service.backgrounds[this.personaje.background].skills) {
        this.skillsSeleccionadas[skill] = true;
      }
    }


  }

  calcularMod(stat: number) {
    return Math.floor((stat-10)/2);
  }
  agregarProficiencia(stat: number, prof: boolean) {
    if ( prof ){
      return Math.floor((stat-10)/2) + this.personaje.proficiency;
    } else {
      return Math.floor((stat-10)/2);
    }
  }

  validarBack(skill: string) {
    return this.background.skills.find(resp => resp === skill);
  }


  validar() {
    let cont = 0;
    for (const skill of Object.keys(this.skillsSeleccionadas)) {
      if (this.skillsSeleccionadas[skill]) {
        cont += 1;
      }
    }
    if ( cont === this.nSkills + this.background.skills.length) {
      return true;
    }
    return false;
  }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

  guardar() {
    this.personaje.skills = this.skillsSeleccionadas;

    this.dismiss();

  }

}
