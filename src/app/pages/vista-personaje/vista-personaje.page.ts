import {
  Component,
  ComponentFactoryResolver,
  OnChanges,
  ViewContainerRef,
} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoadingComponent } from 'src/app/reutilizables/loading/loading.component';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-vista-personaje',
  templateUrl: './vista-personaje.page.html',
  styleUrls: ['./vista-personaje.page.scss'],
})
export class VistaPersonajePage implements OnChanges {

  constructor(
    private compResolver: ComponentFactoryResolver,
    private viewconref: ViewContainerRef,
    private service: ServService,
    private modalControl: ModalController,
  ) {
    this.abrirModal();
    setTimeout(() => {
      this.dismiss();
      this.loadComponent();
    }, 3000);

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

  ngOnChanges() {}

  loadComponent() {
    import('../../components/crear/crear.component').then(
      ({ CrearComponent }) => {
        this.viewconref.clear();
        const cmp = this.compResolver.resolveComponentFactory(CrearComponent);
        const cmpref = this.viewconref.createComponent(cmp);
      }
    );
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
    this.modalControl.dismiss({
      'dismissed': true
    })
  }
}
