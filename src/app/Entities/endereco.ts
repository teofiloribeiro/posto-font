import { Coordendas } from './coordenadas';
import { Bairro } from './bairro';

export class Endereco{
    cod: number;
    rua:String;
    cep:String;
    numero:String;
    complemento:String;
    coordenadas: Coordendas;
    bairro: Bairro;
}