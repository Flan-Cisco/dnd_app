import { Component, Input, OnInit } from '@angular/core';
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
  skills: string[];
  nSkills: number;
  skillsSeleccionadas:any=[];
  descSkills: any=[];
  descBackground: any;
  backSkills: number;

  constructor(private modalController: ModalController, private service: ServService, navParams: NavParams) {
    this.personaje = navParams.get("personaje");

    if ( this.personaje.clase && this.service.clases) {
      let desc = this.service.clases.find(resp => {
        return resp.nombre == this.personaje.clase
      });
      console.log("background:", this.personaje.background);
      this.descBackground = this.service.backgrounds.find(resp=> {
        return resp.nombre == this.personaje.background
      });
      this.backSkills = this.descBackground.skills.length;
      if (desc.skills == ["any"]) {
        this.skills = service.skillList;
      } else {
        this.skills = desc.skills;
      }
      for( let skill of this.descBackground.skills) {
        if ( !this.skills.find(resp => resp == skill)) {
          this.skills.push(skill);
        }
      }
      this.nSkills = desc.nSkills;
      for (let skill of this.skills){
        if (this.descBackground.skills.find(resp => resp == skill)) {
          this.skillsSeleccionadas.push({nombre: skill, proficence:true})
        } else {
          this.skillsSeleccionadas.push({nombre: skill, proficence:false})
        }
        
      }
      this.descSkills = this.service.skills;
      
      
      // console.log(this.skillsSeleccionadas)
      // console.log(this.skills);
      // console.log(this.nSkills);
    }
  }

  validarMod(skill: string) {
    for ( let atrib of this.descSkills) {
      if ( atrib.skill.find(resp => {
        return resp == skill
      })) {
        return Math.floor((this.personaje.stats[atrib.atributo.toLowerCase()]-10)/2);
      }
    }
  }
  validarBack(skill: string) {
    return this.descBackground.skills.find(resp => resp == skill);
  }
  sumarProf(prof: boolean) {
    if (prof) {
      return Number(this.personaje.proficiencia);
    } else {
      return 0;
    }
  }

  validar() {
    let cont = 0;
    for (let skill of this.skillsSeleccionadas) {
      if ( skill.proficence) {
        cont += 1;
      }
    }
    if ( cont == this.nSkills + this.backSkills) {
      return true;
    }
    return false;
  }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

}
