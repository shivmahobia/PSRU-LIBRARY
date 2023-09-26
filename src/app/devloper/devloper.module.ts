import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevloperPageRoutingModule } from './devloper-routing.module';

import { DevloperPage } from './devloper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevloperPageRoutingModule
  ],
  declarations: [DevloperPage]
})
export class DevloperPageModule {}
