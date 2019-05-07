import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CityRegisterationAppointmentPage } from './city-registeration-appointment.page';

const routes: Routes = [
  {
    path: '',
    component: CityRegisterationAppointmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CityRegisterationAppointmentPage]
})
export class CityRegisterationAppointmentPageModule {}
