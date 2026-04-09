import { StatusEtapa } from '../enums/StatusEtapa';
import { Funcionario } from './Funcionario';

export class Etapa {
    constructor(
        public nome: string,
        public prazo: number,
        public status: StatusEtapa,
        public funcionarios: Funcionario[] = []
    ) {}

    iniciar(): void {
        this.status = StatusEtapa.ANDAMENTO;
    }

    finalizar(): void {
        this.status = StatusEtapa.CONCLUIDA;
    }

    associarFuncionario(f: Funcionario): void {
        if (!this.funcionarios.find(func => func.id === f.id)) {
            this.funcionarios.push(f);
        }
    }

    listarFuncionarios(): Funcionario[] {
        return this.funcionarios;
    }
}
