import { Component } from '@angular/core';
import { NotaService } from '../nota.service';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent {

  constructor(private service: NotaService) { }

  ngOnInit(): void {
    this.service.listar()
  }


    listaNotas = [
      {
        titulo: "Titulo",
        conteudo: "Conteudo",
        tipo: "tipo1",
      }
    ];
}
