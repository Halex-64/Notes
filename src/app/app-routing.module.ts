import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorpoComponent } from './componentes/corpo/corpo.component';
import { AdicionarComponent } from './componentes/adicionar/adicionar.component';

const routes: Routes = [
  {
    path: 'home',
    component: CorpoComponent
  },
  {
    path: 'criar-nota',
    component: AdicionarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
