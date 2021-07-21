import { Component, Input, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { Stats } from 'src/app/models/stats.model';

@Component({
  selector: 'stats-popover',
  templateUrl: './stats.popover.html',
  styleUrls: ['./stats.popover.scss'],
})
export class StatsPopoverComponent implements OnInit {

  @Input() stats: Stats;
  @Input() raza: any;

  atributos: string[] = [
    "Str",
    "Dex",
    "Con",
    "Int",
    "Wis",
    "Cha"
  ];

  constructor(public popoverCtrl: PopoverController, navParams: NavParams) {
    this.stats = navParams.get("stats");
    this.raza = navParams.get("raza")
    console.log(this.stats);
    console.log(this.raza);
    
  }
  
  calcularModificador(stat: number) {
    return Math.abs(Math.floor((stat-10)/2))
  }

  ngOnInit() {}

  dismiss() {
    this.popoverCtrl.dismiss({
      'dismissed': true
    })
  }

}
