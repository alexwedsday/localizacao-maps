import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Localizacao } from 'src/app/shared/modelo/localizacao';
import { Equipamento } from '../modelo';
import { EquipamentoService } from '../servico';

@Component({
  selector: 'app-add-equipamento',
  templateUrl: './add-equipamento.component.html',
  styleUrls: ['./add-equipamento.component.css'],
})
export class AddEquipamentoComponent implements OnInit {
  stateOptions: any[];
  public equipamento: Equipamento = {
    id: 0,
    serial: '',
    localizacoes: { id: 0,  id_equipamentos: 0, latitude: 0, longitude: 0 },
    status: '',
  };
  serialNumber: any;
  equipamentos: Equipamento[] = [];
  value1: string = 'Ativo';

  constructor(private service: EquipamentoService, private router:Router) {
    this.stateOptions = [
      { label: 'Ativo', value: 1 },
      { label: 'Inativo', value: 2 },
    ];
  }
  ngOnInit(): void {}

  public populateEquipamento(): void {
    this.service.listarEquipamentos().subscribe({
      next: async (res: Equipamento[]) => {
        this.equipamentos = await res;
        this.equipamento = this.equipamentos[0];
        this.equipamento = await this.addLocalizacao(this.equipamento);
      },
      error: (error) => console.error(error),
      complete: () => console.log('completo'),
    });
  }

  public toggle(value: number): void {
    this.equipamento.status = this.stateOptions[value - 1].label;
  }

  public addLocalizacao(equipamento: Equipamento): Equipamento {
    this.service
      .buscarLocalizacao(equipamento.id)
      .subscribe((localizacao: Localizacao) => {
        equipamento.localizacoes = localizacao;
      });
    return equipamento;
  }
  public goToList():void{
     this.router.navigate(['..'])
  }

  public save():void{
    console.log(this.equipamento);
    this.service.save(this.equipamento).subscribe(
      {
        next:(response) => this.equipamento = response,
        error:(error)=>console.error(error), 
    
      }
    );
  }

  public cancel():void{
    this.equipamento = {
      id: 0,
      serial: '',
      localizacoes: { id: 0, id_equipamentos: 0, latitude: 0, longitude: 0 },
      status: '',
    };
  }
}
