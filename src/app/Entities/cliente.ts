import { Pessoa } from './pessoa';
import { Veiculo } from './veiculo';


export class Cliente extends Pessoa{
    cod: number;
    veiculos: Veiculo[];
}