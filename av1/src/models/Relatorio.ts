import * as fs from 'fs';
import { Aeronave } from './Aeronave';

export class Relatorio {
    private relatorioTexto: string = "";

    gerarRelatorio(aeronave: Aeronave): void {
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

    salvarEmArquivo(): void {
        if (!this.relatorioTexto) {
            console.log("nenhum relatório gerado para salvar");
            return;
        }
        const filePath = `./data/relatorio_${Date.now()}.txt`;
        fs.writeFileSync(filePath, this.relatorioTexto, 'utf-8');
        console.log(`relatorio salvo com sucesso em: ${filePath}`);
    }
}
