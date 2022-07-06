import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBGEUF } from '../models/ibgeuf.model';

@Injectable({
  providedIn: 'root',
})
export class UfService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get<IBGEUF>(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    );
  }
}
