import { Localizacao } from "src/app/shared/modelo/localizacao";

export interface IEquipamento {
    id: number;
    serial: string;
    localizacao: Localizacao;
    status: string;
}