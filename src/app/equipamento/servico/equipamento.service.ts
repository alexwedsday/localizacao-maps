import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Equipamento } from '../modelo';
import { LocalizacaoService } from 'src/app/shared/servico/localizacao.service';
import { Localizacao } from 'src/app/shared/modelo/localizacao';

@Injectable({
  providedIn: 'root',
})
export class EquipamentoService {
 
  readonly URL: string = 'http://localhost:3000/equipamentos';

  constructor(
    private http: HttpClient,
    private localizacaoService: LocalizacaoService
  ) {}

  public listarEquipamentos(): Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(this.URL);
  }

  public buscarLocalizacao(id: number): Observable<Localizacao> {
    return this.localizacaoService.buscarPorId(id);
  }

  public save(equipamento: Equipamento):Observable<Equipamento> {
    return this.http.post<Equipamento>(this.URL, equipamento);
  }

  public saveLocation(localizacao:Localizacao):Observable<Localizacao>{
    return this.localizacaoService.salvar(localizacao);
  }

  
  public edit(equipamento: Equipamento):Observable<Equipamento> {
    return this.http.put<Equipamento>(this.URL + `/${equipamento.id}`, equipamento);
  }

   
  
}
