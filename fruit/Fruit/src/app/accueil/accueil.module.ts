import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilPageRoutingModule } from './accueil-routing.module';

import { AccueilPage } from './accueil.page';
// import { ActivatedRouteSnapshot } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilPageRoutingModule,
    IonicModule.forRoot()
  ],
  // providers:[ActivatedRouteSnapshot]
  // schemas:[CUSTOM_ELEMENTS_SCHEMA],

  declarations: [AccueilPage]
})
export class AccueilPageModule {}
