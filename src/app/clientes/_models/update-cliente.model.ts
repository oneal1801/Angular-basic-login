export interface UpdateClienteModel {
    id: number;
    nombre: string;
    tipo_IdEntidad ?: number;
    fecha_Nacimiento ?: Date;
    fecha_ingreso ?: Date;
    estatus ?: string;
}