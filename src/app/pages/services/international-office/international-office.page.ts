import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-international-office',
  templateUrl: './international-office.page.html',
  styleUrls: ['./international-office.page.scss'],
})
export class InternationalOfficePage implements OnInit {

  constructor(    
    private navCtrl: NavController,
    ) { }

  ngOnInit() {
  }


  goToAppointment() {
    this.navCtrl.navigateForward('/services/international-office/appointment');
  }

}
