import { Telefone } from "./telefone";

export class Pessoa {

    id: number;
    nome: String;
    email: String;
    cpf: String;    
    idade: number;
    dataNascimento: Date= new Date();
    quantidadeFone: number;
    telefones: Array<Telefone>;

    

}
