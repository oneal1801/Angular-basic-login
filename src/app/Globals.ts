export class Globals {
    a = {
        Pruebas: "https://localhost:44314/",
        Produccion: "Inserta la url de prod aqui"
    };
    public urlApi = this.a["Pruebas"];
    public extractData(res: Response) {
        const body = res;
        return body || {};
    }
}
