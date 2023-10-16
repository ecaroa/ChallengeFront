import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
  }

  goToHome() {
    const timeLoader = 5000;
    const navigateTo = '/home';
    const timeBetweenImages = 2000;
    const imagesTexts = [
      { image: '../../assets/images/lago.jpg', text: 'Cargando...' },
      { image: '../../assets/images/montanasIA.jpg', text: 'Loading...' },
      { image: '../../assets/images/arbolSolitario.jpg', text: 'Waiting...' }
    ];

    this.loaderService.showLoader(timeLoader, navigateTo, timeBetweenImages, imagesTexts);
  }

}
