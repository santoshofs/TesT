import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, Platform, ModalController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { LoginPage } from '../login/login';
import { UserPage } from '../user/user';


/**
 * Generated class for the SantechPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-santech',
  templateUrl: 'santech.html',
})
export class SantechPage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  userName: string;

  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public modalCtrl: ModalController,
    public translate: TranslateService) {

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|tamil/) ? browserLang : 'en');

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  openModal() {
    let myModal = this.modalCtrl.create(LoginPage);
    myModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SantechPage');
  }

  userAccount() {
    this.userName = (sessionStorage.getItem('user_Name'));
    if (this.userName != null) {
      this.nav.setRoot(UserPage);
    }
    else {
      this.openModal();
    }
  }

}
