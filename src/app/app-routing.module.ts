import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipamentoComponent } from './equipamento';
import { AddEquipamentoComponent } from './equipamento/add-equipamento/add-equipamento.component';

const routes: Routes = [
  {
    path: '',
    component: EquipamentoComponent 

  },
  {
    path: 'add-equipamento',
    component: AddEquipamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
