import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {OrdiserviceService} from '../../Service/ordiservice.service';

@Component({
  selector: 'app-ajout-routeur',
  templateUrl: './ajout-routeur.component.html',
  styleUrls: ['./ajout-routeur.component.css']
})
export class AjoutRouteurComponent implements OnInit {
  routeur: Routeur;

  constructor(private ordiservice: OrdiserviceService) {
  }

  ngOnInit() {
    this.routeur = {
      numserie: '',
      marque: '',
      type: '',
      deffectueux: false,
      datemisenservice: new Date(),
    };
  }
  submit(form: NgForm) {
    console.log(form.submitted);
    this.ordiservice.create(form.value).subscribe((data) => {
      console.log(data);
    });
  }
}
