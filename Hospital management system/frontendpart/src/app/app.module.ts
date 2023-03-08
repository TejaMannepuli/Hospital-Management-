import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { Home1Component } from './home1/home1.component';
import { ChartModule } from 'angular-highcharts';
import { RegistrationComponent } from './registration/registration.component';
import { ReceptionComponent } from './reception/reception.component';
import { DoctorComponent } from './doctor/doctor.component';
import { TopbarComponent } from './topbar/topbar.component';
import { Home2Component } from './home2/home2.component';
import { FinanceComponent } from './finance/finance.component';
import { AdminComponent } from './admin/admin.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { Home3Component } from './home3/home3.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Home4Component } from './home4/home4.component';
import { Sidebar4Component } from './sidebar4/sidebar4.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UsersComponent } from './users/users.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PatientComponent,
    SidebarComponent,
    AppointmentComponent,
    Home1Component,
    RegistrationComponent,
    ReceptionComponent,
    DoctorComponent,
    TopbarComponent,
    Home2Component,
    FinanceComponent,
    AdminComponent,
    Sidebar2Component,
    Home3Component,
    NotfoundComponent,
    Home4Component,
    Sidebar4Component,
    AdduserComponent,
    UsersComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
