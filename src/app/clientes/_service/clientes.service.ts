import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Globals } from 'src/app/Globals';
import { CustomerModel } from 'src/app/Models/Clients';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  constructor(private http: HttpClient, private globals: Globals) { }


  GetAll() {
    const url_api = this.globals.urlApi + `api/costumer/allcostumer`;
    return this.http.get(url_api);
  }

  GetTypesIdentity() {
    const url_api = this.globals.urlApi + `api/codes/typesidentity`;
    return this.http.get(url_api);
  }

  GetProvincias(){
    const url_api = this.globals.urlApi + `api/codes/provincias`;
    return this.http.get(url_api);
  }

  GetMunicipios(){
    const url_api = this.globals.urlApi + `api/codes/municipios`;
    return this.http.get(url_api);
  }

  GetSectores(){
    const url_api = this.globals.urlApi + `api/codes/sectores`;
    return this.http.get(url_api);
  }

  GetTypesEntity(){
    const url_api = this.globals.urlApi + `api/codes/typesentity`;
    return this.http.get(url_api);
  }
  
  GetById(id:number) {
    const url_api = this.globals.urlApi + `api/costumer/costumerbyidentity?Identity=${id}`;
    return this.http.get(url_api);
  }

  postCliente(cliente:CustomerModel){
    const urlAPI =  this.globals.urlApi + `api/costumer/insertcostumer`;
    return this.http.post(urlAPI,cliente);
  }

  putCliente(cliente:CustomerModel){
    const urlAPI =  this.globals.urlApi + `api/costumer/UpdateProduct`;
    return this.http.put(urlAPI,cliente);
  }

  Delete(cliente: number){
    const url_api = this.globals.urlApi + `api/costumer/DeleteProduct?IdProduct=${cliente}`;
    return this.http.delete(url_api);
  }


}
