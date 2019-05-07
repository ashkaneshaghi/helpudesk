import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-code-of-conduct',
  templateUrl: './code-of-conduct.page.html',
  styleUrls: ['./code-of-conduct.page.scss'],
})
export class CodeOfConductPage implements OnInit {

  constructor(public toastCtrl: ToastController) { }

  async acknowledgeSubmit() {
    const toast = await this.toastCtrl.create({
      message: 'Submitted',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
