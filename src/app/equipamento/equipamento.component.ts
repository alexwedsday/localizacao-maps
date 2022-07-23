import { Component, OnInit } from '@angular/core';
import { IStatusEquipamento } from './modelo';

@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.scss']
})
export class EquipamentoComponent  {

  stateOptions: any[];
  selectedStatus!: IStatusEquipamento;
  equipamento: IStatusEquipamento;
  value1: string = "Ativo";
  value2: number = 58151;
  value3: number = 58151;

  constructor() {
    this.equipamento = {status: ''};
  
    this.stateOptions = [
      {label: 'Ativo', value: 1},
      {label: 'Inativo', value: 2}
    ];
   }

   

  public toggle(value:number):void{
    this.equipamento.status = this.stateOptions[value - 1].label;
    console.log(this.equipamento.status);
    console.log(this.value1);
    console.log(value);
  }

}
