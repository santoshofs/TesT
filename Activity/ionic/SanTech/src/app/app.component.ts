import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateService } from '@ngx-translate/core';


// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { SantechPage } from '../pages/santech/santech';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SantechPage;

  pages: Array<{title: string, component: any}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public translate: TranslateService) {
    this.initializeApp();

    translate.addLangs(["en", "tamil"]);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|tamil/) ? browserLang : 'en');
    // platform.ready().then(() => {
    //     translate.addLangs(["en", "tamil"]);
    //     translate.setDefaultLang('en');
    //     let browserLang = translate.getBrowserLang();
    //     translate.use(browserLang.match(/en|tamil/) ? browserLang : 'en');
    // });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: SantechPage }   ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // openPage(page) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.nav.setRoot(page.component);
  // }
}
