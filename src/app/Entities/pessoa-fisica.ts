import { Pessoa } from './pessoa';

export class PessoaFisica extends Pessoa{
    nome:String;
    sobrenome:String;
    cpf:String;
    identidade:String;
    orgaoEmissor:String;
}