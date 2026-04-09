import { TipoPeca } from '../enums/TipoPeca';
import { StatusPeca } from '../enums/StatusPeca';
import { localStorage } from '../utils/localStorage';

export class Peca {
    constructor(
        public nome: string,
        public tipo: TipoPeca,
        public fornecedor: string,
        public status: StatusPeca
    ) {}

    atualizarStatus(novoStatus: StatusPeca): void {
        this.status = novoStatus;
    }

    salvar(): void {
        const pecasSalvas = localStorage.getItem('pecas') || '';
        const data = `${this.nome};${this.tipo};${this.fornecedor};${this.status}\n`;
        localStorage.setItem('pecas', pecasSalvas + data);
    }

    carregar(): void {
        const data = localStorage.getItem('pecas');
        if (data) {
            console.log("dados de peças carregados do LocalStorage:");
            console.log(data);
        } else {
            console.log("nenhuma peça encontrada no LocalStorage");
        }
    }
}
