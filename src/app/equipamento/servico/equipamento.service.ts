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
  
}
