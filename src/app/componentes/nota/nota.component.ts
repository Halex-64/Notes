import { Component, Input } from '@angular/core';
import { Nota } from '../nota';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent {

  @Input() nota:Nota = {
      id: 0,
      titulo: "",
      conteudo: "",
      tipo:"tipo1",
  }
}

function tamanhoNota(this: any):string {
  if(this.nota.conteudo.length >= 150){
    return 'nota-g'
  }
    return 'nota'
  }


