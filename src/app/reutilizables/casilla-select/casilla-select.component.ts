import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Personaje } from 'src/app/models/personaje.model';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-casilla-select',
  templateUrl: './casilla-select.component.html',
  styleUrls: ['./casilla-select.component.scss'],
})
export class CasillaSelectComponent implements OnInit {

  @Input() personaje: Personaje;
  @Input() keys: any;
  @Input() titulo: string;

  constructor(private service: ServService) { }

  ngOnInit() {}


}
