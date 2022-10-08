import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipamento } from './modelo';
import { EquipamentoService } from './servico';



@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.scss'],
})
export class EquipamentoComponent implements OnInit {
  equipamentos: Equipamento[] = [];
  loadMap:boolean = false;
  
  constructor(public router: Router, public servico: EquipamentoService) {
    this.populateEquipamento();
  }



  ngOnInit(): void {
  
  }

  public goToAdd(): void {
    this.router.navigate(['add-equipamento']);
  }

  

  public populateEquipamento():void {
    this.servico.listarEquipamentos().subscribe({
      next: (response: Equipamento[]) => {
        this.equipamentos = response;
        console.log(this.equipamentos);
        this.loadMap = true;
      },
      error: (error) => console.log(error),
    });
  }
}
