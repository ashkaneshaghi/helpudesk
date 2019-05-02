import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActionSheetController, AlertController, LoadingController, MenuController, NavController, ToastController } from '@ionic/angular';
import { empty } from 'rxjs';
import { IonicSelectableComponent } from 'ionic-selectable';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  // Profile checker Parameters
  private profileChecker: boolean = false;

  // Arrays of needed Lists
  private countries: any[];
  private phoneType: any[];
  private addressType: any[];
  private emailType: any[];
  private nationalities: any[];


  // Edit Buttons 
  private btn_General: string;
  private btn_address: string;
  private btn_email: string;
  private btn_phone: string;
  private btn_password: string;
  private btn_emergencyInfo: string;
  private btn_emergencyContact: string;

  // Add Buttons
  private add_btn_Address: String;
  private add_btn_email: string;
  private add_btn_phone: string;
  private add_btn_emergencyInfo: string;
  private add_btn_emergencyContact: string;

  // Add Forms Parameters for Activating/Deactivating
  private add_address: boolean;
  private add_email: boolean;
  private add_phone: boolean;
  private add_emergencyInfo: boolean;
  private add_emergencyContact: boolean;

  // Edit Forms Parameters for Activating/Deactivating
  private generalInfo: boolean;
  private address: boolean;
  private email: boolean;
  private phone: boolean;
  private emergencyInfo: boolean;
  private emergencyContact: boolean;
  private password: boolean;

  // Forms Groups
  private onUpdateGeneralInfoForm: FormGroup;
  private onUpdateAddressForm: FormGroup;
  private onAddAddressForm: FormGroup;
  private onAddEmailForm: FormGroup;
  private onUpdateEmailForm: FormGroup;
  private onUpdatePhoneForm: FormGroup;
  private onAddPhoneForm: FormGroup;
  private onAddEmergencyInfoForm: FormGroup;
  private onUpdateEmergencyInfoForm: FormGroup;
  private onUpdateEmergencyContactForm: FormGroup;
  private onAddEmergencyContactForm: FormGroup;
  private onChangePasswordForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private actionSheetController: ActionSheetController,
    private http: HttpClient
  ) {
    this.localFileReading();
    this.changeStatus();
    this.initializingTables();
  }

  ngOnInit() {
    this.formsControling();
  }

  // Reading Local Files
  localFileReading() {
    this.http.get('../../assets/lists/lists.json').subscribe(res => {
      this.countries = res['countries'];
      this.nationalities = res['nationalites'];
      this.addressType = res['addresstype'];
      this.phoneType = res['phonetype'];
      this.emailType = res['emailtype'];
      this.countries[0].open = true;
      this.nationalities[0].open = true;
      this.addressType[0].open = true;
      this.phoneType[0].open = true;
      this.emailType[0].open = true;
    })
  }
  
 // Controling Forms Function
  formsControling() {
  this.onUpdateGeneralInfoForm = this.formBuilder.group({
    'firstname': [!empty, Validators.compose([
      Validators.required
    ])],
    'familyname': [!empty, Validators.compose([
      Validators.required
    ])],
    'birthday': [!empty, Validators.compose([
      Validators.required
    ])],
    'gender': ['', Validators.compose([
      Validators.required
    ])],
    'nationality': ['', Validators.compose([
      Validators.required
    ])],

  });

  this.onUpdateAddressForm = this.formBuilder.group({
    'addresstype': [!empty, Validators.compose([
      Validators.required
    ])],
    'country': ['', Validators.compose([
      Validators.required
    ])],
    'city': [!empty, Validators.compose([
      Validators.required
    ])],
    'street1': [!empty, Validators.compose([
      Validators.required
    ])],
    'postcode': [!empty, Validators.compose([
      Validators.required
    ])],

  });

  this.onAddAddressForm = this.formBuilder.group({
    'addresstype': [null, Validators.compose([
      Validators.required
    ])],
    'country': ['', Validators.compose([
      Validators.required
    ])],
    'city': ['', Validators.compose([
      Validators.required
    ])],
    'street1': ['', Validators.compose([
      Validators.required
    ])],
    'postcode': ['', Validators.compose([
      Validators.required
    ])],

  });

  this.onUpdateEmailForm = this.formBuilder.group({
    'email': [!empty, Validators.compose([
      Validators.required
    ])],
    'emailtype': ['', Validators.compose([
      Validators.required
    ])],

  });

  this.onAddEmailForm = this.formBuilder.group({
    'email': ['', Validators.compose([
      Validators.required
    ])],
    'emailtype': ['', Validators.compose([
      Validators.required
    ])],

  });

  this.onUpdatePhoneForm = this.formBuilder.group({
    'phone': [!empty, Validators.compose([
      Validators.required
    ])],
    'phonetype': ['', Validators.compose([
      Validators.required
    ])],

  });

  this.onAddPhoneForm = this.formBuilder.group({
    'phone': ['', Validators.compose([
      Validators.required
    ])],
    'phonetype': ['', Validators.compose([
      Validators.required
    ])],

  });
  
  this.onAddEmergencyInfoForm = this.formBuilder.group({
    'diseasename': ['', Validators.compose([
      Validators.required
    ])],
  });

  this.onUpdateEmergencyInfoForm = this.formBuilder.group({
    'diseasename': [!empty, Validators.compose([
      Validators.required
    ])],
  });
  
  this.onUpdateEmergencyContactForm = this.formBuilder.group({
    'fullname': [!empty, Validators.compose([
      Validators.required
    ])],
    'relation': [!empty, Validators.compose([
      Validators.required
    ])],
    'phonenumber': [!empty, Validators.compose([
      Validators.required
    ])],
  });
  
  this.onAddEmergencyContactForm = this.formBuilder.group({
    'fullname': ['', Validators.compose([
      Validators.required
    ])],
    'relation': ['', Validators.compose([
      Validators.required
    ])],
    'phonenumber': ['', Validators.compose([
      Validators.required
    ])],
  });

  this.onChangePasswordForm = this.formBuilder.group({
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

  // Selectable Lists
  selectChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
  }


  // Profile Progress Finishing
  changeStatus() {
    // TO-DO code to check Database for Profile Status will be here
    if (this.profileChecker) {
      this.profileChecker = false;
    }
    else {
      this.profileChecker = true;
    }
  }

  // Storing Update from User
  async updateData(formname: string) {
    const loader = await this.loadingCtrl.create({
      duration: 1000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      switch (formname) {
        case ('generalInfo'): {
          this.updateRollback();
          this.addRollback();
          this.btn_General = 'Edit';
          //
          // Storing Data for General Info // CODE
          const toast = await this.toastCtrl.create({
            showCloseButton: true,
            message: 'Your Information has been updated!!!',
            duration: 3000,
            position: 'bottom'
          });

          toast.present();
          break;
        }
        case ('password'): {
          this.updateRollback();
          this.addRollback();
          this.btn_password = 'Change Password';
          //
          // Storing Data for Password // CODE
          const toast = await this.toastCtrl.create({
            showCloseButton: true,
            message: 'Your Password has been changed !!!',
            duration: 3000,
            position: 'bottom'
          });

          toast.present();
          break;
        }
        case ('address'): {
          this.updateRollback();
          this.addRollback();
          this.btn_address = 'Edit';
          //
          // Storing Data for Address // CODE
          const toast = await this.toastCtrl.create({
            showCloseButton: true,
            message: 'Your Address has been updated !!!',
            duration: 3000,
            position: 'bottom'
          });

          toast.present();
          break;
        }
        case ('email'): {
          this.updateRollback();
          this.addRollback();
          this.btn_email = 'Edit';
          //
          // Storing Data for Email // CODE
          const toast = await this.toastCtrl.create({
            showCloseButton: true,
            message: 'Your Email has been updated !!!',
            duration: 3000,
            position: 'bottom'
          });

          toast.present();
          break;
        }
        case ('phone'): {
          this.updateRollback();
          this.addRollback();
          this.btn_phone = 'Edit';
          //
          // Storing Data for Phone Number // CODE
          const toast = await this.toastCtrl.create({
            showCloseButton: true,
            message: 'Your Phone Number has been updated !!!',
            duration: 3000,
            position: 'bottom'
          });

          toast.present();
          break;
        }
        case ('emergencyInfo'): {
          this.updateRollback();
          this.addRollback();
          this.btn_emergencyInfo = 'Edit';
          //
          // Storing Data for Emergency Info // CODE
          const toast = await this.toastCtrl.create({
            showCloseButton: true,
            message: 'Your Emergency Information has been updated !!!',
            duration: 3000,
            position: 'bottom'
          });

          toast.present();
          break;
        }
        case ('emergencyContact'): {
          this.updateRollback();
          this.addRollback();
          this.btn_emergencyContact = 'Edit';
          //
          // Storing Data for Emergency Contact // CODE
          const toast = await this.toastCtrl.create({
            showCloseButton: true,
            message: 'Your Emergency Contact has been updated !!!',
            duration: 3000,
            position: 'bottom'
          });

          toast.present();
          break;
        }
      }
    });
  }

  // Storing newly entered Data From User
  async saveData(formname: string) {
    const loader = await this.loadingCtrl.create({
      duration: 1000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      switch (formname) {
        case ('address'): {
          this.updateRollback();
          this.addRollback();
          this.add_btn_Address = 'Add';
          //
          // Storing new Data for address // CODE
          const toast = await this.toastCtrl.create({
            showCloseButton: true,
            message: 'Your new Address has been added!!!',
            duration: 3000,
            position: 'bottom'
          });

          toast.present();
          break;
        }
        case ('email'): {
          this.updateRollback();
          this.addRollback();
          this.add_btn_email = 'Add';
          //
          // Storing new Data for Email // CODE
          const toast = await this.toastCtrl.create({
            showCloseButton: true,
            message: 'Your new Email has been added!!!',
            duration: 3000,
            position: 'bottom'
          });

          toast.present();
          break;
        }
        case ('phone'): {
          this.updateRollback();
          this.addRollback();
          this.add_btn_phone = 'Add';
          //
          // Storing new Data for Phone // CODE
          const toast = await this.toastCtrl.create({
            showCloseButton: true,
            message: 'Your new Phone has been added!!!',
            duration: 3000,
            position: 'bottom'
          });

          toast.present();
          break;
        }
        case ('add_emergencyInfo'): {
          this.updateRollback();
          this.addRollback();
          this.add_btn_emergencyInfo = 'Add';
          //
          // Storing new Data for Emergency Info // CODE
          const toast = await this.toastCtrl.create({
            showCloseButton: true,
            message: 'Your new Emergency Information has been added!!!',
            duration: 3000,
            position: 'bottom'
          });

          toast.present();
          break;
        }
        case ('add_emergencyContact'): {
          this.updateRollback();
          this.addRollback();
          this.add_btn_emergencyContact = 'Add';
          //
          // Storing new Data for Emergency Contact // CODE
          const toast = await this.toastCtrl.create({
            showCloseButton: true,
            message: 'Your new Emergency Contact has been added!!!',
            duration: 3000,
            position: 'bottom'
          });

          toast.present();
          break;
        }
      }
    });
  }

  // Functions for Hideing and Showing tables of forms 
  updateRollback() {
    this.generalInfo = this.address = this.email = this.phone = this.emergencyInfo = this.emergencyContact = this.password = true;
    this.btn_General = this.btn_address = this.btn_email = this.btn_phone = this.btn_emergencyInfo = this.btn_emergencyContact = 'Edit';
    this.btn_password = 'Change Password'
  }

  addRollback() {
    this.add_address = this.add_phone = this.add_email = this.add_emergencyContact = this.add_emergencyInfo = true;
    this.add_btn_Address = this.add_btn_email = this.add_btn_phone = this.add_btn_emergencyInfo = this.add_btn_emergencyContact = 'Add';
  }

  //Initializing Parameters
  initializingTables() {
    // Edit Initial Activating/Deactivating
    this.btn_General = 'Edit';
    this.btn_address = 'Edit';
    this.btn_email = 'Edit';
    this.btn_phone = 'Edit';
    this.btn_password = 'Change Password';
    this.btn_emergencyInfo = 'Edit';
    this.btn_emergencyContact = 'Edit';
    this.generalInfo = true;
    this.address = true;
    this.email = true;
    this.phone = true;
    this.emergencyInfo = true;
    this.emergencyContact = true;
    this.password = true;

    // Add initial Activating/Deactivating
    this.add_address = true;
    this.add_email = true;
    this.add_phone = true;
    this.add_emergencyInfo = true;
    this.add_emergencyContact = true;
    this.add_btn_Address = 'Add';
    this.add_btn_email = 'Add';
    this.add_btn_phone = 'Add';
    this.add_btn_emergencyInfo = 'Add';
    this.add_btn_emergencyContact = 'Add';
  }

  // Opening and Closing Update Forms in View
  async action(formname: string) {
    const loader = await this.loadingCtrl.create({
      duration: 1000
    });
    loader.present();
    loader.onWillDismiss().then(() => {
  switch (formname) {
      case ('generalInfo'): {
        if (this.btn_General == 'Edit') {
          this.addRollback();
          this.updateRollback();
          this.generalInfo = false;
          this.btn_General = 'Cancel';
        } else {
          this.updateRollback();
          this.addRollback();
        }
        break;
      }
      case ('address'): {
        if (this.btn_address == 'Edit') {
          this.updateRollback();
          this.addRollback();
          this.address = false;
          this.btn_address = 'Cancel';
        } else {
          this.updateRollback();
          this.addRollback();
        }
        break;
      }
      case ('email'): {
        if (this.btn_email == 'Edit') {
          this.updateRollback();
          this.addRollback();
          this.email = false;
          this.btn_email = 'Cancel';
        } else {
          this.updateRollback();
          this.addRollback();
        }
        break;
      }
      case ('phone'): {
        if (this.btn_phone == 'Edit') {
          this.updateRollback();
          this.addRollback();
          this.phone = false;
          this.btn_phone = 'Cancel';
        } else {
          this.updateRollback();
          this.addRollback();
        }
        break;
      }
      case ('emergencyInfo'): {
        if (this.btn_emergencyInfo == 'Edit') {
          this.updateRollback();
          this.addRollback();
          this.emergencyInfo = false;
          this.btn_emergencyInfo = 'Cancel';
        } else {
          this.updateRollback();
          this.addRollback();
        }
        break;
      }
      case ('emergencyContact'): {
        if (this.btn_emergencyContact == 'Edit') {
          this.updateRollback();
          this.addRollback();
          this.emergencyContact = false;
          this.btn_emergencyContact = 'Cancel';
        } else {
          this.updateRollback();
          this.addRollback();
        }
        break;
      }
      case ('password'): {
        if (this.btn_password == 'Change Password') {
          this.updateRollback();
          this.addRollback();
          this.password = false;
          this.btn_password = 'Cancel';
        } else {
          this.updateRollback();
          this.addRollback();
        }
        break;
      }
    }
  });
}

  // Opening and Closing Add Forms in View
  async addAction(formname: string) {
    const loader = await this.loadingCtrl.create({
      duration: 1000
    });
    loader.present();
    loader.onWillDismiss().then(() => {
    switch (formname) {
      case ('add_address'): {
        if (this.add_btn_Address == 'Add') {
          this.updateRollback();
          this.addRollback();
          this.add_address = false;
          this.add_btn_Address = 'Cancel'

        } else {
          this.updateRollback();
          this.addRollback();
        }
        break;
      }
      case ('add_email'): {
        if (this.add_btn_email == 'Add') {
          this.updateRollback();
          this.addRollback();
          this.add_email = false;
          this.add_btn_email = 'Cancel'

        } else {
          this.updateRollback();
          this.addRollback();
        }
        break;
      }
      case ('add_phone'): {
        if (this.add_btn_phone == 'Add') {
          this.updateRollback();
          this.addRollback();
          this.add_phone = false;
          this.add_btn_phone = 'Cancel'

        } else {
          this.updateRollback();
          this.addRollback();
        }
        break;
      }
      case ('add_emergencyInfo'): {
        if (this.add_btn_emergencyInfo == 'Add') {
          this.updateRollback();
          this.addRollback();
          this.add_emergencyInfo = false;
          this.add_btn_emergencyInfo = 'Cancel'

        } else {
          this.updateRollback();
          this.addRollback();
        }
        break;
      }
      case ('add_emergencyContact'): {
        if (this.add_btn_emergencyContact == 'Add') {
          this.updateRollback();
          this.addRollback();
          this.add_emergencyContact = false;
          this.add_btn_emergencyContact = 'Cancel'

        } else {
          this.updateRollback();
          this.addRollback();
        }
        break;
      }
    }
  });
  }
}
