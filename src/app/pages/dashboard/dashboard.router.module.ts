import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: '../services/dashboard/dashboard.module#DashboardPageModule'
          }
        ]
      },
      {
        path: 'generalinfo',
        children: [
          {
            path: '',
            loadChildren: '../services/generalinfo/generalinfo.module#GeneralinfoPageModule'
          }
        ]
      },
      {
        path: 'city-registeration',
        children: [
          {
            path: '',
            loadChildren: '../services/city-registeration/city-registeration.module#CityRegisterationPageModule'
          }
        ]
      },
      {
        path: 'accommodation',
        children: [
          {
            path: '',
            loadChildren: '../services/accommodation/accommodation.module#AccommodationPageModule'
          }
        ]
      },
      {
        path: 'enrollment',
        children: [
          {
            path: '',
            loadChildren: '../services/enrollment/enrollment.module#EnrollmentPageModule'
          }
        ]
      },
      {
        path: 'student-card',
        children: [
          {
            path: '',
            loadChildren: '../services/student-card/student-card.module#StudentCardPageModule'
          }
        ]
      },
      {
        path: 'semester-ticket',
        children: [
          {
            path: '',
            loadChildren: '../services/semester-ticket/semester-ticket.module#SemesterTicketPageModule'
          }
        ]
      },
      {
        path: 'wlan-access',
        children: [
          {
            path: '',
            loadChildren: '../services/wlan-access/wlan-access.module#WlanAccessPageModule'
          }
        ]
      },
      {
        path: 'bank',
        children: [
          {
            path: '',
            loadChildren: '../services/bank/bank.module#BankPageModule'
          }
        ]
      },
      {
        path: 'international-office',
        children: [
          {
            path: '',
            loadChildren: '../services/international-office/international-office.module#InternationalOfficePageModule'
          }
        ]
      },
      {
        path: 'code-of-conduct',
        children: [
          {
            path: '',
            loadChildren: '../services/code-of-conduct/code-of-conduct.module#CodeOfConductPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/services/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/services/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule {}
