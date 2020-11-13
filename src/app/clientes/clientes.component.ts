import { Component, OnInit, TemplateRef } from '@angular/core';
import { ClientesService } from './_service/clientes.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {


 
  
  constructor(private clientesService: ClientesService, ) { }

  ngOnInit() {
    
  }

  


  

}
