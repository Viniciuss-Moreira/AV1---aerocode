"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teste = void 0;
const localStorage_1 = require("../utils/localStorage");
class Teste {
    constructor(tipo, resultado) {
        this.tipo = tipo;
        this.resultado = resultado;
    }
    salvar() {
        const testesSalvos = localStorage_1.localStorage.getItem('testes') || '';
        const data = `${this.tipo};${this.resultado}\n`;
        localStorage_1.localStorage.setItem('testes', testesSalvos + data);
    }
    carregar() {
        const data = localStorage_1.localStorage.getItem('testes');
        if (data) {
            console.log("dados de testes carregados do LocalStorage:");
            console.log(data);
        }
        else {
            console.log("nenhum teste encontrado no LocalStorage");
        }
    }
}
exports.Teste = Teste;
