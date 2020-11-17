import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes/_service/clientes.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

 
    public Clientes = [];  
    public OriginalList;
    public dtOptions: DataTables.Settings = {};
    
    constructor(private clientesService: ClientesService) { }
  
    public data = [
      // {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
      // {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
      // {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
      // {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
  ];
  
    ngOnInit() {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true
      }
      this.getClientes();
    }
  
    getClientes() {
      this.clientesService.GetAll().subscribe((data: any) => {
        debugger;
        this.Clientes = data.Object;
        console.log("listado de clientes");
        //console.log(this.Clientes.length);
        this.OriginalList = data.Object;
      }, error => {
        console.log("Error cargando los clientes");
      })
    }

}
