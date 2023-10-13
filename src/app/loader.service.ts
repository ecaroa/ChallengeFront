import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoaderComponent } from './loader/loader';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private modalController: ModalController, private router: Router) {}

  async showLoader(time: number, urlToNavigate: string) {
      const loader = await this.modalController.create({
        component: LoaderComponent,
        backdropDismiss: false
      });

      setTimeout(() => {
        this.modalController.dismiss()
        this.router.navigateByUrl(urlToNavigate);
      }, time);

      return await loader.present();
  }
}
