import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BieskesListComponent } from './pages/bieskes-list/bieskes-list.component';
import { BieskeOverviewComponent } from './pages/bieske-overview/bieske-overview.component';
import { BieskeComponent } from './components/bieske/bieske.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MainnavComponent } from './components/mainnav/mainnav.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';

import { MatIconModule } from '@angular/material/icon';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { MainbodyComponent } from './components/mainbody/mainbody.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfileComponent,
    BieskeOverviewComponent,
    BieskesListComponent,
    BieskeComponent,
    HeaderComponent,
    MainnavComponent,
    FooterComponent,
    LoginRegisterComponent,
    MainbodyComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
