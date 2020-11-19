import { Escolaridade } from './escolaridade.model';
export class Usuario {
    idUsuario: number;
    nome: string;
    sobreNome: string;
    email: string;
    dtNascimento: Date;
    codEscolaridade: number;
    escolaridade: Escolaridade;
}
