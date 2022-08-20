import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localizacao } from '../modelo/localizacao';

@Injectable({
  providedIn: 'root'
})
export class LocalizacaoService {
private readonly  URL:string = "http://localhost:3000/localizacoes/";

constructor(private http: HttpClient) {

}
public buscarPorId(id:number):Observable<Localizacao>{
  return this.http.get<Localizacao>(this.URL + `${id}`);
}

}
