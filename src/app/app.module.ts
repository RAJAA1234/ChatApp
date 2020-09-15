import { LoginComponent } from './componnets/login/login.component';
import { RegisterComponent } from './componnets/register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule } from '@angular/fire';

import{AngularFirestoreModule} from '@angular/fire/firestore';

import { ChatsComponent } from './componnets/chats/chats.component';
import { NavbarComponent } from './componnets/navbar/navbar.component';

import { environment } from 'src/environments/environment';
import {FormsModule } from'@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';


@NgModule({
  declarations: [
    AppComponent,
    ChatsComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent

   
  ],
  imports: [
    BrowserModule,
  
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
    ,AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
 
    FlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
