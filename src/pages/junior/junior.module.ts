import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JuniorPage } from './junior';

@NgModule({
  declarations: [
    JuniorPage,
  ],
  imports: [
    IonicPageModule.forChild(JuniorPage),
  ],
})
export class JuniorPageModule {}
