import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public modalCtrl: ModalController) {
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

}
