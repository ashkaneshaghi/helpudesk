import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  public onContactUs: FormGroup;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.onContactUs = this.formBuilder.group({
      'subject': [null, Validators.compose([
        Validators.required
      ])],
      'text': [null, Validators.compose([
        Validators.required
      ])]
    });
  }


  // Storing Contact Us Form and Redirect to Dashboard

  async contactUsInfoSend() {
    // Sotring Code
    const loader = await this.loadingCtrl.create({
      duration: 1000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        message: 'Thank you for contacting us',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
      this.navCtrl.navigateForward('/dashboard');
    });

  }

}
