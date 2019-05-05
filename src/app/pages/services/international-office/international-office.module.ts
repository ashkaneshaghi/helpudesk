import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InternationalOfficePage } from './international-office.page';

const routes: Routes = [
  {
    path: '',
    component: InternationalOfficePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InternationalOfficePage]
})
export class InternationalOfficePageModule {}
