import { TipoTeste } from '../enums/TipoTeste';
import { ResultadoTeste } from '../enums/ResultadoTeste';
import { localStorage } from '../utils/localStorage';

export class Teste {
    constructor(
        public tipo: TipoTeste,
        public resultado: ResultadoTeste
    ) {}

    salvar(): void {
        const testesSalvos = localStorage.getItem('testes') || '';
        const data = `${this.tipo};${this.resultado}\n`;
        localStorage.setItem('testes', testesSalvos + data);
    }

    carregar(): void {
        const data = localStorage.getItem('testes');
        if (data) {
            console.log("dados de testes carregados do LocalStorage:");
            console.log(data);
        } else {
            console.log("nenhum teste encontrado no LocalStorage");
        }
    }
}
