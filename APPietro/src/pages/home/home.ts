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
  colore : string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private nativeStorage : NativeStorage,
              public servizioProvider : ServizioProvider) {
      this.navCtrl = navCtrl;
      if(navParams.get('oggetto')!=null && navParams.get('oggetto')!=undefined)
        this.oggetti.push(navParams.get('oggetto'));
        this.colore= 'light';
  }
  ionViewDidLoad(){
      this.servizioProvider.getOgg().subscribe((ciao)=>{
      this.oggetti = ciao;
      console.log(this.oggetti);
      });
  }
  restituito(item:Oggetto){
    item.scelta ? item.scelta = false : item.scelta =true;
    //item.scelta = true;
   // this.colore = 'secondary';

  }
  mancante(item: Oggetto){
    item.scelta ? item.scelta = false : item.scelta =true;
    //item.scelta = false;
    //this.colore = 'danger';
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
