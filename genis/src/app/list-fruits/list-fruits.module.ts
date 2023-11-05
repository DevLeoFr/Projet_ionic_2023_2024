import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListFruitsPageRoutingModule } from './list-fruits-routing.module';

import { ListFruitsPage } from './list-fruits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListFruitsPageRoutingModule
  ],
  declarations: [ListFruitsPage]
})
export class ListFruitsPageModule {}
