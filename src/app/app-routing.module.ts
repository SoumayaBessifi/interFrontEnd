import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrdinateurComponent} from './ordinateur/ordinateur.component';
import {AjoutOrdinateurComponent} from './ordinateur/ajout-ordinateur/ajout-ordinateur.component';

const routes: Routes = [
  {
    path: 'ordinateurs',
    component: OrdinateurComponent,
  },
  {
    path: 'ajoutOrdi',
    component: AjoutOrdinateurComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
