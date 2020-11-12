export class CustomerModel {
    Id: number;
    Nombre: string;
    TipoIdentidad: number;
    Identidad: string;
    FechaNacimiento: Date;
    FechaIngreso: Date;
    Estatus: string;
    Contactos: Contactos[];
    Direcciones: Direcciones[];
}

export class Contactos{
    Id: number;
    IdCliente: number;
    TipoContacto: number;
    TipoEntidad: number;
    Descripcion: string;
    Estatus: string;
}

export class Direcciones { 

    Id: number;
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
    Estatus: string;

}