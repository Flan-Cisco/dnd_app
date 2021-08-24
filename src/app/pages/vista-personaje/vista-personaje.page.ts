import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Personaje } from 'src/app/models/personaje.model';
import { LoadingComponent } from 'src/app/reutilizables/loading/loading.component';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-vista-personaje',
  templateUrl: './vista-personaje.page.html',
  styleUrls: ['./vista-personaje.page.scss'],
})
export class VistaPersonajePage implements OnInit {

  loaded = false;
  personaje: Personaje;
  constructor(
    private service: ServService,
    private modalControl: ModalController,
    private route: ActivatedRoute,
  ) {
    this.abrirModal();
    setTimeout(() => {
      this.dismiss();
      this.loaded= true;
    }, 3000);
  }

  ngOnInit() {
    this.personaje = this.service.obtenerPersonaje(this.route.snapshot.paramMap.get('id'));
    this.service.fetchDatos();

  }

  async abrirModal() {
    const modal = await this.modalControl.create({
      component:LoadingComponent,
      backdropDismiss: false,
      componentProps: {

      }

    });
    return await modal.present();
  }
  dismiss() {
    this.modalControl.dismiss();
  }
}
