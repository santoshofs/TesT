import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { SignupPage } from "../signup/signup";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public modalCtrl: ModalController) {
  }
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
}
