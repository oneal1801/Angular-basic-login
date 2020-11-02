import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ClienteModel } from './_models/cliente.model';
import { ClientesService } from './_service/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  cliente: BehaviorSubject<ClienteModel[]>;

 
  
  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    
  }


  

}
