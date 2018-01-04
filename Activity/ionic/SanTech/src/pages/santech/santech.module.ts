import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SantechPage } from './santech';

@NgModule({
  declarations: [
    SantechPage,
  ],
  imports: [
    IonicPageModule.forChild(SantechPage),
  ],
})
export class SantechPageModule {}
