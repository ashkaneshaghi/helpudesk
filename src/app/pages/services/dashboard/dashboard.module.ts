import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

//import progress circle

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 4,
      maxPercent: 1000,
      outerStrokeColor: "#a2bb17",
      innerStrokeColor: "#0079bc",
      animationDuration: 1100,
      animation: true,
      clockwise: true,
    })

  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
