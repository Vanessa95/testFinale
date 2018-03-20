import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DettagliPage } from '../dettagli/dettagli';
import { Oggetto } from '../../model/item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  oggetto : Oggetto[]=[];
  ogg: any[];
  
  constructor(public navCtrl: NavController) {
    this.oggetto = [{
      nome:'Cuscino',
      nomePrestatario:'Franco',
      data : '22-02-1995',
      descrizione :'cusciono bello',
    }]
  
    this.ogg =[];
    for(let i=0; i < 6; i++){
      this.ogg.push({
        text: "elemento " +i,
        id : i
      });
    } 
  }
  dettaglio(item){
    this.navCtrl.push(DettagliPage,{
      item : item
    })
  }
}
