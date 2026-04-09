"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const localStorage_1 = require("../utils/localStorage");
class Funcionario {
    constructor(id, nome, telefone, endereco, usuario, senha, nivelPermissao) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.usuario = usuario;
        this.senha = senha;
        this.nivelPermissao = nivelPermissao;
    }
    autenticar(usuario, senha) {
        return this.usuario === usuario && this.senha === senha;
    }
    salvar() {
        const funcsSalvos = localStorage_1.localStorage.getItem('funcionarios') || '';
        const data = `${this.id};${this.nome};${this.telefone};${this.endereco};${this.usuario};${this.senha};${this.nivelPermissao}\n`;
        localStorage_1.localStorage.setItem('funcionarios', funcsSalvos + data);
    }
    carregar() {
        const data = localStorage_1.localStorage.getItem('funcionarios');
        if (data) {
            console.log("Dados de funcionários carregados do LocalStorage:");
            console.log(data);
        }
        else {
            console.log("Nenhum funcionário encontrado no LocalStorage.");
        }
    }
}
exports.Funcionario = Funcionario;
