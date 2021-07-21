import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Personaje } from 'src/app/models/personaje.model';
import { CargaDBService } from 'src/app/services/carga-db.service';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-vista-personaje',
  templateUrl: './vista-personaje.page.html',
  styleUrls: ['./vista-personaje.page.scss'],
})
export class VistaPersonajePage implements OnInit {

  personaje: Personaje;
  clases: any[];
  backgrounds: any[];
  razas: any[];
  subrazas: any[];

  constructor(private service: ServService, private serviceDB: CargaDBService, private route: ActivatedRoute, private compResolver: ComponentFactoryResolver, private viewconref: ViewContainerRef) {
    
    this.personaje = this.service.obtenerPersonaje(this.route.snapshot.paramMap.get('id'));

    this.clases = this.service.clases;
    this.backgrounds = this.service.backgrounds;
    this.razas = this.service.razas;
    this.subrazas = this.service.subrazas;
    // new Promise ((resolve, reject) => {
    //   this.serviceDB.backgrounds.subscribe(resp => {
    //     if ( resp ) {
    //       this.backgrounds = resp;
    //       resolve("done");
    //     } else {
    //       reject("error");
    //     }
    //   })
    // }).then (
    //   (val) => {
    //     console.log("listo")
    //     this.loadComponent();
    //   }
    // )
    // this.serviceDB.backgrounds.subscribe(resp => {
    //   if (resp) {
    //     this.backgrounds = resp;
    //   }
    // })
    // this.serviceDB.clases.subscribe(resp => {
    //   if (resp) {
    //     this.clases = resp;
    //     this.loadComponent();
    //   }
    // })
  }

  ngOnInit() {
  }

  // loadComponent() {
  //   import ("../../components/crear/crear.component").then(({CrearComponent}) => {
  //     this.viewconref.clear();
  //     const cmp = this.compResolver.resolveComponentFactory(CrearComponent);
  //     const cmpref = this.viewconref.createComponent(cmp);
  //   })
  // }

}
