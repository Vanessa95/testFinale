import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Oggetto } from '../../model/item';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  oggetto : Oggetto;

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }
  salva(nome,prestatario,data,descrizione){
    this.oggetto = {
      nome: nome,
      nomePrestatario: prestatario,
      data : data,
      descrizione : descrizione
    };
    //this.navCtrl.parent.select(0);
    this.navCtrl.push(HomePage,{
      oggetto: this.oggetto
    });
  }
}
