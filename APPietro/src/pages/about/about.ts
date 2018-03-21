import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Oggetto } from '../../model/item';
import { HomePage } from '../home/home';
//import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  //base64Image: any;
  //photos: any;
  oggetto : Oggetto;

  constructor(public navCtrl: NavController, ) {
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
