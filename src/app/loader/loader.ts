import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap, timer } from 'rxjs';
import { ImageText } from './ImageText';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.html',
  styleUrls: ['../../app/loader/loader.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  
  imagesTexts: ImageText[];

  posc = 0;

  private timer: Subscription = Subscription.EMPTY;

  private timeBetweenImgs : number;

  constructor(public navParams: NavParams) {
    this.timeBetweenImgs = navParams.get('timeBetweenImgs');
    this.imagesTexts = navParams.get('imagesTexts');
  }

  ngOnInit() {
    this.timer = timer(0, this.timeBetweenImgs)
      .pipe(
          tap(() => this.changePosc()))
      .subscribe();
  }

  changePosc(): void {
    console.log(this.posc);
    if (this.posc == (this.imagesTexts.length - 1)) {
      this.posc = 0;
    } else {
      this.posc += 1;
    }
  }

  ngOnDestroy(): void {
    this.timer.unsubscribe();
  }
}

