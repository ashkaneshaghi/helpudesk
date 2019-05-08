import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-city-registeration-appointment',
  templateUrl: './city-registeration-appointment.page.html',
  styleUrls: ['./city-registeration-appointment.page.scss'],
})
export class CityRegisterationAppointmentPage implements OnInit {
  private onCityRegisterationAppointmentForm: FormGroup;
  private address: string = 'Mannheimer Str. 259, 69123 Heidelberg';
  private appointmentType: string = 'City Registeration';

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.onCityRegisterationAppointmentForm = this.formBuilder.group({
      'dateOfAppointment': ['', Validators.compose([
        Validators.required
      ])],
    });
  }

  // Function for submiting from
  async cityRegisterAppointmentSend() {
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
  this.navCtrl.navigateBack('services/city-registeration')

    });
  }
}
