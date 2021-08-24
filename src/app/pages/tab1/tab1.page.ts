import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActionSheetController,
  AlertController,
  ToastController,
} from '@ionic/angular';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  clases: any[];
  backgrounds: any[];
  constructor(
    public service: ServService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController
  ) {}

  async crearPersonaje() {
    const alert = await this.alertCtrl.create({
      header: 'Nuevo Personaje',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre del personaje',
        },
        {
          name: 'level',
          type: 'number',
          placeholder: 'Level',
        },
        {
          name: 'stats',
          type: 'text',
          placeholder: '10 10 10 10 10 10 (Opcional)',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'Crear',
          handler: (data) => {
            if (data.nombre.length === 0) {
              this.presentToast('Error al crear el personaje: Ingrese nombre.');
              return;
            }
            if (!data.level) {
              this.presentToast(
                'Error al crear el personaje: Ingrese el nivel.'
              );
              return;
            } else {
              if (data.stats.split(' ').length === 6 || data.stats === []) {
                const id = this.service.crearPersonaje(data);
                this.router.navigateByUrl(`/tabs/tab1/personaje/${id}`);
              } else {
                this.presentToast(
                  'Error al crear el personaje: Ingrese todos los atributos o deje el campo en blanco.'
                );
                return;
              }
            }
          },
        },
      ],
    });
    await alert.present();
  }
  async presentToast(msje: string) {
    const toast = await this.toastCtrl.create({
      message: msje,
      duration: 3000,
    });
    toast.present();
  }

  async presentActionSheet(id: number | string) {
    id = Number(id);
    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Ver',
          icon: 'eye-outline',
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Editar',
          icon: 'build-outline',
          handler: () => {
            this.router.navigateByUrl(`/tabs/tab1/personaje/${id}`);
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
