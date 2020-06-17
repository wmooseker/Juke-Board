//core angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//shared module
import {SharedModule} from "./shared/shared.module";

//import env vars for firebase config
import {environment} from 'src/environments/environment';


//Angular Fire Imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { from } from 'rxjs';
//components
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UserprofileComponent,
    HomepageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //initialization
    AngularFirestoreModule, //firestore
    AngularFireAuthModule, // authentication
    AngularFireStorageModule, BrowserAnimationsModule // storage

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
