import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.html',
  styleUrls: ['../../app/loader/loader.scss']
})
export class LoaderComponent implements OnInit {
  private loading: any;

  constructor(private loadingCtrl: LoadingController) {}

  ngOnInit() {}

  showLoader() {
    this.loadingCtrl.create({
      message: 'Loading....'
    }).then(overlay => {
      this.loading = overlay;
      this.loading.present();
    });
  }

  hideLoader() {
    if (this.loading) {
      this.loading.dismiss();
    }
  }
}