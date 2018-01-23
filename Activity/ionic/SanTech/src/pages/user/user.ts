import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  userName : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    this.userName = (window.sessionStorage.getItem('user_Name'));
  }

  signOut(){
    sessionStorage.clear();
    // this.preSignin = !this.preSignin;
    // this.postSignin = !this.postSignin;
    // alert(this.translate.instant('We_Miss_You'));
    // if(this.route.url == "/santech/user"){
    //   this.route.navigate(['santech/home']);
    // }
  }

}
