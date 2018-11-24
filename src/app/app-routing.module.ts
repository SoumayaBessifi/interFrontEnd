import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrdinateurComponent} from './ordinateur/ordinateur.component';
import {AjoutOrdinateurComponent} from './ordinateur/ajout-ordinateur/ajout-ordinateur.component';
import {RouteurComponent} from './routeur/routeur.component';
import {AjoutRouteurComponent} from './routeur/ajout-routeur/ajout-routeur.component';
import {ImprimanteComponent} from './imprimante/imprimante.component';

const routes: Routes = [
    {
      path: 'ordinateurs',
      component: OrdinateurComponent,
    },
    {
      path: 'ajoutOrdi',
      component: AjoutOrdinateurComponent,
    },
    {
      path: 'routeurs',
      component: RouteurComponent,
    },
    {
      path: 'ajoutRouteur',
      component: AjoutRouteurComponent,
    },
    {
      path: 'imprimantes',
      component: ImprimanteComponent
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
