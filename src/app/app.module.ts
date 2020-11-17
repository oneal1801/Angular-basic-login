import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routingModule } from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { UiModule } from './_shared/ui/ui.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './_auth/guards/auth.guard';
import { TokenIntercept } from './_auth/tokenintercept';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { ItemsModule } from './items/items.module';

import { ItemsService } from './items/_services/items.service';

import { ClientesModule } from './clientes/clientes.module';
import {ClientesService } from './clientes/_service/clientes.service';

import { AuthService } from './_auth/services/auth.service';
import { ContentHeaderComponent } from './ContentHeader/ContentHeader.component';
import { DataTablesModule } from 'angular-datatables';
import { Globals } from './Globals';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';


@NgModule({
  declarations: [		
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    ContentHeaderComponent,
      ClientesListaComponent
   ],
  imports: [
    BrowserModule,
    UiModule,
    HttpClientModule,
    RouterModule,
    routingModule,
    ReactiveFormsModule,
    FormsModule,
    ItemsModule,
    ClientesModule,
    DataTablesModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'},
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercept,
      multi: true,
      
    },
    [Globals],
    AuthService,
    ItemsService,
    ClientesService
  ],

  bootstrap: [AppComponent],
})
export class AppModule { }
