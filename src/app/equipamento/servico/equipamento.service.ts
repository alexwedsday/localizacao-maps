import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Equipamento, IEquipamento } from '../modelo';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {
  readonly URL: string = 'http://localhost:3000/equipamentos';  

constructor(private http:HttpClient) { }


public listarEquipamentos ():Observable<Equipamento[]>{
  return this.http.get<Equipamento[]>(this.URL); 
}
}
