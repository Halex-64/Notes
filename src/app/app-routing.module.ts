import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorpoComponent } from './componentes/corpo/corpo.component';
import { AdicionarComponent } from './componentes/adicionar/adicionar.component';
import { ExcluirNotaComponent } from './componentes/excluir-nota/excluir-nota.component';

const routes: Routes = [
  {
    path: 'home',
    component: CorpoComponent,
  },
  {
    path: 'criar-nota',
    component: AdicionarComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'excluir-nota/:id',
    component: ExcluirNotaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
