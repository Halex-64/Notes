import { Component } from '@angular/core';
import { NotaService } from '../nota.service';
import { Nota } from '../nota';


@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent {
criarNota() {
throw new Error('Method not implemented.');
}
  constructor( private service: NotaService ){}
  nota: Nota = {
    titulo: '',
    conteudo: '',
    tipo: 'tipo1'
  }
}


