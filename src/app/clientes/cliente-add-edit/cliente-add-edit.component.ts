import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckRequiredField } from 'src/app/_shared/helpers/form.helper';
import { ClienteModel } from '../_models/cliente.model';
import { ClientesService } from '../_service/clientes.service';

@Component({
  selector: 'app-cliente-add-edit',
  templateUrl: './cliente-add-edit.component.html',
  styleUrls: ['./cliente-add-edit.component.scss']
})
export class ClienteAddEditComponent implements OnInit {

  @Input() cliente: ClienteModel;
  @Output() formSubmitEvent = new EventEmitter<string>();

  clienteForm: FormGroup;

  isProcessing: Boolean = false;
  submitted: Boolean = false;


  checkField  = CheckRequiredField;

  //Dropdowns
  typesIdentity: {};
  typesEntity: {};
  provincias:{};
  municipios:{};
  sectores: {};

  constructor(private clientesService: ClientesService, private formBuilder: FormBuilder, private http:HttpClient ) 
  { 
    this.GetTypesIdentityList();
    this.GetTypesEntityList();
    this.GetProvinciasList();
    this.GetMunicipiosList();
    this.GetSectoresList();
  }

  ngOnInit() {

  }

  ddlIdentityList = "";
  onSubmit() {
    alert('Category ID: ' + this.ddlIdentityList);
  } 

  GetTypesIdentityList(){
    this.http.get(`https://localhost:44314/api/codes/typesidentity`).subscribe(
      data => this.typesIdentity = data
    );
  }

  GetTypesEntityList(){
    this.http.get(`https://localhost:44314/api/codes/typesentity`).subscribe(
      data => this.typesEntity = data
    );
  }

  GetProvinciasList(){
    this.http.get(`https://localhost:44314/api/codes/provincias`).subscribe(
      data => this.provincias = data
    );
  }

  GetMunicipiosList(){
    this.http.get(`https://localhost:44314/api/codes/municipios`).subscribe(
      data => this.municipios = data
    );
  }

  GetSectoresList(){
    this.http.get(`https://localhost:44314/api/codes/sectores`).subscribe(
      data => this.sectores = data
    );
  }


  createProduct(): void {
    const data = {
      nombre: this.cliente.nombre,
      tipo_Identidad: this.cliente.tipoEntidad,
      identidad: this.cliente.identidad,
      fecha_Nacimiento: this.cliente.fecha_Nacimiento,
      fecha_ingreso: this.cliente.fecha_ingreso,
      estatus: this.cliente.estatus,
      tipoEntidad: this.cliente.tipoEntidad,
      tipoContacto: this.cliente.tipoContacto,
      calle: this.cliente.calle,
      numero: this.cliente.numero,
      Apto: this.cliente.Apto,
      pais: this.cliente.pais,
      sector: this.cliente.sector,
      provincia: this.cliente.provincia,
      municipio: this.cliente.municipio,
      comentario: this.cliente.comentario,

    };

    this.clientesService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isProcessing = true;
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCliente(): void {
    this.submitted = false;
    this.isProcessing = false;
    this.cliente = {
      id: 0,
      nombre: '',
      tipo_Identidad: 0,
      identidad: '',
      fecha_Nacimiento: new Date,
      fecha_ingreso: new Date,
      estatus: '',
      tipoEntidad: 0,
      tipoContacto: 0,
      calle: '',
      numero: '',
      Apto: '',
      pais: '',
      sector: '',
      provincia: '',
      municipio: '',
      comentario: ''
    };
  }



  

}
