import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Oggetto } from '../../model/item';
import { HomePage } from '../home/home';
import { NativeStorage } from '@ionic-native/native-storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ServizioProvider } from '../../providers/servizio/servizio';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  oggetto : Oggetto;
  oggetti: Oggetto[];
  base64Image;

  constructor(public navCtrl: NavController, 
              private nativeStorage : NativeStorage, 
              public servizioProvider :ServizioProvider,
              private camera:Camera) {
    this.navCtrl = navCtrl;
    this.oggetti = [];
    this.oggetto = new Oggetto();
  }
  salva(nome,prestatario,data,descrizione, scelta){
    this.oggetto = {
      nome: nome,
      nomePrestatario: prestatario,
      data : data,
      descrizione : descrizione,
      scelta : scelta
    };
    this.servizioProvider.setOgg(this.oggetto);
    this.navCtrl.push(HomePage);
  }
  ionViewDidLoad(){
    this.servizioProvider.getOgg().subscribe((ciao)=>{
      this.oggetti= ciao;
    });
  }
  takePhoto(){
    const options: CameraOptions ={
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType:1
    }
    this.camera.getPicture(options).then((imageData)=>{
      this.base64Image = "data:image/jpeg;base64," + imageData;
      console.log(this.base64Image);
    }, (err)=>{
      console.log(err);
    });
  }
}
