import { Component, OnInit } from '@angular/core';
import { IStatusEquipamento } from './iequipamento';

@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.scss']
})
export class EquipamentoComponent implements OnInit {

  status: IStatusEquipamento[];
  selectedStatus!: IStatusEquipamento;

  value2: number = 58151;
  value3: number = 58151;

  constructor() {
    this.status = [
      {iStatus: 'Ativo'},
      {iStatus: 'Inatio'}
    ];
   }

  ngOnInit(): void {
  }

}
