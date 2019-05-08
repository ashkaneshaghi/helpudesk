import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InternationalOfficeAppointmentPage } from './international-office-appointment.page';

const routes: Routes = [
  {
    path: '',
    component: InternationalOfficeAppointmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InternationalOfficeAppointmentPage]
})
export class InternationalOfficeAppointmentPageModule {}
