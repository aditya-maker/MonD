import {  MentorAuthGuard } from './mentor-auth-guard.service';
import { ProposalsService } from './proposals.service';

import {  UserAuthGuard } from './user-auth-guard.service';

import { MentorService } from './mentor.service';
import { TechnologyService } from './technology.service';
import {  AdminAuthGuard } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth-guard.service';

import { AuthService } from './auth.service';

import { RouterModule, CanActivate } from '@angular/router';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { MentorsComponent } from './mentors/mentors.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { MentorSignupComponent } from './mentor-signup/mentor-signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { MyproposalsComponent } from './myproposals/myproposals.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    MentorsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    TrainingsComponent,
    MentorSignupComponent,
    LoginComponent,
    MentorListComponent,
    MyproposalsComponent,
    SignUpPageComponent,
    UserSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomFormsModule,
    RouterModule.forRoot([
      { path: '', component: MentorListComponent, canActivate:[UserAuthGuard] },
      { path: 'home', component: HomeComponent },
      { path: 'mentor/myproposals',component:MyproposalsComponent, canActivate:[MentorAuthGuard]},
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'login' , component: LoginComponent },
      { path: 'signUp' , component: SignUpPageComponent }, 
      { path: 'user/signUp', component:UserSignupComponent },
      { path: 'mentor/signUp', component: MentorSignupComponent },

      { path: 'my/trainings', component: TrainingsComponent, canActivate: [AuthGuard]},

      { path: 'admin/mentors', component: MentorsComponent, canActivate: [AuthGuard, AdminAuthGuard]},
    ]),
    

  ],
  providers: [
    AuthService,
    AuthGuard,
    UserAuthGuard,
    UserService,
    AdminAuthGuard,
    TechnologyService,
    ProposalsService,
    MentorAuthGuard
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
