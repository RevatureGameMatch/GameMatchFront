import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FilterPipe} from './components/create-room/filter.pipe'

import { AppComponent } from './app.component';
import { AboutG2GComponent } from './components/about-g2-g/about-g2-g.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { ViewRoomsComponent } from './components/view-rooms/view-rooms.component';
import { SurveysComponent } from './components/surveys/surveys.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutG2GComponent,
    CreateAccountComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    CreateRoomComponent,
    ViewRoomsComponent,
    SurveysComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
