"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Peca = void 0;
const localStorage_1 = require("../utils/localStorage");
class Peca {
    constructor(nome, tipo, fornecedor, status) {
        this.nome = nome;
        this.tipo = tipo;
        this.fornecedor = fornecedor;
        this.status = status;
    }
    atualizarStatus(novoStatus) {
        this.status = novoStatus;
    }
    salvar() {
        const pecasSalvas = localStorage_1.localStorage.getItem('pecas') || '';
        const data = `${this.nome};${this.tipo};${this.fornecedor};${this.status}\n`;
        localStorage_1.localStorage.setItem('pecas', pecasSalvas + data);
    }
    carregar() {
        const data = localStorage_1.localStorage.getItem('pecas');
        if (data) {
            console.log("dados de peças carregados do LocalStorage:");
            console.log(data);
        }
        else {
            console.log("nenhuma peça encontrada no LocalStorage");
        }
    }
}
exports.Peca = Peca;
