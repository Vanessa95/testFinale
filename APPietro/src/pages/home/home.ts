import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DettagliPage } from '../dettagli/dettagli';
import { Item } from '../../model/item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[];
  constructor(public navCtrl: NavController) {
    this.items =[];
    for(let i=0; i < 6; i++){
      this.items.push({
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
