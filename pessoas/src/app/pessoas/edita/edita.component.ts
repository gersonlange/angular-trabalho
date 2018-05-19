import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { PessoasService } from '../pessoas.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edita',
  templateUrl: './edita.component.html',
  styleUrls: ['./edita.component.css']
})
export class EditaComponent implements OnInit {

  item = {};
  id: any;

  constructor(
    private pessoasService: PessoasService,
    private route: ActivatedRoute, 
    private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.carrega(params['id']);
    })
  }

  carrega(id: String) {
    this.id = id;
    if (this.id === "novo") {
      return;
    }
    this.pessoasService.get(id).valueChanges().subscribe(
      obj => {
        this.item = obj
      }
    );
  }

  onSubmit(form: NgForm) {
    if (this.id === "novo") {
      this.pessoasService.add(this.item);
    }
    else {
      this.pessoasService.update(this.id, this.item);
    }
    this.router.navigate(['../..'], { relativeTo: this.route })
  }

}
