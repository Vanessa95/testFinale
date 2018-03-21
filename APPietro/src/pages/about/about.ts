import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Oggetto } from '../../model/item';
import { HomePage } from '../home/home';
import { NativeStorage } from '@ionic-native/native-storage';
//import { Camera, CameraOptions } from '@ionic-native/camera';
import { ServizioProvider } from '../../providers/servizio/servizio';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  //base64Image: any;
  //photos: any;
  oggetto : Oggetto;
  oggetti: Oggetto[];

  constructor(public navCtrl: NavController, private nativeStorage : NativeStorage, public servizioProvider :ServizioProvider) {
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
    //this.oggetti.push(this.oggetto);
    this.servizioProvider.setOgg(this.oggetto);
    this.nativeStorage.setItem('oggetti', this.oggetti);
    
    //this.navCtrl.parent.select(0);
    this.navCtrl.push(HomePage /* ,{ oggetto: this.oggetto} */);
  }
  ionViewDidLoad(){
    this.servizioProvider.getOgg().subscribe((ciao)=>{
      this.oggetti= ciao;
    });
  }
  // takePhoto(){
  //   const options: CameraOptions ={
  //     quality: 50,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     sourceType:0
  //   }
  //   this.camera.getPicture(options).then((imageData)=>{
  //     let base64Image = "data:image/jpeg;base64," + imageData;
  //     this.photos.push(this.base64Image);
  //     this.photos.reverse();
  //   }, (err)=>{
  //     console.log(err);
  //   });
  // }
  // deletePhoto(index){
  //   this.photos.splice(index, 1);
  // }
}
