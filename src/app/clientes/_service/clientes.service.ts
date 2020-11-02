import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AddClienteModel } from '../_models/add-cliente.module';

import { ClienteModel } from '../_models/cliente.model';
import { UpdateClienteModel } from '../_models/update-cliente.model';

const baseURL = 'https://localhost:44314/api/costumer';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


 // clientes$ = new BehaviorSubject<ClienteModel[]>([]);

constructor( private httpClient: HttpClient) { }

readAll(): Observable<any> {
  return this.httpClient.get(baseURL);
}

read(id): Observable<any> {
  return this.httpClient.get(`${baseURL}/${id}`);
}

create(data): Observable<any> {
  return this.httpClient.post(baseURL, data);
}

update(id, data): Observable<any> {
  return this.httpClient.put(`${baseURL}/${id}`, data);
}

delete(id): Observable<any> {
  return this.httpClient.delete(`${baseURL}/${id}`);
}

deleteAll(): Observable<any> {
  return this.httpClient.delete(baseURL);
}

searchByName(name): Observable<any> {
  return this.httpClient.get(`${baseURL}?name=${name}`);
}


}
