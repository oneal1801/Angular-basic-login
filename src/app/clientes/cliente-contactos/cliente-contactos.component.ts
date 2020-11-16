import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { ClientesService } from '../_service/clientes.service';
import { Contactos } from 'src/app/Models/Clients';


@Component({
  selector: 'app-cliente-contactos',
  templateUrl: './cliente-contactos.component.html',
  styleUrls: ['./cliente-contactos.component.scss']
})
export class ClienteContactosComponent implements OnInit {

  public editando: boolean = false;
  public typesentity;
  public contactos : Contactos;
  contactoform;
  list: any[] = [];

  @Output() getListContactos: EventEmitter<any> = new EventEmitter();

  constructor(private clientesService: ClientesService,
     ) 
  { 

  }

  

  ngOnInit() {
    this.contactos = new Contactos();
    this.getTypesEntity();
    //Cuando se esta editando y no esta guardado en la BD
    // if (this.data.contatos) {
    //   this.contactos = this.data.Contactos;
    // }
    // //Cuando se esta editando un contacto que ya esta en la BD
    // if (this.data.ContactId != " ") {
    //   this.editando = true;
    //   //Se ejecuta el metodo que trae el contacto de la db
    // }
  }

  


  getTypesEntity() {
    this.clientesService.GetTypesEntity().subscribe((data: any) => {
      console.log(data);
      this.typesentity = data;
    }, error => {
      console.log(error.error);

    });
  }

  RetornarContactos(items){
    this.getListContactos.emit(items);  
    
    
   }
  



}
