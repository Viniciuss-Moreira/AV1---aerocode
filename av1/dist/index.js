"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Aeronave_1 = require("./models/Aeronave");
const Peca_1 = require("./models/Peca");
const Funcionario_1 = require("./models/Funcionario");
const Etapa_1 = require("./models/Etapa");
const Teste_1 = require("./models/Teste");
const Relatorio_1 = require("./models/Relatorio");
const TipoAeronave_1 = require("./enums/TipoAeronave");
const TipoPeca_1 = require("./enums/TipoPeca");
const StatusPeca_1 = require("./enums/StatusPeca");
const NivelPermissao_1 = require("./enums/NivelPermissao");
const StatusEtapa_1 = require("./enums/StatusEtapa");
const TipoTeste_1 = require("./enums/TipoTeste");
const ResultadoTeste_1 = require("./enums/ResultadoTeste");
// cria os funcionarios
const admin = new Funcionario_1.Funcionario(1, 'Carlos Silva', '11999999999', 'Rua A, 123', 'admin', '123456', NivelPermissao_1.NivelPermissao.ADMINISTRADOR);
const eng = new Funcionario_1.Funcionario(2, 'Ana Souza', '11988888888', 'Rua B, 456', 'engenheira', 'senha123', NivelPermissao_1.NivelPermissao.ENGENHEIRO);
admin.salvar();
eng.salvar();
// cria as peças
const motor = new Peca_1.Peca('Motor X1', TipoPeca_1.TipoPeca.IMPORTADA, 'Fornecedora Global', StatusPeca_1.StatusPeca.EM_TRANSPORTE);
const asa = new Peca_1.Peca('Asa Esquerda', TipoPeca_1.TipoPeca.NACIONAL, 'Aerocode Peças', StatusPeca_1.StatusPeca.EM_PRODUCAO);
motor.atualizarStatus(StatusPeca_1.StatusPeca.PRONTA);
motor.salvar();
asa.salvar();
// cria as etapas de montagem
const etapaMontagem = new Etapa_1.Etapa('Montagem da Fuselagem', 30, StatusEtapa_1.StatusEtapa.PENDENTE);
etapaMontagem.associarFuncionario(eng);
etapaMontagem.iniciar();
// cria os testes
const testeEletrico = new Teste_1.Teste(TipoTeste_1.TipoTeste.ELETRICO, ResultadoTeste_1.ResultadoTeste.APROVADO);
testeEletrico.salvar();
// cria aeronave
const aviao = new Aeronave_1.Aeronave('A320-100', 'Airbus A320', TipoAeronave_1.TipoAeronave.COMERCIAL, 150, 6100, [motor, asa], [etapaMontagem], [testeEletrico]);
aviao.salvar();
aviao.detalhes();
// gera relatorio
const relatorio = new Relatorio_1.Relatorio();
relatorio.gerarRelatorio(aviao);
relatorio.salvarEmArquivo();
// testando carregamento
aviao.carregar();
