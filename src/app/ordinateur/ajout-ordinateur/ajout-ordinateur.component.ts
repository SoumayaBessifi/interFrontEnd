import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {OrdiserviceService} from '../../Service/ordiservice.service';

@Component({
  selector: 'app-ajout-ordinateur',
  templateUrl: './ajout-ordinateur.component.html',
  styleUrls: ['./ajout-ordinateur.component.css']
})
export class AjoutOrdinateurComponent implements OnInit {
  ordinateur: Ordinateur;

  constructor(private ordiservice: OrdiserviceService) {
  }

  ngOnInit() {
   /* this.ordinateur = {
      numserie: '',
      marque: '',
      designation: '',
    deffectueux: false,
    datemisenservice: new Date(),
    fingarantie: new Date(),
    utilisateur: new class implements Utilisateurs {
      departement: '',
      email: '',
      matricule: '',
      mdp: '',
      nom: '',
      prenom: '',
    },
    memoire: '',
    processeur: '',
    ecran: false,
    nbrecran: 0,
    UC: false,
    clavier: false,
    type: 'Ordinateur',
    sysexp: ''
    };*/
  }

  submit(form: NgForm) {
    console.log(form.submitted);
    this.ordiservice.create(form.value).subscribe((data) => {
      console.log(data);
    });
  }

}
