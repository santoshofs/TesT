import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FlightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flight',
  templateUrl: 'flight.html',
})
export class FlightPage {

  today: any = new Date();
  cities = ['CHENNAI', 'DELHI', 'MUMBAI', 'KOLKATA'];
  searchCredentials = { from: '', to: '', date: '' };
  availableFlights: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightPage');
  }

}
