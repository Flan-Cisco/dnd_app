import { Component, Input, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { Personaje } from 'src/app/models/personaje.model';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'stats-popover',
  templateUrl: './stats.popover.html',
  styleUrls: ['./stats.popover.scss'],
})
export class StatsPopoverComponent implements OnInit {

  @Input() personaje: Personaje;


  atributos: string[] = [
    "Str",
    "Dex",
    "Con",
    "Int",
    "Wis",
    "Cha"
  ];

  constructor(public popoverCtrl: PopoverController, private service:ServService, navParams: NavParams) {
    this.personaje = navParams.get("personaje");
    console.log(this.personaje.stats);



    
  }
  
  calcularModificador(stat: number) {
    return Math.floor((stat-10)/2)
  }

  ngOnInit() {}

  dismiss() {
    this.popoverCtrl.dismiss({
      'dismissed': true
    })
  }

}
