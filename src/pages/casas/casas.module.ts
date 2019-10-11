import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CasasPage } from './casas';

@NgModule({
  declarations: [
    CasasPage,
  ],
  imports: [
    IonicPageModule.forChild(CasasPage), 
  ],
})
export class CasasPageModule {}
