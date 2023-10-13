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
    this.loaderService.showLoader(4000, '/home');
  }

}
