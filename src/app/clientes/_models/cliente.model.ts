export interface ClienteModel {
    id: number;
    nombre: string;
    tipo_Identidad ?: number;
    identidad?: string;
    fecha_Nacimiento ?: Date;
    fecha_ingreso ?: Date;
    estatus ?: string;
    tipoEntidad ?: number;
    tipoContacto ?: number;
    calle ?: string;
    numero ?: string;
    Apto ?: string;
    pais ?: string;
    sector ?: string;
    provincia ?: string;
    municipio ?: string;
    comentario ?: string;


}

