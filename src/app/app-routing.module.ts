import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'services', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'contact-us', loadChildren: './pages/contact-us/contact-us.module#ContactUsPageModule' },
  { path: 'faq', loadChildren: './pages/faq/faq.module#FaqPageModule' },
  { path: 'services/dashboard/progress-result', loadChildren: './pages/services/progress-result/progress-result.module#ProgressResultPageModule' },
  { path: 'appointments', loadChildren: './pages/appointments/appointments.module#AppointmentsPageModule' },
  { path: 'services/bank/appointment', loadChildren: './pages/services/bank-appointment/bank-appointment.module#BankAppointmentPageModule' },
  { path: 'services/city-registeration/appointment', loadChildren: './pages/services/city-registeration-appointment/city-registeration-appointment.module#CityRegisterationAppointmentPageModule' },
  { path: 'services/international-office/appointment', loadChildren: './pages/services/international-office-appointment/international-office-appointment.module#InternationalOfficeAppointmentPageModule' },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
