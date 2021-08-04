import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/personaje.model';

@Component({
  selector: 'casilla-select',
  templateUrl: './casilla-select.component.html',
  styleUrls: ['./casilla-select.component.scss'],
})
export class CasillaSelectComponent implements OnInit {

  @Input() personaje: Personaje;
  @Input() keys: any;
  @Input() titulo: string;

  constructor() { }

  ngOnInit() {}

}
