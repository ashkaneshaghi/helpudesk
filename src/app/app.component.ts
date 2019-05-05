import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController
    ) {
      this.appPages = [
        {
          title: 'Dashboard',
          url: '/services',
          direct: 'root',
          icon: 'tv'
        },
        {
          title: 'About',
          url: '/about',
          direct: 'forward',
          icon: 'information-circle-outline'
        },
  
        {
          title: 'Contact Us',
          url: '/contact-us',
          direct: 'forward',
          icon: 'paper'
        },
  
        {
          title: 'FAQs',
          url: '/faq',
          direct: 'forward',
          icon: 'chatboxes'
        }
      ];
  
      this.initializeApp();
    }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // Logout
  logout() {
    this.navCtrl.navigateRoot('');
  }

  // Go to Edit Profile
  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile')
  }
}
