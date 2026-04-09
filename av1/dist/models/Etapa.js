"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etapa = void 0;
const StatusEtapa_1 = require("../enums/StatusEtapa");
class Etapa {
    constructor(nome, prazo, status, funcionarios = []) {
        this.nome = nome;
        this.prazo = prazo;
        this.status = status;
        this.funcionarios = funcionarios;
    }
    iniciar() {
        this.status = StatusEtapa_1.StatusEtapa.ANDAMENTO;
    }
    finalizar() {
        this.status = StatusEtapa_1.StatusEtapa.CONCLUIDA;
    }
    associarFuncionario(f) {
        if (!this.funcionarios.find(func => func.id === f.id)) {
            this.funcionarios.push(f);
        }
    }
    listarFuncionarios() {
        return this.funcionarios;
    }
}
exports.Etapa = Etapa;
