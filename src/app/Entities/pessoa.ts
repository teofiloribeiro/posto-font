import { Telefone } from './telefone';
import { Endereco } from './endereco';


export class Pessoa{
    cod: number;
    telefones: Telefone[];
    enderecos: Endereco[];
}