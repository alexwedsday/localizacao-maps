import { Component, OnInit} from '@angular/core';
import { Localizacao } from '../shared/modelo/localizacao';
import { Equipamento } from './modelo';
import { EquipamentoService } from './servico';

@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.scss']
})
export class EquipamentoComponent implements OnInit {

  stateOptions: any[];
  public equipamento: Equipamento = {id: 0 , serial: '', localizacao: {id: 0, id_equipamentos: 0 ,latitude: 0, longitude: 0}, status: ''};
  serialNumber:any;
  equipamentos: Equipamento[] =  [];
  value1: string = "Ativo";


  constructor(private service: EquipamentoService) {
    this.stateOptions = [
      {label: 'Ativo', value: 1},
      {label: 'Inativo', value: 2}
    ];
   }
  ngOnInit():void {
    this.populateEquipamento();
  }

  public populateEquipamento():void{
    this.service.listarEquipamentos().subscribe({
      next: async (res:Equipamento[])=>{
         this.equipamentos = await res;
         this.equipamento  =  this.equipamentos[0]; 
         this.equipamento = await this.addLocalizacao(this.equipamento);
      },
      error: (error)=> console.error(error),
      complete: ()=> console.log('completo')});
  }
   

  public toggle(value:number):void{
    this.equipamento.status = this.stateOptions[value - 1].label;
  }

  public addLocalizacao(equipamento: Equipamento):Equipamento{
    this.service.buscarLocalizacao(equipamento.id).subscribe((localizacao:Localizacao)=>{
      equipamento.localizacao = localizacao;
    });
   return equipamento;
  }

}
