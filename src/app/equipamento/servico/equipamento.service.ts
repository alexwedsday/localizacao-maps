import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Equipamento } from '../modelo';
import { LocalizacaoService } from 'src/app/shared/servico/localizacao.service';


@Injectable({
  providedIn: 'root',
})
export class EquipamentoService {
 
  readonly URL: string = 'api/hardwares';

  constructor(
    private http: HttpClient,
    private localizacaoService: LocalizacaoService
  ) {}

  public listarEquipamentos(): Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(this.URL);
  }

  public save(equipamento: Equipamento):Observable<Equipamento> {
    return this.http.post<Equipamento>(this.URL, equipamento);
  }

  public edit(equipamento: Equipamento):Observable<Equipamento> {
    return this.http.put<Equipamento>(this.URL + `/${equipamento.id}`, equipamento);
  }
}
