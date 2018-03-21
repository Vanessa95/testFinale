import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DettagliPage } from '../dettagli/dettagli';
import { Oggetto } from '../../model/item';
import { AboutPage } from '../about/about';
import { NativeStorage } from '@ionic-native/native-storage';
import { ServizioProvider } from '../../providers/servizio/servizio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  oggetti : Oggetto[]=[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private nativeStorage : NativeStorage,
              public servizioProvider : ServizioProvider) {
      this.navCtrl = navCtrl;
      if(navParams.get('oggetto')!=null && navParams.get('oggetto')!=undefined)
        this.oggetti.push(navParams.get('oggetto'));
  }
  ionViewDidLoad(){
    //  this.nativeStorage.getItem('oggetti').then(oggetti => this.oggetti = oggetti);
      this.servizioProvider.getOgg().subscribe((ciao)=>{
      this.oggetti= ciao;
    console.log(ciao);
      });
  }
  restituito(item){
    item.scelta = true;
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
    mancante(item){

    }
}
