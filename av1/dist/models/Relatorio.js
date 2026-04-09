"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relatorio = void 0;
const fs = __importStar(require("fs"));
class Relatorio {
    constructor() {
        this.relatorioTexto = "";
    }
    gerarRelatorio(aeronave) {
        let texto = `relatorio final - aeronave ${aeronave.codigo}\n`;
        texto += `modelo: ${aeronave.modelo}\n`;
        texto += `tipo: ${aeronave.tipo}\n`;
        texto += `capacidade: ${aeronave.capacidade}\n`;
        texto += `alcance: ${aeronave.alcance}\n`;
        texto += `peças:\n`;
        aeronave.pecas.forEach(p => {
            texto += `- ${p.nome} (${p.tipo}), fornecedor: ${p.fornecedor}, status: ${p.status}\n`;
        });
        texto += `etapas:\n`;
        aeronave.etapas.forEach(e => {
            texto += `- ${e.nome} (prazo: ${e.prazo} dias), status: ${e.status}\n`;
            texto += `  funcionarios:\n`;
            e.funcionarios.forEach(f => {
                texto += `    * ${f.nome} (${f.nivelPermissao})\n`;
            });
        });
        texto += `testes:`;
        aeronave.testes.forEach(t => {
            texto += `- ${t.tipo}: ${t.resultado}\n`;
        });
        this.relatorioTexto = texto;
        console.log(texto);
    }
    salvarEmArquivo() {
        if (!this.relatorioTexto) {
            console.log("nenhum relatório gerado para salvar");
            return;
        }
        const filePath = `./data/relatorio_${Date.now()}.txt`;
        fs.writeFileSync(filePath, this.relatorioTexto, 'utf-8');
        console.log(`relatorio salvo com sucesso em: ${filePath}`);
    }
}
exports.Relatorio = Relatorio;
