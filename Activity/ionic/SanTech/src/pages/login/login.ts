import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, AlertController  } from 'ionic-angular';

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

  userName: string;
  loginCredentials = { email: '', password: '' };
  user_Name: any;
  user_Mail: any;
  user_Id: any;
  user_Phone: any;

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
  logForm(form) {
    console.log(form.value)
  }

  login(loginCredentials) {
    console.log(loginCredentials.email);
    this.userprovider.login(loginCredentials).subscribe(
      response => {
        if (response['status'] == 'success') {
          // this.preSignin = !this.preSignin;
          // this.postSignin = !this.postSignin;
          console.log("success");
          console.log(response);
          this.user_Name = response['user'].name;
          this.user_Mail = response['user'].email;
          this.user_Id = response['user'].id;
          this.user_Phone = response['user'].phone;
          sessionStorage.setItem('user_Name', this.user_Name);
          sessionStorage.setItem('user_Mail', this.user_Mail);
          sessionStorage.setItem('user_ID', this.user_Id);
          sessionStorage.setItem('user_Phone', this.user_Phone);
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
  loginfailureAlert() {
  let alert = this.alertCtrl.create({
    title: 'Login Failed',
    subTitle: 'Check user credentials.!',
    buttons: ['Dismiss']
  });
  alert.present();
}
}
