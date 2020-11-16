import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Contactos, CustomerModel, Direcciones } from 'src/app/Models/Clients';
import { CheckRequiredField } from 'src/app/_shared/helpers/form.helper';
import Swal from 'sweetalert2';

import { ClientesService } from '../_service/clientes.service';

@Component({
  selector: 'app-cliente-add-edit',
  templateUrl: './cliente-add-edit.component.html',
  styleUrls: ['./cliente-add-edit.component.scss']
})
export class ClienteAddEditComponent implements OnInit {


  

  constructor
  (private clientesService: ClientesService, 
    private modalService: BsModalService, 
    ) 
  { 
    
  }
  public data;
  public submitted = false;
  public Cliente;
  // public direcciones: Direcciones ;
  public listadoDirecciones = [];
  public listacontactos = [];
  public processing: Boolean = false;
  public Editing: boolean;
  public clienteTypesIdentity;
  modalRef: BsModalRef;
  

  ngOnInit() {
    this.Cliente = new CustomerModel();
    
    this.getTypesIdentity();

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    
  }

  // openModalContactos(index: any){ 
    // let contactos = this.Cliente.Contactos.find(f=> f.Index == index);
    // const dialoRef = this.contactoModal.open(ClienteContactosComponent, {
    //   height: "auto",
    //   width: 'auto',
    //   maxWidth: '500px',
    //   maxHeight: '650px',
    //   data: {contactos:1}​​,
    //   disableClose: false
    // });
    // dialoRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     if (result.Editing){
    //        this.Cliente.Contactos.forEach(element => {
    //        if(element.Index == index){
    //          element.Id = result.Contact.Id;
    //          element.Descripcion = result.Contact.Descripcion;
    //          element.TipoContacto = result.Contact.TipoContacto;
    //          element.TipoEntidad = result.Contact.TipoEntidad;
    //        }
    //      });
    //     }else{
    //       this.Cliente.Contactos.push(result.Contact);
    //     }
        
    //   }
    // });
  // }

  
 
  agregarDireccion(): void {
    this.modalRef.hide();
  }


  getCliente(clienteId: number) {
    this.submitted = true;
    // console.log('Tamo aqui');
    
    this.clientesService.GetById(clienteId).subscribe((data: any) => {
      this.submitted = false;
      this.Cliente = data.Object;
    }, error => {
      this.submitted = false;
      Swal.fire({
        icon: 'error',
        title: error.error.Title,
        text: error.error.Message
      });
    });
  }


  getTypesIdentity() {
    this.clientesService.GetTypesIdentity().subscribe((data: any) => {
      console.log(data);
      this.clienteTypesIdentity = data;
    }, error => {
      console.log(error.error);

    });
  }

  getDatosContactos(item){
    console.log("Este es el item que viene del hijo");
    console.log(item);
    this.listacontactos.push(item);
    console.log("Esta es la lista de items");
    console.log(this.listacontactos);
    
}

getDatosDirecciones(item){
  console.log("Este es el item de direcciones que viene del hijo");
  console.log(item);
  this.listadoDirecciones.push(item);
  console.log("Esta es la lista de direcciones");
  console.log(this.listadoDirecciones);
  
}
 

  

  createCliente() {
    this.processing = true;
    this.clientesService.postCliente(this.Cliente).subscribe((data: any) => {
      this.submitted = false;
      Swal.fire({
        icon: 'success',
        title: "Registro Guardado",
        text: "El registro fue guardado exitosamente"
      });
      this.processing = false;
    }, error => {
      this.submitted = false;
      Swal.fire({
        icon: 'error',
        title: error.error.Title,
        text: error.error.Message
      });
      this.processing = false;
    });
    
  }

  updateCliente() {
    // console.log(this.Producto);
    
    this.clientesService.putCliente(this.Cliente).subscribe((data: any) => {
      this.submitted = false;
      Swal.fire({
        icon: 'success',
        title: data.Title,
        text: data.Message
      });
    }, error => {
      this.submitted = false;
      Swal.fire({
        icon: 'error',
        title: error.error.Title,
        text: error.error.Message
      });
    });
  }
  alterCliente() {
    if (this.Editing)
      this.updateCliente();
    else
      this.createCliente();
  }

  

  
}
