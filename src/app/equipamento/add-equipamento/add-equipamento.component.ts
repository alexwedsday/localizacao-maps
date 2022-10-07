import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    localization: { id: 0, latitude: 0, longitude: 0 },
    status: false,
  };
  serialNumber: any;
  equipamentos: Equipamento[] = [];
  value1: string = 'Ativo';

  constructor(private service: EquipamentoService, private router:Router) {
    this.stateOptions = [
      { label: 'Ativo', value: 0 },
      { label: 'Inativo', value: 1 },
    ];
  }
  ngOnInit(): void {}

 

  public toggle(value: number): void {
    this.equipamento.status = (value === 0);
  }


  public goToList():void{
     this.router.navigate(['..'])
  }

  public save():void{
    console.log(this.equipamento);
    this.service.save(this.equipamento).subscribe(
      {
        next:(response) => {
          this.equipamento = response
          this.router.navigate(['..']);
        },
        error:(error)=>console.error(error), 
    
      }
    );
  }

  public cancel():void{
    this.equipamento = {
      id: 0,
      serial: '',
      localization: { id: 0, latitude: 0, longitude: 0 },
      status: false,
    };
  }
}
