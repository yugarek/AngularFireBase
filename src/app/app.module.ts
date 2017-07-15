import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// FireBase
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import {firebase} from "../config/firebase.config";

//componentes
import { AppComponent } from './app.component';
import { RegistroviewComponent } from './registroview/registroview.component';
import { HeaderComponent } from './header/header.component';
import { RegistroaddComponent } from './registroadd/registroadd.component';

//Routes
import {app_routing} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    RegistroviewComponent,
    HeaderComponent,
    RegistroaddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
