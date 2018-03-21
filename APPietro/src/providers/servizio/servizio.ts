import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oggetto } from '../../model/item';
import { of } from 'rxjs/observable/of';
/*
  Generated class for the ServizioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServizioProvider {

 ogg : Oggetto[];
  constructor() {
    this.ogg = [];
    console.log('Hello ServizioProvider Provider');
  }
 getOgg(){
   return of (this.ogg);
 }
 setOgg(o){
   this.ogg.push(o);
 }
}
