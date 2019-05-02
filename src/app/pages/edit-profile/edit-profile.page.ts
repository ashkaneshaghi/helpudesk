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
  private onUpdateEmergencyContactForm: FormGroup
  private onAddEmergencyContactForm: FormGroup

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public actionSheetController: ActionSheetController,
    private http: HttpClient
  ) {
    // Reading Lists From Local Files - Country
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


    this.changeStatus();
    this.initializingTables();

  }

  ngOnInit() {

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

  }

  // Selectable Lists
  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
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

  // Saving changes in Edit Profile
  async updateData(formname: string) {
    const loader = await this.loadingCtrl.create({
      duration: 1000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      switch (formname) {
        case ('generalInfo'): {
          this.generalInfo = true;
          this.address = true;
          this.email = true;
          this.phone = true;
          this.emergencyInfo = true;
          this.emergencyContact = true;
          this.password = true;
          this.btn_General = 'Edit';
          //
          // Storing Data for General Info // CODE
          const toast = await this.toastCtrl.create({
            showCloseButton: true,
            message: 'Your Information Updated!!!',
            duration: 3000,
            position: 'bottom'
          });

          toast.present();
          this.profileChecker = true;
        }
      }
    });
  }

  async saveData(formname: string) {
    const loader = await this.loadingCtrl.create({
      duration: 1000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      switch (formname) {
        case ('generalInfo'): {
          this.generalInfo = true;
          this.address = true;
          this.email = true;
          this.phone = true;
          this.emergencyInfo = true;
          this.emergencyContact = true;
          this.password = true;
          this.btn_General = 'Edit';
          //
          // Storing Data for General Info // CODE
          const toast = await this.toastCtrl.create({
            showCloseButton: true,
            message: 'Your Information Updated!!!',
            duration: 3000,
            position: 'bottom'
          });

          toast.present();
          this.profileChecker = true;
        }
      }
    });
  }

  // Functions for Hideing and Showing tables of forms 
  updateRollback() {
    this.generalInfo = this.address = this.email = this.phone = this.emergencyInfo = this.emergencyContact = this.password = true;
    this.btn_General = this.btn_address = this.btn_email = this.btn_phone = this.btn_password = this.btn_emergencyInfo = this.btn_emergencyContact = 'Edit';
  }

  addRollback() {
    this.add_address = this.add_phone = this.add_email = this.add_emergencyContact = this.add_emergencyInfo = true;
    this.add_btn_Address = this.add_btn_email = this.add_btn_phone = this.add_btn_emergencyInfo = this.add_btn_emergencyContact = 'Add';
  }

  initializingTables() {
    // Edit Initial Activating/Deactivating
    this.btn_General = 'Edit';
    this.btn_address = 'Edit';
    this.btn_email = 'Edit';
    this.btn_phone = 'Edit';
    this.btn_password = 'Edit';
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
    }
  });
}

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
