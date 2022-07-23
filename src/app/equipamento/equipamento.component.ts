import { Component, OnInit} from '@angular/core';
import { Equipamento, IEquipamento } from './modelo';
import { EquipamentoService } from './servico';

@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.scss']
})
export class EquipamentoComponent implements OnInit {

  stateOptions: any[];
  public equipamento: Equipamento = new Equipamento(0, '', 0, '');
  serialNumber:any;
  equipamentos: Equipamento[] =  [];
  value1: string = "Ativo";


  constructor(private service: EquipamentoService) {
    console.log(this.equipamento);
    this.stateOptions = [
      {label: 'Ativo', value: 1},
      {label: 'Inativo', value: 2}
    ];
   }
  ngOnInit(): void {
    this.populateEquipamento();
    //this.equipamento = this.equipamentos[0];
    console.log(this.equipamento);
    
  }

  public populateEquipamento():void{
    this.service.listarEquipamentos().subscribe({
      next: (res:Equipamento[])=>{
         this.equipamentos = res;
         this.equipamento  = this.equipamentos[0]; 
      },
      error: (error)=> console.error(error),
      complete: ()=> console.log('completo')});
  }
   

  public toggle(value:number):void{
    this.equipamento.status = this.stateOptions[value - 1].label;
  }

}
