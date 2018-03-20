import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[];
  constructor(public navCtrl: NavController) {
    this.items =[];
    for(let i=0; i< 10; i++){
      this.items.push({
        text: "elemento" +1,
        id :i
      });

    } 
  }
  inserisci(item){
    alert(item.text);
  }

}
