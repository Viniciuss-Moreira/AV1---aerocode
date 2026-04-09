import { TipoAeronave } from '../enums/TipoAeronave';
import { Peca } from './Peca';
import { Etapa } from './Etapa';
import { Teste } from './Teste';
import { localStorage } from '../utils/localStorage';

export class Aeronave {
    constructor(
        public codigo: string,
        public modelo: string,
        public tipo: TipoAeronave,
        public capacidade: number,
        public alcance: number,
        public pecas: Peca[] = [],
        public etapas: Etapa[] = [],
        public testes: Teste[] = []
    ) {}

    detalhes(): void {
        console.log(`Aeronave: ${this.codigo} - ${this.modelo} (${this.tipo})`);
        console.log(`Capacidade: ${this.capacidade}, Alcance: ${this.alcance}`);
        console.log(`Peças: ${this.pecas.length}`);
        console.log(`Etapas: ${this.etapas.length}`);
        console.log(`Testes: ${this.testes.length}`);
        console.log('optimus prime');
        console.log('---');
    }

    salvar(): void {
        const aeronavesSalvas = localStorage.getItem('aeronaves') || '';
        const data = `${this.codigo};${this.modelo};${this.tipo};${this.capacidade};${this.alcance}\n`;
        localStorage.setItem('aeronaves', aeronavesSalvas + data);
    }

    carregar(): void {
        const data = localStorage.getItem('aeronaves');
        if (data) {
            console.log("dados de aeronaves carregados do LocalStorage:");
            console.log(data);
        } else {
            console.log("nenhuma aeronave encontrada no LocalStorage");
        }
    }
}
