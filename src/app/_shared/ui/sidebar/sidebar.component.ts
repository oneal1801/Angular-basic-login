import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public name;
  private usermeta:any;

  constructor() { }

  ngOnInit() {
    this.usermeta = localStorage.getItem('usermeta');
    this.name = JSON.parse(localStorage.getItem('usermeta'));
    // console.log('Datos de usario');
    const user = JSON.parse(localStorage.getItem('usermeta'))
    console.log('Desde el sidebar '+user);
    
    //prueba
  }

  getNames(){

  }
}
