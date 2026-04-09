"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aeronave = void 0;
const localStorage_1 = require("../utils/localStorage");
class Aeronave {
    constructor(codigo, modelo, tipo, capacidade, alcance, pecas = [], etapas = [], testes = []) {
        this.codigo = codigo;
        this.modelo = modelo;
        this.tipo = tipo;
        this.capacidade = capacidade;
        this.alcance = alcance;
        this.pecas = pecas;
        this.etapas = etapas;
        this.testes = testes;
    }
    detalhes() {
        console.log(`Aeronave: ${this.codigo} - ${this.modelo} (${this.tipo})`);
        console.log(`Capacidade: ${this.capacidade}, Alcance: ${this.alcance}`);
        console.log(`Peças: ${this.pecas.length}`);
        console.log(`Etapas: ${this.etapas.length}`);
        console.log(`Testes: ${this.testes.length}`);
        console.log('optimus prime');
        console.log('---');
    }
    salvar() {
        const aeronavesSalvas = localStorage_1.localStorage.getItem('aeronaves') || '';
        const data = `${this.codigo};${this.modelo};${this.tipo};${this.capacidade};${this.alcance}\n`;
        localStorage_1.localStorage.setItem('aeronaves', aeronavesSalvas + data);
    }
    carregar() {
        const data = localStorage_1.localStorage.getItem('aeronaves');
        if (data) {
            console.log("dados de aeronaves carregados do LocalStorage:");
            console.log(data);
        }
        else {
            console.log("nenhuma aeronave encontrada no LocalStorage");
        }
    }
}
exports.Aeronave = Aeronave;
