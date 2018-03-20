import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DettagliPage } from './dettagli';

@NgModule({
  declarations: [
    DettagliPage,
  ],
  imports: [
    IonicPageModule.forChild(DettagliPage),
  ],
})
export class DettagliPageModule {}
