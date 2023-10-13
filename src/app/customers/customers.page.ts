import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { LoaderService } from '../loader.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  private loading : any;
  
  constructor(private router: Router, private loadinCtrl:LoadingController, private loaderService: LoaderService) { }

  ngOnInit() {
  }

  goToHome() {
    this.loaderService.showLoader();

    setTimeout(() => {
      this.loaderService.hideLoader();
      this.router.navigate(['/home']);
    }, 4000);
    
  }

}
