import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../../_auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navToggle: Boolean = false;
  public name;
  private usermeta:any;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.usermeta = localStorage.getItem('usermeta');
    this.name = JSON.parse(localStorage.getItem('usermeta'));
    // console.log('Datos de usario');
    const user = JSON.parse(localStorage.getItem('usermeta'))
    console.log('Desde el sidebar '+user);
  }

  logout() {
    this.authService.logout();
  }

  toggleNav() {
    this.navToggle  = !this.navToggle;
  }

}
