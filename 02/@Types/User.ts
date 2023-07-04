import { Address } from "./Address";

export type User = {
    nome: string;
    email: string;
    cpf: string;
    profissao?: string;
    endereco: Address | null;
}