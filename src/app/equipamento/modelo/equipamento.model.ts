import { Localizacao } from "src/app/shared/modelo/localizacao";

export interface Equipamento  {
    id: number;
    serial: string;
    localization: Localizacao;
    status: boolean;

}
