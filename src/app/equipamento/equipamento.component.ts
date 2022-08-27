import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Localizacao } from '../shared/modelo/localizacao';
import { Equipamento } from './modelo';
import { EquipamentoService } from './servico';

@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.scss']
})
export class EquipamentoComponent implements OnInit {
 
  equipamentos:Equipamento[] = [];
  constructor(private router:Router, private servico:EquipamentoService){}
  
  ngOnInit(): void {
   this.populateEquipamento();
  }

  public goToAdd():void{
   this.router.navigate(['add-equipamento']);
  }

  public populateEquipamento(){
    this.servico.listarEquipamentos().subscribe({
      next: async(response:Equipamento[])=> this.equipamentos = response,
      error: (error) => console.log(error)
    });
  }
}
