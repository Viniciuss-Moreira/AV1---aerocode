import { NivelPermissao } from '../enums/NivelPermissao';
import { localStorage } from '../utils/localStorage';

export class Funcionario {
    constructor(
        public id: number,
        public nome: string,
        public telefone: string,
        public endereco: string,
        public usuario: string,
        public senha: string,
        public nivelPermissao: NivelPermissao
    ) {}

    autenticar(usuario: string, senha: string): boolean {
        return this.usuario === usuario && this.senha === senha;
    }

    salvar(): void {
        const funcsSalvos = localStorage.getItem('funcionarios') || '';
        const data = `${this.id};${this.nome};${this.telefone};${this.endereco};${this.usuario};${this.senha};${this.nivelPermissao}\n`;
        localStorage.setItem('funcionarios', funcsSalvos + data);
    }

    carregar(): void {
        const data = localStorage.getItem('funcionarios');
        if (data) {
            console.log("Dados de funcionários carregados do LocalStorage:");
            console.log(data);
        } else {
            console.log("Nenhum funcionário encontrado no LocalStorage.");
        }
    }
}
