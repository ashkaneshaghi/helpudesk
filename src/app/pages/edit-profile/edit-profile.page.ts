import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  public decision: boolean = false;
  fileUrl: any = null;
  respData: any;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    ) {
      this.changeStatus();
    }

  ngOnInit() {
  }

  // Profile Progress Finishing
  
  changeStatus() {
    // TO-DO code to check Database for Profile Status will be here
    if(this.decision){
      this.decision = false;
    }
    else {
     this.decision = true;
    }
  }
  
  // Saving changes in Edit Profile
  async sendData() {
    const loader = await this.loadingCtrl.create({
      duration: 1000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        message: 'Your Data was Edited!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
      this.navCtrl.navigateForward('/dashboard');
    });
  }

}
