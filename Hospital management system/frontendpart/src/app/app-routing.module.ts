import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'angular-highcharts';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminComponent } from './admin/admin.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorComponent } from './doctor/doctor.component';
import { FinanceComponent } from './finance/finance.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Home4Component } from './home4/home4.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PatientComponent } from './patient/patient.component';
import { ReceptionComponent } from './reception/reception.component';
import { RegistrationComponent } from './registration/registration.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Sidebar4Component } from './sidebar4/sidebar4.component';
import { TopbarComponent } from './topbar/topbar.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  {path:"",redirectTo:"homepage",pathMatch:"full"},

  {path:"login",component:LoginComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"appointment",component:AppointmentComponent},
  {path:"patient",component:PatientComponent,
  children:[
    {path:"appointment",component:AppointmentComponent},
    {path:"sidebar",component:SidebarComponent},
    {path:"home1",component:Home1Component}
  ]},
  {path:"reception",component:ReceptionComponent},
  
  {path:"doctor",component:DoctorComponent,
  children:[
    {path:"appointment",component:AppointmentComponent},
  ]

  },
  {path:"topbar",component:TopbarComponent},
{path:"finance",component:FinanceComponent,
children:[
]},
{path:"notfound",component:NotfoundComponent},
 {path:"admin",component:AdminComponent,
 children:[
  {path:"sidebar4",component:Sidebar4Component},
  {path:"home4",component:Home4Component},
  {path:"adduser",component:AdduserComponent},
  {path:"docter",component:DoctorComponent},
  {path:"users",component:UsersComponent},
 ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
          ChartModule
  ]
})
export class AppRoutingModule { }
