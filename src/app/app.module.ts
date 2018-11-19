import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { OrdinateurComponent } from './ordinateur/ordinateur.component';
import { AjoutOrdinateurComponent } from './ordinateur/ajout-ordinateur/ajout-ordinateur.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {OrdiserviceService} from './Service/ordiservice.service';
@NgModule({
  declarations: [
    AppComponent,
    OrdinateurComponent,
    AjoutOrdinateurComponent,
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
