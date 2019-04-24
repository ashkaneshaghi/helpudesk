import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController, ActionSheetController  } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public onRegisterForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public actionSheetController: ActionSheetController
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {

    this.onRegisterForm = this.formBuilder.group({
      'Number': [null, Validators.compose([
        Validators.required
      ])],
      'firstname': [null, Validators.compose([
        Validators.required
      ])],
      'familyname': [null, Validators.compose([
        Validators.required
      ])],
      'gender': ['',  Validators.compose([
        Validators.required
      ])],
      'birthday': ['',  Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required, 
        Validators.minLength(6), 
        Validators.maxLength(30), 
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,30}$')])],
      'confirmpassword': [null, Validators.compose([
        Validators.required
      ])],
    }, {validator: this.matchingPasswords('password', 'confirmpassword')});


  }

  // Checking Passwords Matching

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    // Checking Password
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  // Navigate to Login Page

  backLogin(){
    this.navCtrl.navigateRoot('/login');
  }

  // Navigate To Dashboard
  goToDashboard(){
    // For Storing in Database and make Login
    this.navCtrl.navigateRoot('/dashboard');
  }
}
