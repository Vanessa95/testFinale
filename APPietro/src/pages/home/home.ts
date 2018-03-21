import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DettagliPage } from '../dettagli/dettagli';
import { Oggetto } from '../../model/item';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  oggetti : Oggetto[]=[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.navCtrl = navCtrl;
      if(navParams.get('oggetto')!=null && navParams.get('oggetto')!=undefined)
        this.oggetti.push(navParams.get('oggetto'));
  }
  dettaglio(item){
    this.navCtrl.push(DettagliPage,{
      oggettoDaPassare : item
    })
  }
  modifica(item){
    this.navCtrl.push(AboutPage,{
    })
  }
  popView(){
    this.navCtrl.pop();
  }
}
