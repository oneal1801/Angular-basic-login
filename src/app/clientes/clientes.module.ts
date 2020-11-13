import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { AuthGuard } from '../_auth/guards/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { ClienteAddEditComponent } from './cliente-add-edit/cliente-add-edit.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteListItemComponent } from './cliente-list-item/cliente-list-item.component';
import { ClienteDireccionesComponent } from './cliente-direcciones/cliente-direcciones.component';
import { ClienteContactosComponent } from './cliente-contactos/cliente-contactos.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent , canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  declarations: [
    ClientesComponent,
    ClienteAddEditComponent,
    ClienteListComponent,
    ClienteListItemComponent,
    ClienteDireccionesComponent,
    ClienteContactosComponent,
    
  ],
  entryComponents: [ClienteContactosComponent],
})
export class ClientesModule {

 }
