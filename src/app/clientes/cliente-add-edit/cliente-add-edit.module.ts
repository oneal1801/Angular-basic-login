import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteAddEditComponent } from './cliente-add-edit.component';
import { ClienteDireccionesComponent } from '../cliente-direcciones/cliente-direcciones.component';
import { ClienteContactosComponent } from '../cliente-contactos/cliente-contactos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    ClienteAddEditComponent,    
    ClienteDireccionesComponent,
    ClienteContactosComponent,
  ]
})
export class ClienteAddEditModule { }
