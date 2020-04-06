import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutG2GComponent } from './components/about-g2-g/about-g2-g.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JoinRoomComponent } from './components/join-room/join-room.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { SurveysComponent } from './components/surveys/surveys.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutG2GComponent },
  { path: 'signup', component: CreateAccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'join-room', component: JoinRoomComponent },
  { path: 'create-room', component: CreateRoomComponent },
  { path: 'surveys', component: SurveysComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
