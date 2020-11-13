import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { ClientesService } from '../_service/clientes.service';
import { Contactos } from 'src/app/Models/Clients';
import { FormBuilder } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

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
  modalRef: BsModalRef;
  list: any[] = [];
  public event: EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder: FormBuilder, private clientesService: ClientesService,) {
   
  }

  

  ngOnInit() {
    this.contactos = new Contactos();
    this.getTypesEntity();
    this.contactoform = this.formBuilder.group({
    
      TipoContacto: 0,
      TipoEntidad: 0,
      Descripcion: ""
    })
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

  saveToList(form) {
    this.triggerEvent({form});
    //this.modalRef.hide();

  }

  triggerEvent(items:any ) {
    this.event.emit({ data: items , res:200 });
  }



}
