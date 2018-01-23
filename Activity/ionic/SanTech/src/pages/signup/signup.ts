import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, AlertController } from 'ionic-angular';

import { LoginPage } from '../login/login';

import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupCredentials = { name: '', email: '', password: '', phone: '' };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public userprovider: UserProvider,
    private alertCtrl: AlertController) {
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
  loginModal() {
    this.closeModal();
    let myModal = this.modalCtrl.create(LoginPage);
    myModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signup(signupCredentials) {
    console.log(signupCredentials);
    this.userprovider.signup(signupCredentials).subscribe(
      response => {
        if (response['status'] == 'success') {
          console.log("success");
          console.log(response);
          sessionStorage.setItem('user_Name', response['user'].name);
          sessionStorage.setItem('user_Mail', response['user'].email);
          sessionStorage.setItem('user_ID', response['user'].id);
          sessionStorage.setItem('user_Phone', response['user'].phone);
          this.signupsuccessAlert();
          this.closeModal();
        }
        else {
          this.signupfailureAlert();
        }
      },
      err => {
        this.signupfailureAlert();
        console.log("server failed");
      }
    )
  }
  signupsuccessAlert() {
    let alert = this.alertCtrl.create({
      title: 'Welcome 😍',
      buttons: ['OK']
    });
    alert.present();
  }
  signupfailureAlert() {
    let alert = this.alertCtrl.create({
      title: 'Something went wrong.!',
      subTitle: 'Please try again later',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
