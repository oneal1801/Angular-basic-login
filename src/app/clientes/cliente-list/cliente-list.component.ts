import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ClienteModel } from '../_models/cliente.model';
import { ClientesService } from '../_service/clientes.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  clientes$: BehaviorSubject<ClienteModel[]>;

  
  constructor(
    private clientesService: ClientesService
  ) { }

  ngOnInit() {
    
  }

}
