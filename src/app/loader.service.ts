import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoaderComponent } from './loader/loader';
import { Router } from '@angular/router';
import { ImageText } from './loader/ImageText';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private modalController: ModalController, private router: Router) { }

  async showLoader(time: number, urlToNavigate: string, timeBetweenImgs: number, imagesTexts: ImageText[]) {
    const loader = await this.modalController.create({
      component: LoaderComponent,
      backdropDismiss: false,
      componentProps: {
        timeBetweenImgs,
        imagesTexts
      }
    });

    setTimeout(() => {
      this.modalController.dismiss()
      this.router.navigateByUrl(urlToNavigate);
    }, time);

    return await loader.present();
  }
}
