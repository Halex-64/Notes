import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NotaService } from '../nota.service';
import { Nota } from '../nota';


@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent {
  constructor( private service: NotaService, private router:Router ){}
  nota: Nota = {
    titulo: '',
    conteudo: '',
    tipo: 'tipo1'
  }
  criarNota() {
    this.service.criar(this.nota).subscribe()
   }
}


