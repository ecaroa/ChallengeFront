import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loader: any;

  constructor(private loadingCtrl: LoadingController) {}

  async showLoader() {
    this.loader = await this.loadingCtrl.create({
      message: 'Loading....',
    });

    await this.loader.present();
  }

  hideLoader() {
    if (this.loader) {
      this.loader.dismiss();
    }
  }
}
