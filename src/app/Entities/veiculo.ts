import { TipoVeiculo } from './tipo-veiculo';

export class Veiculo{
    placa: String;
    marca: String;
    modelo: string;
    cor: String;
    tipoVeiculo: TipoVeiculo;

    constructor (){
        this.tipoVeiculo = new TipoVeiculo();
    }
}