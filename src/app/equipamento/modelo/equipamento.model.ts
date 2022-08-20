import { IEquipamento } from "./equipamento.interface";

export class Equipamento  implements IEquipamento {
    public id: number;
    public serial: string;
    public localizacao: number;
    public status: string;
    
    constructor(id: number, serial:string, localizacao:number, status:string){
        this.id = id;
        this.serial =  serial;
        this.localizacao = localizacao;
        this.status = status;
        
    }
    
}
