import { Aeronave } from './models/Aeronave';
import { Peca } from './models/Peca';
import { Funcionario } from './models/Funcionario';
import { Etapa } from './models/Etapa';
import { Teste } from './models/Teste';
import { Relatorio } from './models/Relatorio';
import { TipoAeronave } from './enums/TipoAeronave';
import { TipoPeca } from './enums/TipoPeca';
import { StatusPeca } from './enums/StatusPeca';
import { NivelPermissao } from './enums/NivelPermissao';
import { StatusEtapa } from './enums/StatusEtapa';
import { TipoTeste } from './enums/TipoTeste';
import { ResultadoTeste } from './enums/ResultadoTeste';

// cria os funcionarios
const admin = new Funcionario(1, 'Carlos Silva', '11999999999', 'Rua A, 123', 'admin', '123456', NivelPermissao.ADMINISTRADOR);
const eng = new Funcionario(2, 'Ana Souza', '11988888888', 'Rua B, 456', 'engenheira', 'senha123', NivelPermissao.ENGENHEIRO);

admin.salvar();
eng.salvar();

// cria as peças
const motor = new Peca('Motor X1', TipoPeca.IMPORTADA, 'Fornecedora Global', StatusPeca.EM_TRANSPORTE);
const asa = new Peca('Asa Esquerda', TipoPeca.NACIONAL, 'Aerocode Peças', StatusPeca.EM_PRODUCAO);

motor.atualizarStatus(StatusPeca.PRONTA);
motor.salvar();
asa.salvar();

// cria as etapas de montagem
const etapaMontagem = new Etapa('Montagem da Fuselagem', 30, StatusEtapa.PENDENTE);
etapaMontagem.associarFuncionario(eng);
etapaMontagem.iniciar();

// cria os testes
const testeEletrico = new Teste(TipoTeste.ELETRICO, ResultadoTeste.APROVADO);
testeEletrico.salvar();

// cria aeronave
const aviao = new Aeronave('A320-100', 'Airbus A320', TipoAeronave.COMERCIAL, 150, 6100, [motor, asa], [etapaMontagem], [testeEletrico]);
aviao.salvar();

aviao.detalhes();

// gera relatorio
const relatorio = new Relatorio();
relatorio.gerarRelatorio(aviao);
relatorio.salvarEmArquivo();

// testando carregamento
aviao.carregar();
