import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, AlertController } from 'ionic-angular';

import { SignupPage } from "../signup/signup";

import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginCredentials = { email: '', password: '' };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public userprovider: UserProvider,
    private alertCtrl: AlertController
  ) { }

  closeModal() {
    this.viewCtrl.dismiss();
  }
  registrationModal() {
    this.closeModal();
    let myModal = this.modalCtrl.create(SignupPage);
    myModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(loginCredentials) {
    console.log(loginCredentials.email);
    this.userprovider.login(loginCredentials).subscribe(
      response => {
        if (response['status'] == 'success') {
          console.log("success");
          console.log(response);
          sessionStorage.setItem('user_Name', response['user'].name);
          sessionStorage.setItem('user_Mail', response['user'].email);
          sessionStorage.setItem('user_ID', response['user'].id);
          sessionStorage.setItem('user_Phone', response['user'].phone);
          this.loginsuccessAlert();
          this.closeModal();
        }
        else {
          this.loginfailureAlert();
          console.log("Login Credentials does not match up");
        }
      },
      err => {
        console.log("failed");
      }
    )
  }
  loginsuccessAlert() {
    let alert = this.alertCtrl.create({
      title: 'Welcome Back 😍',
      buttons: ['OK']
    });
    alert.present();
  }
  loginfailureAlert() {
    let alert = this.alertCtrl.create({
      title: 'Login Failed',
      subTitle: 'Check user credentials.!',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
