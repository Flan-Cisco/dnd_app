import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Personaje } from 'src/app/models/personaje.model';
import { Stats } from 'src/app/models/stats.model';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.scss'],
})
export class ModalTemplateComponent implements OnInit {

  @Input() personaje: Personaje;
  @Input() stats: Stats;
  @Input() titulo: string;

  constructor(navParams: NavParams, private modalController: ModalController) {
    this.personaje= navParams.get("personaje");
    this.stats = navParams.get("status");
    this.titulo = navParams.get("titulo");
  }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }
}
