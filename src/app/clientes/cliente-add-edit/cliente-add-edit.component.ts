import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomerModel } from 'src/app/Models/Clients';
import { CheckRequiredField } from 'src/app/_shared/helpers/form.helper';
import Swal from 'sweetalert2';

import { ClientesService } from '../_service/clientes.service';

@Component({
  selector: 'app-cliente-add-edit',
  templateUrl: './cliente-add-edit.component.html',
  styleUrls: ['./cliente-add-edit.component.scss']
})
export class ClienteAddEditComponent implements OnInit {

  datepickerModel: Date;
  

  constructor(private clientesService: ClientesService, private formBuilder: FormBuilder, private http:HttpClient ) 
  { 
    
  }
  public data;
  public submitted = false;
  public Cliente;
  public processing: Boolean = false;
  public Editing: boolean;
  public selectTypesIdentity = new FormControl('', [Validators.required]);
  public selectedProvincia = new FormControl
  public clienteTypesIdentity;
  public typesentity;
  public provincias;
  public municipios;
  public sectores;

  ngOnInit() {
    this.Cliente = new CustomerModel();
   
    this.getTypesIdentity();
    this.getProvincias();
    this.getTypesEntity();
    

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

  getTypesEntity() {
    this.clientesService.GetTypesEntity().subscribe((data: any) => {
      console.log(data);
      this.typesentity = data;
    }, error => {
      console.log(error.error);

    });
  }

  getProvincias() {
    this.clientesService.GetProvincias().subscribe((data: any) => {
      console.log(data);
      this.provincias= data;
    }, error => {
      console.log(error.error);

    });
  }

  getMunicipios() {
    this.clientesService.GetMunicipios().subscribe((data: any) => {
      console.log(data);
      this.municipios = data;
    }, error => {
      console.log(error.error);

    });
  }

  getSectores() {
    this.clientesService.GetSectores().subscribe((data: any) => {
      console.log(data);
      this.sectores = data;
    }, error => {
      console.log(error.error);

    });
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
