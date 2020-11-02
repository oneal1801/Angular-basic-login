import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { AuthGuard } from '../_auth/guards/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteAddEditComponent } from './cliente-add-edit/cliente-add-edit.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteListItemComponent } from './cliente-list-item/cliente-list-item.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent , canActivate: [AuthGuard] },
  { path: 'cliente-edit/:id', component: ClienteEditComponent , canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ClientesComponent,
    ClienteAddEditComponent,
    ClienteListComponent,
    ClienteListItemComponent,
  ]
})
export class ClientesModule { }
