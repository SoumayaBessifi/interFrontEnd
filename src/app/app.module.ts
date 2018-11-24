import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { OrdinateurComponent } from './ordinateur/ordinateur.component';
import { AjoutOrdinateurComponent } from './ordinateur/ajout-ordinateur/ajout-ordinateur.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {OrdiserviceService} from './Service/ordiservice.service';
import { RouteurComponent } from './routeur/routeur.component';
import { AjoutRouteurComponent } from './routeur/ajout-routeur/ajout-routeur.component';
import { ImprimanteComponent } from './imprimante/imprimante.component';
import { AjoutimprimanteComponent } from './imprimante/ajoutimprimante/ajoutimprimante.component';
@NgModule({
  declarations: [
    AppComponent,
    OrdinateurComponent,
    AjoutOrdinateurComponent,
    RouteurComponent,
    AjoutRouteurComponent,
    ImprimanteComponent,
    AjoutimprimanteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OrdiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
