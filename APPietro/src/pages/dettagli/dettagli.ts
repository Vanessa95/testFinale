import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Oggetto } from '../../model/item';

/**
 * Generated class for the DettagliPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dettagli',
  templateUrl: 'dettagli.html',
})
export class DettagliPage {

  item: Oggetto;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl = navCtrl;
    this.item = navParams.get('oggettoDaPassare');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DettagliPage');
  }

}
