export class CustomerModel {
    Id: number;
    Nombre: string;
    TipoIdentidad: number;
    Identidad: string;
    FechaNacimiento: Date;
    FechaIngreso: Date;
    Contactos: Contactos[];
    Direcciones: Direcciones[];

    constructor() {
       this.Contactos = [];
       this.Direcciones = [];
    }
}

export class Contactos{
    Id: number = 0;
    Index:number;
    IdCliente: number;
    TipoContacto: number;
    TipoEntidad: number;
    Descripcion: string;
}

export class Direcciones { 

    Id: number;
    Index:number;
    IdCliente: number;
    Calle: string;
    Numero: string;
    Edificio: string;
    Apto: string;
    Sector: string;
    Pais: string;
    Provincia: string;
    Municipio: string;
    Comentario: string;

}