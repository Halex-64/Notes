import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent {

  @Input() nota = {
      titulo: "Titulo",
      conteudo: "Conteudo Teste",
      tipo:"tipo1",
  }
}

function tamanhoNota(this: any):string {
  if(this.nota.conteudo.length >= 150){
    return 'nota-g'
  }
    return 'nota'
  }


