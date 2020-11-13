import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../_service/clientes.service';

@Component({
  selector: 'app-cliente-direcciones',
  templateUrl: './cliente-direcciones.component.html',
  styleUrls: ['./cliente-direcciones.component.scss']
})
export class ClienteDireccionesComponent implements OnInit {

  public provincias;
  public provinciaId: number = 0;
  public municipios;
  public municipioId: number = 0;
  public sectores;

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.getProvincias();
  }

  
  getProvincias() {
    this.clientesService.GetProvincias().subscribe((data: any) => {
      console.log(data);
      this.provincias= data;
    }, error => {
      console.log(error.error);

    });
  }

  FillMunicipiosDDL(event: any){  
    this.provinciaId = event.target.value;
    this.clientesService.GetMunicipios(this.provinciaId).subscribe((data:any)=>{
      console.log(data);
      this.municipios = data;
    });  
  }

  FillSectoresDDL(event: any){  
    this.municipioId = event.target.value; 
    this.clientesService.GetSectores(this.municipioId).subscribe((data:any)=>{
      console.log(data);
      this.sectores = data;
    });  
  }

}
