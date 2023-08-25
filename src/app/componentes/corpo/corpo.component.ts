import { Component } from '@angular/core';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent {
    listaNotas = [
      {
        titulo: "Titulo",
        conteudo: "Conteudo",
        tipo: "2",
      }
    ];
}
