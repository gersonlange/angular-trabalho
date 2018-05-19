import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasModule } from './pessoas/pessoas.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';


const config = {
    apiKey: "AIzaSyATw6wjfOgR2os0Azr-Cv5Ufxc7bOLjf9k",
    authDomain: "gerson-teste.firebaseapp.com",
    databaseURL: "https://gerson-teste.firebaseio.com",
    projectId: "gerson-teste",
    storageBucket: "gerson-teste.appspot.com",
    messagingSenderId: "112625939955"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule,
    PessoasModule,
    AppRoutingModule,
    
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
