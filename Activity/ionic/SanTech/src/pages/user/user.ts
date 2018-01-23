import { Component } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams, AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  userName: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public Nav: Nav,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    this.userName = (window.sessionStorage.getItem('user_Name'));
  }

  signOut() {
    let alert = this.alertCtrl.create({
      title: 'We Will Miss You !',
      message: 'Are you sure to Sign out ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Sign Out',
          handler: () => {
            sessionStorage.clear();
            this.Nav.setRoot(HomePage);
          }
        }
      ]
    });
    alert.present();
  }

}
