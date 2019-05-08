import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-international-office-appointment',
  templateUrl: './international-office-appointment.page.html',
  styleUrls: ['./international-office-appointment.page.scss'],
})
export class InternationalOfficeAppointmentPage implements OnInit {
  private onInternationalOfficeAppointmentForm: FormGroup;
  private address: string = 'Room arc 103, Ludwig-Guttmann-Straße 6, 69123 Heidelberg';
  private appointmentType: string = 'International Office';

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.onInternationalOfficeAppointmentForm = this.formBuilder.group({
      'dateOfAppointment': ['', Validators.compose([
        Validators.required
      ])],
    });
  }

  // Function for submiting from
  async internationalOfficeAppointmentSend() {
    const loader = await this.loadingCtrl.create({
      duration: 1000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
  
  
  const toast = await this.toastCtrl.create({
    showCloseButton: true,
    message: 'Your Appointment has been saved!!!',
    duration: 3000,
    position: 'bottom'
  });

  toast.present();
  this.navCtrl.navigateBack('services/international-office')

    });
  }
}
