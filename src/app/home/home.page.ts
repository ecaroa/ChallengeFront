import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
  }

  goToCustomers() {
    const timeLoader = 4000;
    const navigateTo = '/customers';
    const timeBetweenImages = 1000;
    const imagesTexts = [
      { image: '../../assets/images/lago.jpg', text: 'Cargando...' },
      { image: '../../assets/images/montanasIA.jpg', text: 'Loading...' },
      { image: '../../assets/images/arbolSolitario.jpg', text: 'Waiting...' }
    ];

    this.loaderService.showLoader(timeLoader, navigateTo, timeBetweenImages, imagesTexts);
  }

}
