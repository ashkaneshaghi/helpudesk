import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-bank-appointment',
  templateUrl: './bank-appointment.page.html',
  styleUrls: ['./bank-appointment.page.scss'],
})
export class BankAppointmentPage implements OnInit {
  private onBankAppointmentForm: FormGroup;
  private address: string = 'Wallstraße 23a, 69123 Heidelberg';
  private appointmentType: string = 'Bank';

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.onBankAppointmentForm = this.formBuilder.group({
      'dateOfAppointment': ['', Validators.compose([
        Validators.required
      ])],
    });
  }

  // Function for submiting from
  async bankAppointmentSend() {
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
  this.navCtrl.navigateBack('services/bank')

    });
  }
}
