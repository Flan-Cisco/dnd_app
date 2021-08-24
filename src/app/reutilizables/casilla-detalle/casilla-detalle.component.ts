import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/personaje.model';

@Component({
  selector: 'app-casilla-detalle',
  templateUrl: './casilla-detalle.component.html',
  styleUrls: ['./casilla-detalle.component.scss'],
})
export class CasillaDetalleComponent implements OnInit {

  @Input() personaje: Personaje;
  @Input() titulo: string;
  constructor() { }

  ngOnInit() {}

}
