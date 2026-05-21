const obra = {
  nome: "Edificio Virtus Boutique Medical e Empresarial",
  local: "Petrolina/PE",
  construtora: "Genesi Engenharia",
  tipologia: "Torre Medical + Torre Empresarial + Mall + Garagens",
  padrao: "Alto padrao corporativo/medico",
};

const baseNormas = [
  "PBQP-H SiAC",
  "ISO 9001",
  "NR-18",
  "Projeto executivo aprovado",
  "Procedimento executivo da obra",
  "Plano da Qualidade da Obra",
];

const services = [
  { code: "FVS-PRJ-001", name: "Recebimento de projeto executivo", stage: "Projetos", sub: "Controle de entrada de documentos", discipline: "Projetos", system: "Gestao de documentos tecnicos", norms: ["ISO 9001", "PBQP-H SiAC", "NBR 13531", "NBR 13532", "Procedimento de controle de projetos"], tech: ["Controle de revisao, emissao, responsavel tecnico, ART/RRT, lista mestra e status de aprovacao."], checklist: ["Projeto recebido por canal oficial", "Arquivo identificado com disciplina, revisao e data", "Responsavel tecnico e ART/RRT verificados quando aplicavel", "Lista mestra atualizada", "Distribuicao controlada para equipe de obra"] },
  { code: "FVS-PRJ-002", name: "Analise critica de projeto", stage: "Projetos", sub: "Verificacao tecnica", discipline: "Projetos", system: "Analise critica multidisciplinar", norms: ["ISO 9001", "PBQP-H SiAC", "NBR 13531", "NBR 15575", "Procedimento de analise critica"], tech: ["Registro de comentarios, pendencias, interferencias, requisitos normativos e decisao de aceite."], checklist: ["Escopo do projeto conferido com contrato e memorial", "Premissas tecnicas verificadas", "Requisitos normativos aplicaveis avaliados", "Pendencias registradas com responsavel e prazo", "Projeto liberado, liberado com ressalva ou devolvido para revisao"] },
  { code: "FVS-PRJ-003", name: "Compatibilizacao de projetos", stage: "Projetos", sub: "Compatibilizacao multidisciplinar", discipline: "Projetos", system: "Arquitetura, estrutura, instalacoes e sistemas especiais", norms: ["ISO 9001", "PBQP-H SiAC", "NBR 13531", "NBR 6492", "NBR 15575", "BIM Execution Plan quando aplicavel"], tech: ["Controle de interferencias, matriz de responsabilidades, revisoes, atas e relatorio de clash quando aplicavel."], checklist: ["Arquitetura, estrutura e instalacoes comparadas", "Interferencias entre disciplinas registradas", "Shafts, furos, prumadas e passagens conferidos", "Alturas, niveis, forros e espacos tecnicos validados", "Ata ou relatorio de compatibilizacao anexado"] },
  { code: "FVS-PRJ-004", name: "Liberacao de projeto para obra", stage: "Projetos", sub: "Liberacao executiva", discipline: "Projetos", system: "Documento liberado para execucao", norms: ["ISO 9001", "PBQP-H SiAC", "Procedimento de controle de documentos", "Plano da Qualidade da Obra"], tech: ["Carimbo de liberacao, lista mestra, rastreabilidade da revisao e comunicacao formal a producao."], checklist: ["Projeto marcado como liberado para obra", "Revisao vigente identificada", "Versoes obsoletas recolhidas ou bloqueadas", "Equipe de producao comunicada", "FVS ou registro de liberacao anexado ao dossie da etapa"] },
  { code: "FVS-PRJ-005", name: "Alteracao de projeto em obra", stage: "Projetos", sub: "Solicitacao e aprovacao de alteracao", discipline: "Projetos", system: "RFI, revisao de projeto e controle de mudanca", norms: ["ISO 9001", "PBQP-H SiAC", "Procedimento de tratamento de mudanca", "Contrato e memorial descritivo"], tech: ["RFI, justificativa tecnica, impacto em prazo/custo/qualidade, aprovacao e revisao emitida."], checklist: ["Solicitacao de alteracao formalizada", "Impactos tecnicos e executivos avaliados", "Projetista/cliente/fiscalizacao envolvidos quando aplicavel", "Revisao atualizada emitida", "Campo executado somente apos liberacao formal"] },
  { code: "FVS-PRJ-006", name: "Projeto de arquitetura", stage: "Projetos", sub: "Arquitetura executiva", discipline: "Arquitetura", system: "Plantas, cortes, fachadas, detalhes e memoriais", norms: ["NBR 6492", "NBR 9050", "NBR 15575", "Codigo de obras aplicavel", "Normas sanitarias para uso medico quando aplicavel"], tech: ["Conferencia de cotas, acessibilidade, ambientes, acabamentos, compatibilizacao e atendimento ao produto."], checklist: ["Plantas, cortes e fachadas consistentes", "Cotas, niveis, eixos, areas e pe-direitos conferidos", "Acessibilidade, sanitarios PCD, circulacoes e rotas de fuga avaliadas", "Layout medico/corporativo compatibilizado com normas sanitarias quando aplicavel", "Acabamentos, paginações, esquadrias e detalhes compatibilizados com memorial", "Shafts, forros, casas tecnicas e espacos de manutencao previstos", "Detalhes executivos suficientes para obra e sem pendencia critica"] },
  { code: "FVS-PRJ-007", name: "Projeto estrutural", stage: "Projetos", sub: "Estrutura executiva", discipline: "Estrutural", system: "Concreto armado/protendido/fundacoes", norms: ["NBR 6118", "NBR 6122", "NBR 14931", "NBR 8681", "NBR 6120"], tech: ["Conferencia de revisoes, formas, armaduras, fundacoes, cargas, detalhes construtivos e compatibilizacao com arquitetura/instalacoes."], checklist: ["Plantas de forma e armadura coerentes entre si", "Cargas, sobrecargas e premissas de uso compatibilizadas com arquitetura", "Detalhes de ligacao, ancoragem, emendas e cobrimento indicados", "Furos, inserts, shafts, nichos e passagens compatibilizados", "Juntas, etapas de concretagem, escoramento e protensao indicados quando aplicavel", "Fundacoes compatibilizadas com sondagem e cargas", "Observacoes executivas e criterios de controle tecnologico claros"] },
  { code: "FVS-PRJ-008", name: "Projetos de instalacoes prediais", stage: "Projetos", sub: "Instalacoes executivas", discipline: "Instalacoes", system: "Hidrossanitario, eletrica, SPDA, dados, CFTV, PPCI, gases medicinais e climatizacao", norms: ["NBR 5410", "NBR 5419", "NBR 5626", "NBR 8160", "NBR 10844", "NBR 13714", "NBR 12188", "NBR 16401"], tech: ["Compatibilizacao de shafts, prumadas, casas tecnicas, cargas, pontos, pressurizacao, drenagem, testes e comissionamento."], checklist: ["Pontos e prumadas coerentes com arquitetura e uso dos ambientes", "Shafts e espacos tecnicos suficientes para montagem e manutencao", "Quadros, equipamentos, casas tecnicas e rotas de infraestrutura posicionados", "Cargas, diametros, vazoes, pressoes, circuitos e protecoes definidos", "Interferencias com estrutura, forros e fachadas tratadas", "Especificacoes, memoriais, diagramas e detalhes completos", "Testes, ensaios, comissionamento e criterios de aceite indicados"] },
  { code: "FVS-PRJ-009", name: "Projeto de fachada e esquadrias", stage: "Projetos", sub: "Fachada, pele de vidro, ACM e esquadrias", discipline: "Fachada", system: "Envoltoria e vedacoes externas", norms: ["NBR 10821", "NBR 7199", "NBR 15575", "NBR 6123", "NR-35", "Manual do fabricante"], tech: ["Controle de modulacao, ancoragem, cargas de vento, estanqueidade, juntas, detalhes de arremate e manutencao."], checklist: ["Modulacao compatibilizada com estrutura e arquitetura", "Detalhes de fixacao e ancoragem definidos", "Vidros e perfis especificados", "Juntas, rufos, pingadeiras e vedacoes detalhados", "Acesso para montagem e manutencao avaliado"] },
  { code: "FVS-PRJ-010", name: "As built de projetos", stage: "Projetos", sub: "Registro conforme construido", discipline: "Projetos", system: "As built multidisciplinar", norms: ["ISO 9001", "PBQP-H SiAC", "NBR 14645", "NBR 14037", "NBR 5674"], tech: ["Controle de alteracoes executadas, revisoes finais, arquivos editaveis, PDFs, memoriais e dossie de entrega."], checklist: ["Alteracoes de campo consolidadas", "Projetos revisados por disciplina", "Arquivos digitais e PDFs organizados", "Memoriais e manuais compatibilizados", "Pacote final aprovado para entrega"] },
  { code: "FVS-PRJ-011", name: "Projeto de fundacao", stage: "Projetos", sub: "Fundacoes executivas", discipline: "Fundacao", system: "Sondagem, fundacoes profundas, rasas, blocos, baldrames e radier", norms: ["NBR 6122", "NBR 6484", "NBR 6118", "NBR 14931", "Relatorio geotecnico"], tech: ["Conferencia de compatibilidade entre sondagem, cargas, locacao, cotas, detalhes executivos, memoriais e criterios de controle tecnologico."], checklist: ["Relatorio de sondagem considerado na solucao", "Tipo de fundacao coerente com projeto estrutural e geotecnia", "Locacao, cotas, niveis e eixos definidos", "Detalhes de armadura, arranques e cobrimentos indicados", "Criterios de execucao, ensaio e liberacao definidos"] },
  { code: "FVS-PRJ-012", name: "Projeto de linha de vida, bandeja de protecao e equipamento coletivo", stage: "Projetos", sub: "Protecao coletiva e acesso seguro", discipline: "Seguranca", system: "Linha de vida, ancoragens, bandejas, guarda-corpos, plataformas e EPC", norms: ["NR-18", "NR-35", "NBR 16325", "NBR 16489", "Manual do fabricante"], tech: ["Conferencia de memoria de calculo, pontos de ancoragem, cargas, sequencia de montagem, ART/RRT e plano de manutencao/inspecao."], checklist: ["Memorial de calculo e ART/RRT do sistema apresentados", "Pontos de ancoragem e cargas compatibilizados com estrutura", "Bandejas, guarda-corpos, plataformas e protecoes dimensionados", "Sequencia de montagem, uso, remanejamento e desmontagem definida", "Critérios de inspeção inicial, periodica e apos eventos criticos documentados", "Trechos de acesso, zonas de queda e interferencias com fachada avaliados", "Liberacao de uso vinculada a registro formal de montagem"] },
  { code: "FVS-PRJ-013", name: "Projeto de gas", stage: "Projetos", sub: "Instalacao de gas combustivel", discipline: "Instalacoes", system: "Rede de gas, abrigo, medicao, ventilacao e seguranca", norms: ["NBR 15526", "NBR 13523", "NBR 15358", "Corpo de Bombeiros PE", "Concessionaria/local aplicavel"], tech: ["Conferencia de dimensionamento, ventilacao, abrigo, materiais, trajeto, estanqueidade, protecoes e pontos de consumo."], checklist: ["Trajeto da rede compatibilizado com arquitetura e estrutura", "Abrigo, reguladores e medidores posicionados corretamente", "Ventilacao permanente prevista", "Materiais, conexoes e protecoes especificados", "Teste de estanqueidade e criterios de comissionamento indicados"] },
  { code: "FVS-PRJ-014", name: "Projeto de instalacoes de combate a incendio e SPDA", stage: "Projetos", sub: "PPCI e protecao contra descargas atmosfericas", discipline: "PPCI / SPDA", system: "Hidrantes, sprinklers, extintores, sinalizacao, rotas, aterramento, captores e descidas", norms: ["NBR 13714", "NBR 10897", "NBR 12693", "NBR 13434", "NBR 5419", "IT Corpo de Bombeiros PE"], tech: ["Compatibilizacao de reserva tecnica, bombas, pressao, vazao, caminhamento de fuga, sinalizacao, aterramento, equipotencializacao e laudos."], checklist: ["Sistema aprovado conforme exigencias do Corpo de Bombeiros", "Bombas, reservatorios e prumadas dimensionados", "Rotas de fuga, extintores e sinalizacao compatibilizados", "Malha de aterramento e descidas do SPDA definidas", "Testes, laudos e comissionamento especificados"] },
  { code: "FVS-PRJ-015", name: "Projeto de deteccao e alarme", stage: "Projetos", sub: "Sistema de deteccao e alarme de incendio", discipline: "PPCI", system: "Central, detectores, acionadores, sirenes, modulos e infraestrutura", norms: ["NBR 17240", "NBR 5410", "IT Corpo de Bombeiros PE", "Manual do fabricante"], tech: ["Conferencia de cobertura, zonas, enderecamento, autonomia, infraestrutura, interface com PPCI e comissionamento."], checklist: ["Central e zonas/endereco definidos", "Detectores e acionadores posicionados conforme risco e layout", "Sirenes/audiovisuais com cobertura adequada", "Infraestrutura eletrica e logica compatibilizada", "Plano de teste, comissionamento e aceite indicado"] },
  { code: "FVS-PRJ-016", name: "Projeto de seguranca patrimonial e CFTV", stage: "Projetos", sub: "Seguranca eletronica", discipline: "Seguranca", system: "CFTV, controle de acesso, infraestrutura, gravacao e monitoramento", norms: ["NBR 5410", "NBR 14565", "LGPD quando aplicavel", "Manual do fabricante"], tech: ["Conferencia de cobertura de cameras, angulos, armazenamento, rede, alimentacao, controle de acesso e integracao com operacao predial."], checklist: ["Cameras posicionadas conforme areas criticas", "Angulos de visao e pontos cegos avaliados", "Rede, racks, alimentacao e nobreak dimensionados", "Controle de acesso compatibilizado com fluxos", "Requisitos de gravacao, acesso e manutencao definidos"] },
  { code: "FVS-PRJ-017", name: "Projeto de iluminacao ou luminotecnica", stage: "Projetos", sub: "Iluminacao tecnica e decorativa", discipline: "Instalacoes eletricas", system: "Luminarias, comandos, circuitos, emergencia, fachadas e areas comuns", norms: ["NBR ISO/CIE 8995-1", "NBR 5410", "NBR 10898", "NBR 15575", "Manual do fabricante"], tech: ["Conferencia de niveis de iluminancia, circuitos, comandos, eficiencia, emergencia, compatibilizacao com forros e arquitetura."], checklist: ["Niveis de iluminancia compativeis com uso medico/corporativo", "Luminarias e comandos especificados", "Circuitos e cargas compatibilizados com eletrica", "Iluminacao de emergencia prevista quando aplicavel", "Forros, sancas, fachadas e detalhes arquitetonicos compatibilizados"] },
  { code: "FVS-PRJ-018", name: "Projeto de paisagismo", stage: "Projetos", sub: "Paisagismo e areas externas", discipline: "Paisagismo", system: "Especies vegetais, solo, irrigacao, drenagem, mobiliario e acabamentos externos", norms: ["Projeto paisagistico", "NBR 9050", "NBR 10844", "Manual de manutencao", "Normas municipais aplicaveis"], tech: ["Conferencia de especies, substrato, drenagem, irrigacao, acessibilidade, manutencao e compatibilizacao com urbanizacao."], checklist: ["Especies compatibilizadas com clima e manutencao", "Canteiros, jardineiras e drenagem detalhados", "Irrigacao e pontos de agua previstos", "Circulacoes e acessibilidade mantidas", "Manual de manutencao e periodo de pega definidos"] },
  { code: "FVS-PRJ-019", name: "Projetos complementares para aprovacao", stage: "Projetos", sub: "Aprovacoes ambientais, urbanisticas e complementares", discipline: "Projetos complementares", system: "PGRCC, memorial ambiental, arborizacao, PGRS, RITUR, EIV, PGRS demolicao e obra", norms: ["Legislacao municipal aplicavel", "CONAMA aplicavel", "Politica Nacional de Residuos Solidos", "Normas ambientais locais", "Exigencias de orgaos licenciadores"], tech: ["Controle de protocolo, escopo, responsaveis tecnicos, ART/RRT, condicionantes, aprovacoes e validade documental."], checklist: ["PGRCC e PGRS compatibilizados com metodo executivo e fases da obra", "Memorial descritivo ambiental revisado e coerente com implantacao", "Arborizacao, supressao, compensacao ou transplante documentados quando aplicavel", "RITUR/EIV e demais estudos protocolados quando exigidos", "PGRS de demolicao e PGRS de obra separados quando aplicavel", "Condicionantes, prazos, licencas e aprovacoes monitorados", "Evidencias de protocolo e aceite arquivadas no dossie do empreendimento"] },
  { code: "FVS-SPR-001", name: "Tapume", stage: "Servicos preliminares", sub: "Fechamento do canteiro", discipline: "Infraestrutura", system: "Vedacao provisoria", norms: ["NR-18", "NBR 7678"], tech: ["Verificacao de estabilidade, fixacao e sinalizacao de seguranca."], checklist: ["Alinhamento conforme implantacao aprovada", "Altura e fechamento continuo conforme projeto de canteiro", "Fixacoes firmes, sem elementos soltos ou pontiagudos", "Portoes de acesso identificados e controlados", "Sinalizacao de seguranca visivel e conservada"] },
  { code: "FVS-SPR-002", name: "Locacao de obra", stage: "Servicos preliminares", sub: "Implantacao", discipline: "Topografia", system: "Controle geometrico", norms: ["NBR 13133"], tech: ["Relatorio topografico, coordenadas, cotas e eixos de referencia."], checklist: ["RN implantado e protegido", "Eixos conferidos com projeto executivo", "Cotas de nivel registradas", "Interferencias identificadas antes da escavacao", "Relatorio topografico anexado"] },
  { code: "FVS-SPR-003", name: "Gabarito", stage: "Servicos preliminares", sub: "Marcacao", discipline: "Topografia", system: "Gabarito fisico", norms: ["NBR 13133"], tech: ["Conferencia de esquadro, eixos, travamento e protecao dos piquetes."], checklist: ["Pontaletes firmes e travados", "Linhas de eixo identificadas", "Esquadro conferido", "Nivel do gabarito registrado", "Protecao contra deslocamento acidental"] },
  { code: "FVS-SPR-004", name: "Canteiro de obras", stage: "Servicos preliminares", sub: "Mobilizacao", discipline: "Seguranca", system: "Instalacoes provisoria", norms: ["NR-18", "NR-24"], tech: ["Inspecao de areas de vivencia, acessos, armazenamento e sinalizacao."], checklist: ["Areas de vivencia instaladas", "Fluxos de materiais e pessoas definidos", "Extintores e sinalizacao posicionados", "Armazenamento segregado por material", "Rotas de emergencia desobstruidas"] },
  { code: "FVS-SPR-005", name: "Ligacoes provisorias", stage: "Servicos preliminares", sub: "Utilidades", discipline: "Instalacoes", system: "Energia, agua e esgoto provisori", norms: ["NR-10", "NR-18", "NBR 5410"], tech: ["Inspecao de protecoes eletricas, aterramento e estanqueidade das redes."], checklist: ["Quadros eletricos protegidos e identificados", "DR e aterramento verificados", "Rede de agua sem vazamentos", "Esgotamento ligado a sistema autorizado", "Cabos elevados ou protegidos contra danos"] },
  { code: "FVS-SPR-006", name: "Terraplenagem", stage: "Servicos preliminares", sub: "Movimento de terra", discipline: "Infraestrutura", system: "Corte, aterro e compactacao", norms: ["NBR 5681", "NBR 7182"], tech: ["Controle de umidade, grau de compactacao, cotas e drenagem provisoria."], checklist: ["Material inadequado removido", "Camadas executadas na espessura especificada", "Umidade dentro da faixa de compactacao", "Grau de compactacao conforme especificacao", "Cotas finais conferidas por topografia"] },
  { code: "FVS-FUN-001", name: "Sondagem", stage: "Fundacoes", sub: "Investigacao geotecnica", discipline: "Fundacao", system: "SPT", norms: ["NBR 6484", "NBR 8036"], tech: ["Boletins SPT, nivel d'agua, amostras e locacao dos furos."], checklist: ["Furos locados conforme plano", "Profundidade atingida conforme criterio tecnico", "Amostras identificadas", "Nivel d'agua registrado", "Boletins assinados pelo responsavel"] },
  { code: "FVS-FUN-002", name: "Melhoramento de solo", stage: "Fundacoes", sub: "Tratamento geotecnico", discipline: "Fundacao", system: "Compactacao/substituicao/reforco", norms: ["NBR 6122", "NBR 7182"], tech: ["Controle de energia de compactacao, granulometria, umidade e capacidade de suporte."], checklist: ["Area liberada pela geotecnia", "Material aprovado antes da aplicacao", "Camadas controladas", "Ensaios de compactacao realizados", "Capacidade de suporte validada"] },
  { code: "FVS-FUN-003", name: "Estaca areia e brita", stage: "Fundacoes", sub: "Elemento de fundacao", discipline: "Fundacao", system: "Estaca granular", norms: ["NBR 6122"], tech: ["Controle de diametro, profundidade, volume, compactacao e verticalidade."], checklist: ["Locacao da estaca conferida", "Diametro e profundidade conforme projeto", "Material granular limpo e rastreado", "Compactacao executada por trecho", "Registro de volume por estaca"] },
  { code: "FVS-FUN-004", name: "Helice segmentada", stage: "Fundacoes", sub: "Estaca moldada in loco", discipline: "Fundacao", system: "Helice segmentada", norms: ["NBR 6122", "NBR 12655"], tech: ["Slump, rastreabilidade do concreto, torque, profundidade e integridade."], checklist: ["Locacao conferida", "Profundidade atingida", "Concretagem continua durante retirada", "Armadura posicionada no prazo", "Boletim de execucao preenchido"] },
  { code: "FVS-FUN-005", name: "Helice continua", stage: "Fundacoes", sub: "Estaca moldada in loco", discipline: "Fundacao", system: "Helice continua monitorada", norms: ["NBR 6122", "NBR 12655"], tech: ["Monitoramento de torque, pressao, velocidade, volume teorico e real."], checklist: ["Equipamento monitorado calibrado", "Profundidade e verticalidade controladas", "Concreto bombeado sem interrupcao", "Volume compativel com projeto", "Relatorio da estaca anexado"] },
  { code: "FVS-FUN-006", name: "Bloco de fundacao", stage: "Fundacoes", sub: "Bloco em concreto armado", discipline: "Fundacao", system: "Concreto armado", norms: ["NBR 6118", "NBR 6122", "NBR 14931", "NBR 12655"], tech: ["Slump, corpos de prova, cobrimento, arranques e cura."], checklist: ["Cava limpa e regularizada", "Forma firme e estanque", "Armadura conforme projeto", "Cobrimento garantido com espacadores", "Concretagem, adensamento e cura controlados"] },
  { code: "FVS-FUN-007", name: "Arranque", stage: "Fundacoes", sub: "Ligacao fundacao-estrutura", discipline: "Estrutural", system: "Armadura de espera", norms: ["NBR 6118", "NBR 14931"], tech: ["Conferencia de posicao, bitola, transpasse, prumo e cobrimento."], checklist: ["Bitolas conforme projeto", "Esperas no prumo e alinhadas", "Comprimento de ancoragem conferido", "Protecao contra deslocamento", "Identificacao do elemento estrutural"] },
  { code: "FVS-FUN-008", name: "Baldrame", stage: "Fundacoes", sub: "Viga baldrame", discipline: "Fundacao", system: "Concreto armado", norms: ["NBR 6118", "NBR 14931", "NBR 12655"], tech: ["Controle de forma, armadura, cobrimento, concreto e cura."], checklist: ["Eixos e niveis conferidos", "Forma estanque e travada", "Armadura e estribos conforme projeto", "Passagens previstas instaladas", "Impermeabilizacao posterior prevista"] },
  { code: "FVS-FUN-009", name: "Radier", stage: "Fundacoes", sub: "Fundacao rasa", discipline: "Fundacao", system: "Laje de fundacao", norms: ["NBR 6118", "NBR 6122", "NBR 14931"], tech: ["Sub-base, nivelamento, armadura, juntas, slump, acabamento e cura."], checklist: ["Subleito compactado e liberado", "Lastro e lona aplicados", "Armadura posicionada em altura correta", "Juntas previstas executadas", "Acabamento superficial conforme especificado"] },
  { code: "FVS-CON-001", name: "Tirantes", stage: "Contencao", sub: "Ancoragem", discipline: "Contencao", system: "Tirante protendido", norms: ["NBR 5629", "NBR 6122", "NR-18"], tech: ["Controle de perfuracao, injecao, protensao, carga de ensaio e alongamento."], checklist: ["Locacao e inclinacao conferidas", "Bainha e cordoalhas rastreadas", "Calda de cimento controlada", "Protensao registrada", "Protecao anticorrosiva executada"] },
  { code: "FVS-CON-002", name: "Solo grampeado", stage: "Contencao", sub: "Reforco de macico", discipline: "Contencao", system: "Grampos, tela e concreto projetado", norms: ["NBR 16920", "NR-18"], tech: ["Controle de perfuracao, injecao, arrancamento e faceamento."], checklist: ["Talude escavado por etapas", "Grampos instalados no comprimento previsto", "Injecao executada sem falhas", "Tela fixada com cobrimento adequado", "Drenos profundos e barbacas executados"] },
  { code: "FVS-CON-003", name: "Concreto projetado", stage: "Contencao", sub: "Faceamento", discipline: "Contencao", system: "Concreto projetado", norms: ["NBR 14931", "NBR 12655"], tech: ["Controle de espessura, aderencia, rebound, cura e resistencia."], checklist: ["Superficie limpa antes da aplicacao", "Tela e insertos posicionados", "Espessura por camada controlada", "Rebound removido", "Cura aplicada apos projecao"] },
  { code: "FVS-CON-004", name: "Viga de coroamento", stage: "Contencao", sub: "Travamento superior", discipline: "Estrutural", system: "Concreto armado", norms: ["NBR 6118", "NBR 14931"], tech: ["Forma, armadura, embutidos, concreto e cura."], checklist: ["Nivel superior conferido", "Armadura ligada aos elementos de contencao", "Forma alinhada e estanque", "Concretagem sem segregacao", "Cura mantida pelo prazo definido"] },
  { code: "FVS-CON-005", name: "Drenagem da contencao", stage: "Contencao", sub: "Drenagem", discipline: "Infraestrutura", system: "Drenos, barbacas e geocompostos", norms: ["NBR 10844", "NR-18"], tech: ["Controle de declividade, geotextil, saidas e fluxo livre."], checklist: ["Barbacas posicionadas conforme projeto", "Geotextil sem rasgos", "Camada drenante limpa", "Tubos com declividade positiva", "Saidas desobstruidas"] },
  { code: "FVS-CON-006", name: "Estaca helice para contencao", stage: "Contencao", sub: "Elemento vertical de contencao", discipline: "Contencao / Fundacao", system: "Estaca helice moldada in loco", norms: ["NBR 6122", "NBR 6118", "NBR 14931", "NBR 12655", "NR-18", "Projeto executivo de contencao"], tech: ["Controle de locacao, verticalidade, profundidade, torque, velocidade de retirada, pressao/volume de concreto, slump, rastreabilidade do concreto, armadura, concretagem continua e boletim de execucao por estaca."], checklist: ["Projeto de contencao, plano de ataque e sequencia executiva liberados", "Locacao topografica da estaca conferida com eixo, cota e identificacao", "Equipamento posicionado, nivelado e com monitoramento/calibracao verificados", "Diametro, profundidade prevista e ficha executiva compatibilizados com o projeto", "Perfuracao executada sem desvio excessivo, colapso ou interferencia nao tratada", "Torque, velocidade de penetracao e profundidade registrados no boletim", "Concreto recebido com nota, lote, horario, Fck, slump e rastreabilidade", "Slump test realizado dentro da faixa especificada antes da concretagem", "Concretagem continua durante a retirada da helice, sem interrupcao critica", "Volume teorico x volume real acompanhado e desvios tecnicamente justificados", "Armadura/gaiola conferida quanto a diametro, comprimento, estribos, cobrimento e limpeza", "Armadura inserida dentro do tempo adequado, no prumo e sem dano ao concreto fresco", "Cota de arrasamento, topo da estaca e excesso de concreto controlados", "Boletim de execucao, fotos, croqui de locacao e registros tecnologicos anexados"] },
  { code: "FVS-CON-007", name: "Estaca raiz para contencao", stage: "Contencao", sub: "Elemento vertical/microestaca de contencao", discipline: "Contencao / Fundacao", system: "Estaca raiz injetada", norms: ["NBR 6122", "NBR 6118", "NBR 14931", "NBR 7680 quando aplicavel", "NR-18", "Projeto executivo de contencao"], tech: ["Controle de locacao, inclinacao/verticalidade, perfuracao revestida, profundidade, limpeza do furo, armadura, calda/argamassa, fator agua/cimento, pressao de injecao, volume injetado, boletim por estaca e ensaios aplicaveis."], checklist: ["Projeto, sequencia executiva e interferencias subterraneas conferidos antes da perfuracao", "Locacao topografica, identificacao da estaca e cota de trabalho verificadas", "Equipamento, hastes, revestimentos, bomba de injecao e manometro inspecionados", "Diametro, profundidade, inclinacao e comprimento de embutimento conferidos com projeto", "Perfuracao executada com revestimento quando necessario e sem perda de estabilidade do furo", "Material escavado observado e comparado com a expectativa geotecnica", "Furo limpo antes da instalacao da armadura e da injecao", "Armadura/tubo manchetado conferido quanto a bitola, comprimento, emendas, centralizadores e cobrimento", "Calda ou argamassa preparada com traco, fator agua/cimento, fluidez e tempo de uso controlados", "Injecao executada de baixo para cima, com pressao e volume registrados por etapa", "Reinjecao ou complementacao realizada quando prevista em projeto/procedimento", "Retirada do revestimento coordenada com a injecao, evitando estrangulamento ou vazios", "Topo, arrasamento, espera e integracao com viga/bloco de coroamento verificados", "Boletim de perfuracao/injecao, consumo de calda, pressao, fotos e croqui anexados"] },
  { code: "FVS-EST-001", name: "Forma", stage: "Estrutura", sub: "Forma estrutural", discipline: "Estrutural", system: "Concreto armado", norms: ["NBR 14931", "NBR 6118"], tech: ["Controle de prumo, nivel, estanqueidade, desmoldante e travamento."], checklist: ["Projeto de forma consultado", "Painel limpo e com desmoldante adequado", "Prumo, nivel e esquadro conferidos", "Travamentos firmes", "Juntas vedadas contra perda de nata"] },
  { code: "FVS-EST-002", name: "Armadura", stage: "Estrutura", sub: "Aco estrutural", discipline: "Estrutural", system: "Concreto armado", norms: ["NBR 6118", "NBR 7480", "NBR 14931"], tech: ["Controle de bitola, espacamento, cobrimento, ancoragem e certificados."], checklist: ["Aco com certificado e lote rastreado", "Bitolas e quantidades conforme projeto", "Espacamentos e estribos conferidos", "Cobrimento garantido", "Armadura limpa, sem oleo ou corrosao prejudicial"] },
  { code: "FVS-EST-003", name: "Concretagem", stage: "Estrutura", sub: "Lancamento de concreto", discipline: "Estrutural", system: "Concreto armado", norms: ["NBR 12655", "NBR 14931", "NBR 5738", "NBR 5739"], tech: ["Slump test, moldagem de corpos de prova, rastreabilidade do caminhao, temperatura, adensamento e cura."], checklist: ["Liberacao de forma e armadura concluida", "Nota fiscal e fck conferidos", "Slump dentro da faixa especificada", "Lancamento sem segregacao", "Adensamento uniforme e cura iniciada"] },
  { code: "FVS-EST-004", name: "Desforma", stage: "Estrutura", sub: "Retirada de formas", discipline: "Estrutural", system: "Concreto armado", norms: ["NBR 14931", "NBR 6118"], tech: ["Controle de idade, resistencia, plano de reescoramento e integridade superficial."], checklist: ["Prazo minimo atendido", "Resistencia liberada pela engenharia", "Reescoramento executado quando previsto", "Retirada sem impacto ao concreto", "Superficie inspecionada apos desforma"] },
  { code: "FVS-EST-005", name: "Cura", stage: "Estrutura", sub: "Cura do concreto", discipline: "Estrutural", system: "Concreto armado", norms: ["NBR 14931", "NBR 12655"], tech: ["Controle de umidade, temperatura, metodo e periodo de cura."], checklist: ["Metodo de cura definido", "Inicio da cura registrado", "Superficie mantida protegida", "Periodo minimo cumprido", "Fissuras plasticas monitoradas"] },
  { code: "FVS-EST-006", name: "Escoramento", stage: "Estrutura", sub: "Escoramento e reescoramento", discipline: "Estrutural", system: "Sistema temporario", norms: ["NBR 15696", "NBR 14931", "NR-18"], tech: ["Controle de capacidade, prumo, bases, travamento e plano de cargas."], checklist: ["Projeto de escoramento disponivel", "Torres montadas sobre base firme", "Prumo e travamento conferidos", "Sequencia de retirada definida", "Inspecao registrada antes da concretagem"] },
  { code: "FVS-EST-007", name: "Protensao", stage: "Estrutura", sub: "Protensao aderente ou nao aderente", discipline: "Estrutural", system: "Concreto protendido", norms: ["NBR 6118", "NBR 14931", "NBR 7483"], tech: ["Controle de cordoalhas, macacos calibrados, forca, alongamento e injecao quando aplicavel."], checklist: ["Cordoalhas rastreadas", "Bainhas e ancoragens posicionadas", "Equipamento com certificado de calibracao", "Alongamento medido e registrado", "Protecao das ancoragens executada"] },
  { code: "FVS-EST-008", name: "Laje", stage: "Estrutura", sub: "Elemento horizontal", discipline: "Estrutural", system: "Concreto armado/protendido", norms: ["NBR 6118", "NBR 14931"], tech: ["Controle de nivel, espessura, armadura negativa, embutidos, concreto e cura."], checklist: ["Nivel de forma conferido", "Armadura positiva e negativa posicionadas", "Passagens e inserts instalados", "Espessura controlada durante concretagem", "Acabamento e cura compatibilizados"] },
  { code: "FVS-EST-009", name: "Pilar", stage: "Estrutura", sub: "Elemento vertical", discipline: "Estrutural", system: "Concreto armado", norms: ["NBR 6118", "NBR 14931"], tech: ["Controle de prumo, dimensoes, armadura, cobrimento, concretagem e desforma."], checklist: ["Arranques conferidos", "Forma no prumo", "Estribos e ganchos conforme projeto", "Janela de limpeza verificada", "Adensamento por camadas executado"] },
  { code: "FVS-EST-010", name: "Viga", stage: "Estrutura", sub: "Elemento horizontal", discipline: "Estrutural", system: "Concreto armado", norms: ["NBR 6118", "NBR 14931"], tech: ["Controle de secao, nivel, armadura, passagens, concreto e cura."], checklist: ["Fundo de viga nivelado", "Armadura longitudinal e estribos conferidos", "Interferencias compatibilizadas", "Cobrimento garantido", "Concretagem integrada a laje quando previsto"] },
  { code: "FVS-EST-011", name: "Escada", stage: "Estrutura", sub: "Elemento de circulacao", discipline: "Estrutural", system: "Concreto armado", norms: ["NBR 6118", "NBR 9050", "NBR 14931"], tech: ["Controle de espelho, piso, largura, nivel, armadura e acabamento."], checklist: ["Geometria dos degraus conferida", "Armadura conforme projeto", "Forma firme e sem deformacao", "Acabamento antiderrapante previsto", "Guarda-corpo provisório instalado quando necessario"] },
  { code: "FVS-ALV-001", name: "Alvenaria de vedacao", stage: "Alvenaria", sub: "Vedacao interna/externa", discipline: "Alvenaria", system: "Blocos ceramicos ou concreto", norms: ["NBR 15270", "NBR 15961", "NBR 15575"], tech: ["Controle de prumo, nivel, juntas, amarracao e vergas."], checklist: ["Blocos aprovados e sem quebras excessivas", "Primeira fiada nivelada", "Juntas preenchidas e regulares", "Amarracao executada", "Passagens de instalacoes preservadas"] },
  { code: "FVS-ALV-002", name: "Encunhamento", stage: "Alvenaria", sub: "Ligacao alvenaria-estrutura", discipline: "Alvenaria", system: "Encunhamento flexivel ou argamassado", norms: ["NBR 15575", "NBR 8545"], tech: ["Controle de prazo, deformacao da estrutura, material e preenchimento."], checklist: ["Prazo apos execucao da alvenaria atendido", "Folga superior uniforme", "Material especificado utilizado", "Preenchimento continuo", "Sem fissuras ou vazios aparentes"] },
  { code: "FVS-ALV-003", name: "Verga", stage: "Alvenaria", sub: "Reforco superior de vao", discipline: "Alvenaria", system: "Concreto armado/pre-moldado", norms: ["NBR 15575", "NBR 6118"], tech: ["Controle de apoio, armadura, nivel e cobrimento."], checklist: ["Comprimento de apoio atendido", "Secao conforme projeto", "Nivel e alinhamento conferidos", "Armadura posicionada", "Cura realizada quando moldada in loco"] },
  { code: "FVS-ALV-004", name: "Contraverga", stage: "Alvenaria", sub: "Reforco inferior de vao", discipline: "Alvenaria", system: "Concreto armado/pre-moldado", norms: ["NBR 15575", "NBR 6118"], tech: ["Controle de apoio, continuidade, nivel e fissuracao."], checklist: ["Comprimento de apoio atendido", "Altura de assentamento conferida", "Elemento alinhado ao vao", "Sem descontinuidades", "Interface preparada para revestimento"] },
  { code: "FVS-IMP-001", name: "Impermeabilizacao de baldrame", stage: "Impermeabilizacao", sub: "Fundacao", discipline: "Impermeabilizacao", system: "Argamassa polimerica/emulsao/asfaltica", norms: ["NBR 9574", "NBR 9575"], tech: ["Controle de preparo, consumo, demaos, cura e protecao mecanica."], checklist: ["Base regularizada e limpa", "Cantos arredondados quando aplicavel", "Numero de demaos conforme fabricante", "Consumo registrado", "Protecao mecanica executada antes do aterro"] },
  { code: "FVS-IMP-002", name: "Impermeabilizacao de reservatorios", stage: "Impermeabilizacao", sub: "Reservatorio", discipline: "Impermeabilizacao", system: "Sistema cimenticio ou membrana", norms: ["NBR 9574", "NBR 9575", "NBR 5626"], tech: ["Teste de estanqueidade, preparo de base, tratamento de juntas e cura."], checklist: ["Substrato sem nichos ou contaminantes", "Meias-canas executadas", "Passagens tratadas", "Teste de estanqueidade realizado", "Laudo e fotos anexados"] },
  { code: "FVS-IMP-003", name: "Impermeabilizacao de lajes", stage: "Impermeabilizacao", sub: "Laje exposta", discipline: "Impermeabilizacao", system: "Manta ou membrana", norms: ["NBR 9574", "NBR 9575"], tech: ["Caimento, aderencia, sobreposicao, arremates e teste de estanqueidade."], checklist: ["Caimento para ralos conferido", "Base regularizada e seca", "Primer aplicado quando previsto", "Arremates em ralos e rodapes executados", "Teste de lamina d'agua registrado"] },
  { code: "FVS-IMP-004", name: "Impermeabilizacao de areas molhadas", stage: "Impermeabilizacao", sub: "Banheiros, copas e areas tecnicas", discipline: "Impermeabilizacao", system: "Manta liquida/cimenticia", norms: ["NBR 9574", "NBR 9575", "NBR 15575"], tech: ["Controle de rodape, ralos, passagens, consumo e estanqueidade."], checklist: ["Ralos chumbados e protegidos", "Rodape impermeavel na altura especificada", "Passagens tratadas", "Demaos cruzadas aplicadas", "Teste de estanqueidade aprovado"] },
  { code: "FVS-IMP-005", name: "Impermeabilizacao com manta", stage: "Impermeabilizacao", sub: "Manta asfaltica ou similar", discipline: "Impermeabilizacao", system: "Manta aderida", norms: ["NBR 9952", "NBR 9574", "NBR 9575"], tech: ["Controle de primer, sobreposicao, maçarico, aderencia e estanqueidade."], checklist: ["Manta com lote e validade conferidos", "Primer seco antes da aplicacao", "Sobreposicao minima atendida", "Sem bolhas ou falhas de aderencia", "Protecao mecanica executada"] },
  { code: "FVS-IMP-006", name: "Impermeabilizacao cristalizante", stage: "Impermeabilizacao", sub: "Tratamento cristalizante", discipline: "Impermeabilizacao", system: "Cristalizante cimenticio", norms: ["NBR 9574", "NBR 9575"], tech: ["Controle de saturacao da base, consumo, cura umida e estanqueidade."], checklist: ["Base saturada sem agua livre", "Mistura conforme fabricante", "Consumo por metro quadrado registrado", "Cura umida mantida", "Teste de estanqueidade aprovado"] },
  { code: "FVS-INS-001", name: "Instalacao hidrossanitaria", stage: "Instalacoes", sub: "Agua fria, esgoto e pluvial", discipline: "Instalacoes", system: "Tubulacoes hidrossanitarias", norms: ["NBR 5626", "NBR 8160", "NBR 10844"], tech: ["Teste de estanqueidade, declividade, pressao e identificacao de prumadas."], checklist: ["Materiais conforme projeto e lote", "Tubos fixados sem tensoes", "Declividades conferidas", "Teste de estanqueidade aprovado", "Pontos protegidos ate acabamento"] },
  { code: "FVS-INS-002", name: "Instalacao eletrica", stage: "Instalacoes", sub: "Baixa tensao", discipline: "Instalacoes eletricas", system: "Eletrodutos, cabos e quadros", norms: ["NBR 5410", "NR-10"], tech: ["Teste de continuidade, isolacao, aterramento, identificacao e torque."], checklist: ["Eletrodutos desobstruidos", "Cabos com secao e cor conforme projeto", "Quadros identificados", "Aperto de conexoes verificado", "Ensaios eletricos registrados"] },
  { code: "FVS-INS-003", name: "SPDA", stage: "Instalacoes", sub: "Protecao contra descargas atmosfericas", discipline: "SPDA", system: "Captor, descidas e aterramento", norms: ["NBR 5419", "NR-10"], tech: ["Continuidade eletrica, medicao de resistencia, conexoes e laudo."], checklist: ["Malha instalada conforme projeto", "Conexoes mecanicas ou soldadas conferidas", "Descidas identificadas", "Equipotencializacao executada", "Laudo de medicao anexado"] },
  { code: "FVS-INS-004", name: "Dados", stage: "Instalacoes", sub: "Cabeamento estruturado", discipline: "Telecom", system: "Rede logica", norms: ["NBR 14565", "TIA/EIA correlatas"], tech: ["Certificacao de pontos, identificacao, raio de curvatura e organizacao de racks."], checklist: ["Infraestrutura limpa e desobstruida", "Cabos lancados sem emendas indevidas", "Pontos identificados", "Patch panel organizado", "Certificacao anexada"] },
  { code: "FVS-INS-005", name: "CFTV", stage: "Instalacoes", sub: "Seguranca eletronica", discipline: "Seguranca", system: "Cameras e infraestrutura", norms: ["NBR 5410", "NBR 14565"], tech: ["Teste de imagem, alimentacao, rede, angulo e gravacao."], checklist: ["Pontos posicionados conforme projeto", "Infraestrutura protegida", "Cameras fixadas e alinhadas", "Imagem testada", "Gravacao e acesso remoto validados"] },
  { code: "FVS-INS-006", name: "Instalacao de incendio", stage: "Instalacoes", sub: "PPCI", discipline: "PPCI", system: "Hidrantes, sprinklers, alarme e sinalizacao", norms: ["NBR 13714", "NBR 10897", "NBR 17240", "IT Corpo de Bombeiros PE"], tech: ["Teste hidrostatico, vazao, pressao, alarme e comissionamento."], checklist: ["Tubulacao pintada e identificada", "Suportes instalados", "Teste hidrostatico aprovado", "Abrigos e equipamentos completos", "Comissionamento registrado"] },
  { code: "FVS-INS-007", name: "Gases medicinais", stage: "Instalacoes", sub: "Rede medicinal", discipline: "Instalacoes especiais", system: "Oxigenio, ar comprimido, vacuo e gases correlatos", norms: ["NBR 12188", "RDC Anvisa aplicavel", "NR-32"], tech: ["Teste de estanqueidade, pureza, identificacao, limpeza e laudo."], checklist: ["Tubos e conexoes especificos rastreados", "Brasagem com purga quando aplicavel", "Rede identificada por gas", "Teste de estanqueidade aprovado", "Laudo tecnico anexado"] },
  { code: "FVS-INS-008", name: "Climatizacao", stage: "Instalacoes", sub: "HVAC", discipline: "Climatizacao", system: "Ar condicionado e ventilacao", norms: ["NBR 16401", "PMOC", "NR-18"], tech: ["Teste de pressao, vacuo, carga de gas, drenagem e balanceamento."], checklist: ["Equipamentos conforme projeto", "Linhas frigorigenas isoladas", "Drenos com caimento", "Teste de pressao e vacuo aprovado", "Start-up registrado"] },
  { code: "FVS-REV-001", name: "Chapisco", stage: "Revestimentos", sub: "Ponte de aderencia", discipline: "Acabamento", system: "Argamassa", norms: ["NBR 7200", "NBR 13281"], tech: ["Controle de base, traco, aderencia, cura e cobertura."], checklist: ["Base limpa e umedecida", "Argamassa dentro do tempo de uso", "Cobertura uniforme", "Sem pulverulencia", "Cura adequada antes do emboço"] },
  { code: "FVS-REV-002", name: "Emboco", stage: "Revestimentos", sub: "Regularizacao", discipline: "Acabamento", system: "Argamassa", norms: ["NBR 7200", "NBR 13749", "NBR 13281"], tech: ["Controle de espessura, prumo, planeza, cura e aderencia."], checklist: ["Taliscas e mestras executadas", "Espessura controlada", "Prumo e planeza conferidos", "Sarrafeamento uniforme", "Cura protegida contra secagem rapida"] },
  { code: "FVS-REV-003", name: "Reboco", stage: "Revestimentos", sub: "Acabamento argamassado", discipline: "Acabamento", system: "Argamassa fina", norms: ["NBR 7200", "NBR 13749"], tech: ["Controle de textura, fissuras, planeza e aderencia."], checklist: ["Base regular e curada", "Acabamento sem ondulacoes", "Cantoneiras e arestas alinhadas", "Sem fissuras aparentes", "Superficie pronta para pintura"] },
  { code: "FVS-REV-004", name: "Gesso", stage: "Revestimentos", sub: "Revestimento interno/forro", discipline: "Acabamento", system: "Gesso liso ou acartonado", norms: ["NBR 15758", "NBR 15575"], tech: ["Controle de nivel, fixacao, juntas, planeza e umidade."], checklist: ["Ambiente protegido de umidade", "Estrutura auxiliar fixada", "Placas alinhadas e niveladas", "Juntas tratadas", "Superficie sem trincas ou manchas"] },
  { code: "FVS-REV-005", name: "Ceramica", stage: "Revestimentos", sub: "Revestimento ceramico", discipline: "Acabamento", system: "Placas ceramicas", norms: ["NBR 13753", "NBR 13754", "NBR 14081"], tech: ["Controle de dupla colagem, juntas, planeza, aderencia e rejunte."], checklist: ["Paginação aprovada", "Argamassa colante correta", "Cordoes esmagados e aderencia conferida", "Juntas uniformes", "Rejunte aplicado apos prazo correto"] },
  { code: "FVS-REV-006", name: "Porcelanato", stage: "Revestimentos", sub: "Piso/revestimento premium", discipline: "Acabamento", system: "Placas porcelanicas", norms: ["NBR 13753", "NBR 14081", "NBR 15575"], tech: ["Controle de nivelamento, junta minima, empeno, aderencia e limpeza final."], checklist: ["Lotes e tonalidades conferidos", "Base nivelada e seca", "Sistema de nivelamento utilizado quando previsto", "Sem dentes perceptiveis", "Protecao aplicada apos assentamento"] },
  { code: "FVS-REV-007", name: "Fachada", stage: "Revestimentos", sub: "Fachada externa", discipline: "Fachada", system: "Revestimento argamassado/ceramico/textura", norms: ["NBR 13755", "NBR 7200", "NR-35"], tech: ["Controle de prumo, juntas, aderencia, ancoragem, estanqueidade e acesso seguro."], checklist: ["Plano de fachada e NR-35 atendidos", "Base tratada", "Juntas de movimentacao executadas", "Aderencia verificada", "Acabamento sem manchas ou desplacamentos"] },
  { code: "FVS-ESQ-001", name: "Esquadria de aluminio", stage: "Esquadrias", sub: "Vedos e caixilhos", discipline: "Esquadrias", system: "Aluminio anodizado/pintado", norms: ["NBR 10821", "NBR 15575"], tech: ["Controle de prumo, nivel, fixacao, vedacao, funcionamento e estanqueidade."], checklist: ["Vao conferido antes da instalacao", "Marcos fixados sem empeno", "Folgas perimetrais vedadas", "Ferragens funcionando", "Teste de estanqueidade quando aplicavel"] },
  { code: "FVS-ESQ-002", name: "Vidro", stage: "Esquadrias", sub: "Envidracamento", discipline: "Esquadrias", system: "Vidro temperado/laminado/insulado", norms: ["NBR 7199", "NBR 14697", "NBR 14698"], tech: ["Controle de tipo, espessura, lapidacao, calcos, silicone e seguranca."], checklist: ["Vidro conforme especificacao", "Bordas sem lascas", "Calcos posicionados", "Silicone compativel aplicado", "Pelicula/identificacao mantida ate entrega"] },
  { code: "FVS-ESQ-003", name: "ACM", stage: "Esquadrias", sub: "Revestimento de fachada", discipline: "Fachada", system: "Paineis ACM", norms: ["NBR 15575", "NR-35", "Manual do fabricante"], tech: ["Controle de subestrutura, juntas, alinhamento, fixacao e dilatacao."], checklist: ["Subestrutura alinhada e protegida", "Paineis sem amassamento", "Juntas uniformes", "Fixacoes conforme fabricante", "Filme removido no prazo recomendado"] },
  { code: "FVS-COB-001", name: "Estrutura de cobertura", stage: "Cobertura", sub: "Estrutura", discipline: "Cobertura", system: "Metalica/madeira/concreto", norms: ["NBR 8800", "NBR 7190", "NR-18"], tech: ["Controle de alinhamento, fixacao, protecao anticorrosiva e estabilidade."], checklist: ["Pecas conforme projeto", "Apoios nivelados", "Fixacoes torquedas", "Protecao anticorrosiva intacta", "Contraventamentos instalados"] },
  { code: "FVS-COB-002", name: "Telhamento", stage: "Cobertura", sub: "Telhas", discipline: "Cobertura", system: "Telha metalica/termoacustica", norms: ["NBR 15575", "Manual do fabricante", "NR-35"], tech: ["Controle de sobreposicao, fixacao, caimento, vedacao e estanqueidade."], checklist: ["Telhas sem danos", "Caimento conforme projeto", "Fixadores com arruela de vedacao", "Sobreposicoes corretas", "Teste visual de estanqueidade realizado"] },
  { code: "FVS-COB-003", name: "Rufos", stage: "Cobertura", sub: "Arremates", discipline: "Cobertura", system: "Chapas metalicas", norms: ["NBR 10844", "Manual do fabricante"], tech: ["Controle de encaixe, selagem, pingadeiras e dilatacao."], checklist: ["Rufos cortados sob medida", "Fixacao sem deformar chapa", "Selante continuo", "Pingadeira funcional", "Sem pontos de retorno de agua"] },
  { code: "FVS-COB-004", name: "Calhas", stage: "Cobertura", sub: "Drenagem pluvial", discipline: "Cobertura", system: "Calhas metalicas/PVC", norms: ["NBR 10844"], tech: ["Controle de declividade, emendas, suportes, vazao e estanqueidade."], checklist: ["Secao conforme projeto", "Declividade positiva", "Emendas vedadas", "Bocais conectados", "Teste com agua sem vazamentos"] },
  { code: "FVS-PIS-001", name: "Contrapiso", stage: "Piso", sub: "Regularizacao", discipline: "Acabamento", system: "Argamassa de contrapiso", norms: ["NBR 13753", "NBR 15575"], tech: ["Controle de nivel, caimento, espessura, cura e aderencia."], checklist: ["Base limpa e preparada", "Taliscas e caimentos definidos", "Espessura conforme projeto", "Acabamento regular", "Cura e protecao executadas"] },
  { code: "FVS-PIS-002", name: "Piso industrial", stage: "Piso", sub: "Alta resistencia", discipline: "Acabamento", system: "Concreto armado ou endurecido", norms: ["NBR 14931", "NBR 12655", "ACI 302 correlata"], tech: ["Slump, fibras, juntas, acabamento mecanico, cura e planicidade."], checklist: ["Sub-base compactada e nivelada", "Armadura/telas posicionadas", "Concreto rastreado", "Juntas serradas no prazo", "Cura quimica ou umida aplicada"] },
  { code: "FVS-PIS-003", name: "Piso intertravado", stage: "Piso", sub: "Pavimento externo", discipline: "Urbanizacao", system: "Blocos intertravados", norms: ["NBR 15953", "NBR 9781"], tech: ["Controle de sub-base, colchao de areia, paginação, compactacao e rejuntamento."], checklist: ["Subleito compactado", "Camada de assentamento uniforme", "Blocos com resistencia especificada", "Arremates travados", "Compactacao final e rejunte executados"] },
  { code: "FVS-URB-001", name: "Drenagem", stage: "Urbanizacao", sub: "Drenagem externa", discipline: "Infraestrutura", system: "Tubos, caixas e dispositivos", norms: ["NBR 10844", "NBR 8890"], tech: ["Controle de declividade, berco, estanqueidade, cotas e limpeza."], checklist: ["Valas escoradas quando necessario", "Berco executado", "Tubos assentados na cota", "Caixas alinhadas e acabadas", "Fluxo testado e rede limpa"] },
  { code: "FVS-URB-002", name: "Pavimentacao", stage: "Urbanizacao", sub: "Vias e acessos", discipline: "Infraestrutura", system: "Pavimento rigido/flexivel", norms: ["DNIT aplicavel", "NBR 7182"], tech: ["Controle de compactacao, espessura, nivelamento, acabamento e drenagem."], checklist: ["Subleito regularizado", "Camadas executadas na espessura prevista", "Compactacao aprovada", "Caimentos conferidos", "Acabamento sem segregacao ou depressao"] },
  { code: "FVS-URB-003", name: "Paisagismo", stage: "Urbanizacao", sub: "Areas verdes", discipline: "Paisagismo", system: "Solo, irrigacao e vegetacao", norms: ["Projeto paisagistico", "Manual de manutencao"], tech: ["Controle de substrato, drenagem, especies, irrigacao e pega das mudas."], checklist: ["Solo preparado", "Especies conforme projeto", "Irrigacao testada", "Mudas sadias e bem tutoradas", "Limpeza final das areas verdes"] },
  { code: "FVS-ENT-001", name: "Comissionamento", stage: "Entrega final", sub: "Validacao de sistemas", discipline: "Comissionamento", system: "Sistemas prediais", norms: ["NBR 5674", "NBR 14037", "ISO 9001"], tech: ["Planos de teste, evidencias, pendencias e aceite formal."], checklist: ["Matriz de sistemas definida", "Testes funcionais executados", "Pendencias registradas", "Documentos tecnicos anexados", "Aceite formal coletado"] },
  { code: "FVS-ENT-002", name: "Testes finais", stage: "Entrega final", sub: "Ensaios e verificacoes", discipline: "Qualidade", system: "Sistemas prediais e acabamento", norms: ["NBR 15575", "NBR 5674", "ISO 9001"], tech: ["Testes de estanqueidade, pressao, funcionamento, seguranca e desempenho."], checklist: ["Ambientes vistoriados", "Sistemas testados", "Nao conformidades abertas", "Correcoes reinspecionadas", "Relatorios anexados"] },
  { code: "FVS-ENT-003", name: "Start-up", stage: "Entrega final", sub: "Partida assistida", discipline: "Comissionamento", system: "Equipamentos prediais", norms: ["Manual do fabricante", "NBR 5674"], tech: ["Registro de parametros, treinamento, garantias e assistencia tecnica."], checklist: ["Fabricante/assistencia presente quando requerido", "Parametros iniciais registrados", "Operacao simulada", "Usuarios treinados", "Garantias e manuais entregues"] },
  { code: "FVS-ENT-004", name: "As built", stage: "Entrega final", sub: "Documentacao final", discipline: "Projetos", system: "Registro conforme construido", norms: ["NBR 14645", "ISO 9001", "Procedimento de projetos"], tech: ["Controle de revisoes, compatibilizacao, evidencias de campo e aprovacao."], checklist: ["Alteracoes de campo consolidadas", "Projetos revisados por disciplina", "Revisoes identificadas", "Arquivos digitais organizados", "Pacote aprovado pela engenharia"] },
  { code: "FVS-ENT-005", name: "Manual do proprietario", stage: "Entrega final", sub: "Documentacao de uso e manutencao", discipline: "Entrega", system: "Manual tecnico", norms: ["NBR 14037", "NBR 5674", "NBR 15575"], tech: ["Controle de garantias, planos de manutencao, fornecedores e orientacoes de uso."], checklist: ["Manual revisado", "Garantias anexadas", "Plano de manutencao incluido", "Contatos tecnicos informados", "Entrega protocolada"] },
  { code: "FVS-ENT-006", name: "Vistoria final", stage: "Entrega final", sub: "Inspecao de aceite", discipline: "Qualidade", system: "Entrega de unidade/area comum", norms: ["NBR 15575", "ISO 9001", "Procedimento de entrega"], tech: ["Checklist de acabamento, funcionamento, limpeza, pendencias e aceite."], checklist: ["Ambiente limpo e acessivel", "Acabamentos sem falhas aparentes", "Equipamentos funcionando", "Pendencias registradas com prazo", "Termo de aceite assinado"] },
];

const genericCriteria = {
  visual: ["Ausencia de fissuras, trincas, manchas, segregacao, corrosao, deformacoes, falhas de acabamento e materiais danificados.", "Superficies limpas, integras, sem vazamentos, desplacamentos, falhas de cobrimento ou partes soltas.", "Identificacao, protecao e sinalizacao compativeis com o padrao executivo da obra."],
  dimensional: ["Prumo, nivel, esquadro, alinhamento, espessura, cobrimento, caimentos e cotas conforme projeto executivo.", "Tolerancias conforme norma aplicavel, projeto, procedimento executivo e aceite da engenharia.", "Conferencia topografica obrigatoria quando houver impacto em eixos, cotas, fachadas, fundacoes ou estrutura."],
  technological: ["Ensaios, certificados, laudos, calibracoes e registros devem estar vinculados ao lote, local, data e responsavel.", "Resultados fora da faixa especificada exigem abertura de nao conformidade, segregacao do trecho e reinspecao.", "Liberacao somente apos evidencias tecnicas compativeis com o risco do servico."],
};

const materials = ["Material principal", "Insumo complementar", "Consumivel/selante/aditivo", "Elemento de fixacao ou acessorio"];
const equipment = ["Equipamento principal", "Ferramentas manuais", "Instrumento de medicao", "EPI/EPC aplicavel", "Equipamento de acesso quando aplicavel"];

const form = document.getElementById("fvsForm");
const serviceSelect = document.getElementById("serviceSelect");
const codeInput = document.getElementById("codeInput");
const output = document.getElementById("fvsOutput");
const serviceTitle = document.getElementById("serviceTitle");
const serviceMeta = document.getElementById("serviceMeta");
const catalogList = document.getElementById("catalogList");
const historyList = document.getElementById("historyList");
const statServices = document.getElementById("statServices");
const statStages = document.getElementById("statStages");
const statHistory = document.getElementById("statHistory");
const genesiLogoInput = document.getElementById("genesiLogoInput");
const virtusLogoInput = document.getElementById("virtusLogoInput");
const cloudStatus = document.getElementById("cloudStatus");
const cloudSyncBtn = document.getElementById("cloudSyncBtn");
const cloudConfig = window.FVS_CLOUD_CONFIG || {};
const history = loadSavedRecords();
const logoState = {
  genesi: localStorage.getItem("fvsLogoGenesi") || "",
  virtus: localStorage.getItem("fvsLogoVirtus") || "",
};
let currentRecordId = "";

function init() {
  const grouped = groupServices();

  Object.entries(grouped).forEach(([stage, items]) => {
    const group = document.createElement("optgroup");
    group.label = stage;
    items.forEach((service) => {
      const option = document.createElement("option");
      option.value = service.code;
      option.textContent = `${service.code} - ${service.name}`;
      group.appendChild(option);
    });
    serviceSelect.appendChild(group);
  });

  form.elements.date.valueAsDate = new Date();
  serviceSelect.addEventListener("change", syncService);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderFvs();
    addHistory();
  });
  document.getElementById("printBtn").addEventListener("click", () => window.print());
  document.getElementById("copyBtn").addEventListener("click", copyContent);
  document.getElementById("saveFvsBtn").addEventListener("click", saveCurrentFvs);
  cloudSyncBtn?.addEventListener("click", saveCurrentFvsToCloud);
  document.getElementById("downloadBtn").addEventListener("click", downloadWord);
  document.getElementById("newBtn").addEventListener("click", newInspection);
  document.getElementById("clearLogosBtn").addEventListener("click", clearLogos);
  genesiLogoInput.addEventListener("change", (event) => loadLogo(event, "genesi"));
  virtusLogoInput.addEventListener("change", (event) => loadLogo(event, "virtus"));
  form.addEventListener("input", renderFvs);
  output.addEventListener("input", handleFieldInput);
  output.addEventListener("change", handleFieldInput);
  output.addEventListener("click", handleOutputClick);
  renderCatalog();
  renderStats();
  renderHistory();
  updateCloudStatus();
  syncService();
}

function groupServices() {
  return services.reduce((acc, service) => {
    acc[service.stage] = acc[service.stage] || [];
    acc[service.stage].push(service);
    return acc;
  }, {});
}

function currentService() {
  return services.find((service) => service.code === serviceSelect.value) || services[0];
}

function formData() {
  return Object.fromEntries(new FormData(form).entries());
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function syncService() {
  const service = currentService();
  currentRecordId = "";
  codeInput.value = service.code;
  serviceTitle.textContent = service.name;
  serviceMeta.textContent = `${service.stage} | ${service.discipline} | ${service.system}`;
  renderCatalog();
  renderFvs();
}

function renderStats() {
  const stages = Object.keys(groupServices()).length;
  statServices.textContent = services.length;
  statStages.textContent = stages;
  statHistory.textContent = history.length;
}

function loadSavedRecords() {
  try {
    return JSON.parse(localStorage.getItem("fvsSavedRecords") || "[]");
  } catch {
    return [];
  }
}

function persistSavedRecords() {
  localStorage.setItem("fvsSavedRecords", JSON.stringify(history.slice(0, 30)));
}

function renderCatalog() {
  const grouped = groupServices();
  const selected = currentService();
  catalogList.innerHTML = Object.entries(grouped)
    .map(([stage, items]) => {
      const active = stage === selected.stage ? " is-active" : "";
      return `<button type="button" class="catalog-button${active}" data-stage="${escapeHtml(stage)}"><strong>${stage}</strong><span>${items.length}</span></button>`;
    })
    .join("");

  catalogList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const first = services.find((service) => service.stage === button.dataset.stage);
      if (first) {
        serviceSelect.value = first.code;
        syncService();
      }
    });
  });
}

function addHistory() {
  const service = currentService();
  const data = formData();
  const record = {
    id: currentRecordId || makeRecordId(),
    code: cell(data.code),
    name: service.name,
    meta: `${cell(data.tower)} | ${cell(data.floor)} | ${new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}`,
    lot: cell(data.lot),
    serviceCode: service.code,
    snapshot: output.innerHTML,
    fields: collectOutputState(),
    savedAt: new Date().toLocaleString("pt-BR"),
  };
  currentRecordId = record.id;
  history.unshift(record);
  history.splice(8);
  persistSavedRecords();
  renderHistory();
  renderStats();
}

function renderHistory() {
  if (!history.length) {
    historyList.innerHTML = "<p>Nenhuma FVS gerada ainda.</p>";
    return;
  }

  historyList.innerHTML = history
    .map((item, index) => `<button type="button" class="history-button" data-index="${index}"><strong>${item.name}</strong><span>${item.code}<br>${item.meta}<br>${item.savedAt || ""}</span></button>`)
    .join("");

  historyList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = history[Number(button.dataset.index)];
      if (!item) return;
      serviceSelect.value = item.serviceCode;
      output.innerHTML = item.snapshot;
      restoreOutputState(item.fields || {});
      currentRecordId = item.id || "";
      serviceTitle.textContent = item.name;
      serviceMeta.textContent = `Historico carregado | ${item.meta}`;
      renderCatalog();
    });
  });
}

function makeRecordId() {
  return `fvs-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function newInspection() {
  const keep = {
    service: serviceSelect.value,
    revision: form.elements.revision.value,
    tower: form.elements.tower.value,
    shift: form.elements.shift.value,
    weather: form.elements.weather.value,
  };
  form.reset();
  serviceSelect.value = keep.service;
  form.elements.revision.value = keep.revision || "00";
  form.elements.tower.value = keep.tower;
  form.elements.shift.value = keep.shift;
  form.elements.weather.value = keep.weather;
  form.elements.date.valueAsDate = new Date();
  syncService();
}

function cell(value) {
  return value && String(value).trim() ? escapeHtml(value) : "";
}

function blank() {
  return "";
}

function rows(items, mapper) {
  return items.map(mapper).join("");
}

function renderFvs() {
  const service = currentService();
  const data = formData();
  const norms = [...new Set([...baseNormas, ...service.norms])];
  serviceTitle.textContent = service.name;
  output.innerHTML = `
    <header class="report-head report-head-main">
      <div class="report-logo-box">
        <div class="doc-logo-cell">
          ${logoMarkup("genesi", "GE", "Genesi Engenharia")}
        </div>
      </div>
      <div class="report-title-box">
        <span class="doc-kicker">Sistema de Gestao da Qualidade da Obra</span>
        <div class="doc-title">Ficha de Verificacao de Servico - FVS</div>
        <div><strong>Servico:</strong> ${service.name}</div>
        <div><strong>Construtora:</strong> ${obra.construtora} | <strong>Local:</strong> ${obra.local}</div>
        <div class="doc-subtitle">Padrao executivo para controle tecnologico, auditoria e liberacao de etapas</div>
      </div>
      <div class="report-logo-box">
        <div class="doc-logo-cell">
          ${logoMarkup("virtus", "V", "Virtus Boutique")}
        </div>
      </div>
    </header>

    <div class="report-head report-head-control">
      <div class="report-control-box">
        <span class="doc-kicker">Documento</span>
        <div><strong>Codigo:</strong> ${cell(data.code)}</div>
        <div><strong>Revisao:</strong> ${cell(data.revision)}</div>
      </div>
      <div class="report-control-box">
        <span class="doc-kicker">Identificacao da frente</span>
        <div><strong>Torre:</strong> ${cell(data.tower)} | <strong>Local:</strong> ${cell(data.floor)} | <strong>Frente:</strong> ${cell(data.front)}</div>
        <div><strong>Lote:</strong> ${cell(data.lot)}</div>
      </div>
      <div class="report-control-box">
        <span class="doc-kicker">Controle</span>
        <div><strong>Data:</strong> ${cell(data.date)}</div>
        <div><strong>Pagina:</strong> 1 de ___</div>
      </div>
    </div>

    ${section("1. Cabecalho", infoGrid([
      ["Nome da obra", obra.nome],
      ["Local", obra.local],
      ["Tipologia", obra.tipologia],
      ["Padrao", obra.padrao],
      ["Local/Pavimento", cell(data.floor)],
      ["Torre", cell(data.tower)],
      ["Empresa executora", cell(data.contractor)],
      ["Responsavel tecnico", cell(data.engineer)],
      ["Equipe executora", cell(data.crew)],
      ["Inspetor", cell(data.inspector)],
      ["Clima", cell(data.weather)],
      ["Turno", cell(data.shift)],
      ["Frente de servico", cell(data.front)],
      ["Lote da inspecao", cell(data.lot)],
      ["Codigo da FVS", cell(data.code)],
      ["Revisao", cell(data.revision)],
      ["Data", cell(data.date)],
    ]))}

    ${section("2. Controle documental e rastreabilidade", traceabilityBlock(service, data))}

    ${section("3. Identificacao do servico", infoGrid([
      ["Nome tecnico do servico", service.name],
      ["Etapa da obra", service.stage],
      ["Subetapa", service.sub],
      ["Sistema construtivo", service.system],
      ["Disciplina", service.discipline],
      ["Criterio de aplicacao", "Executar, inspecionar, registrar evidencias e liberar somente apos atendimento aos projetos, procedimentos e normas aplicaveis."],
      ["Rastreabilidade minima", "Local, pavimento, eixo, lote de material, equipe, data, responsavel, registros fotograficos e laudos quando aplicavel."],
      ["Condicao para inicio", "Servico anterior aprovado, projetos liberados, materiais conferidos e frente segura para execucao."],
    ]))}

    ${section("4. Referencias normativas", list(norms))}

    ${isProjectService(service) ? section("5. Documentos analisados", projectDocumentsTable(service)) : section("5. Materiais utilizados", table(["Material", "Fabricante", "Lote", "Nota fiscal / certificado", "Validade", "Conforme?"], materials.map((item) => [item, blank(), blank(), blank(), blank(), statusOptions()])))}

    ${isProjectService(service) ? section("6. Recursos e ferramentas de verificacao", projectResourcesTable()) : section("6. Equipamentos utilizados", table(["Equipamento", "Calibracao", "Conservacao", "Certificado", "Inspecao antes do uso", "Funcionamento"], equipment.map((item) => [item, statusOptions("C / NC / NA"), statusOptions("C / NC"), "Anexar quando aplicavel", blank(), statusOptions("Aprovado / Reprovado")])))}

    ${section("7. Checklist executivo completo", checklistTable(service))}

    ${section("8. Registro de campo e automacao", fieldAutomationPanel())}

    ${section("9. Criterios de inspecao", criteriaTable(service))}

    ${section("10. Controle tecnologico", techControl(service))}

    ${section("11. Liberacao de etapa", releaseTable())}

    ${section("12. Nao conformidade e plano de acao corretiva", nonConformityPanel())}

    ${section("13. Evidencias obrigatorias", evidenceTable(service))}

    ${section("14. Assinaturas", signatures())}

    <footer class="doc-footer">
      <span>Documento controlado - Sistema de Gestao da Qualidade | ${obra.construtora}</span>
      <span>FVS gerada para uso executivo em obra, auditoria e rastreabilidade tecnica.</span>
    </footer>
  `;
  updateFieldAutomation();
  setupSignaturePads();
}

function section(title, content) {
  return `<section class="section"><h2>${title}</h2><div class="section-body">${content}</div></section>`;
}

function logoMarkup(type, fallback, alt) {
  const source = logoState[type];
  if (source) {
    return `<img class="report-logo" src="${source}" alt="${alt}" />`;
  }
  const extra = type === "genesi" ? " gold" : "";
  return `<span class="report-logo-fallback${extra}">${fallback}</span>`;
}

function loadLogo(event, type) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    logoState[type] = String(reader.result);
    localStorage.setItem(type === "genesi" ? "fvsLogoGenesi" : "fvsLogoVirtus", logoState[type]);
    renderFvs();
  };
  reader.readAsDataURL(file);
}

function clearLogos() {
  logoState.genesi = "";
  logoState.virtus = "";
  localStorage.removeItem("fvsLogoGenesi");
  localStorage.removeItem("fvsLogoVirtus");
  genesiLogoInput.value = "";
  virtusLogoInput.value = "";
  renderFvs();
}

function handleFieldInput(event) {
  if (event.target?.classList?.contains("photo-input")) {
    const label = event.target.closest("td")?.querySelector(".photo-name");
    if (label) label.textContent = event.target.files?.[0]?.name || "";
    return;
  }
  if (event.target?.classList?.contains("checklist-choice") || event.target?.classList?.contains("checklist-note")) {
    updateFieldAutomation();
  }
}

function handleOutputClick(event) {
  const button = event.target?.closest?.(".clear-signature");
  if (!button) return;
  const box = button.closest(".signature-field");
  const canvas = box?.querySelector(".signature-pad");
  const input = box?.querySelector(".signature-data");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (input) input.value = "";
}

function updateFieldAutomation() {
  const rows = Array.from(output.querySelectorAll(".checklist-row"));
  const total = rows.length;
  let conformes = 0;
  let ncs = 0;
  let nas = 0;
  const ncRows = [];

  rows.forEach((row) => {
    const checked = row.querySelector(".checklist-choice:checked");
    row.classList.remove("row-ok", "row-nc", "row-na");
    if (!checked) return;
    if (checked.value === "C") {
      conformes += 1;
      row.classList.add("row-ok");
    }
    if (checked.value === "NC") {
      ncs += 1;
      row.classList.add("row-nc");
      ncRows.push(row);
    }
    if (checked.value === "NA") {
      nas += 1;
      row.classList.add("row-na");
    }
  });

  setText("autoTotal", total);
  setText("autoConforme", conformes);
  setText("autoNc", ncs);
  setText("autoNa", nas);
  const release = ncs ? "Necessita correcao" : conformes + nas === total && total ? "Liberado" : "Preencher checklist";
  setText("autoRelease", release);
  renderAutoNc(ncRows);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function renderAutoNc(rows) {
  const body = document.getElementById("ncAutoBody");
  if (!body) return;
  const existing = {};
  body.querySelectorAll("tr[data-nc-item]").forEach((tr) => {
    existing[tr.dataset.ncItem] = {
      desc: tr.querySelector(".nc-desc")?.value || "",
      action: tr.querySelector(".nc-action")?.value || "",
      owner: tr.querySelector(".nc-owner")?.value || "",
      date: tr.querySelector(".nc-date")?.value || "",
    };
  });
  if (!rows.length) {
    body.innerHTML = `<tr><td colspan="7" class="placeholder-cell">Nenhuma nao conformidade marcada no checklist.</td></tr>`;
    return;
  }
  body.innerHTML = rows
    .map((row, index) => {
      const item = row.dataset.item || String(index + 1).padStart(2, "0");
      const criterion = row.dataset.criterion || "";
      const note = row.querySelector(".checklist-note")?.value || "";
      const old = existing[item] || {};
      return `<tr data-nc-item="${item}">
        <td>NC-${String(index + 1).padStart(2, "0")}</td>
        <td>${item}</td>
        <td><textarea class="field-input nc-desc" rows="2">${escapeHtml(old.desc || note || criterion)}</textarea></td>
        <td><textarea class="field-input nc-action" rows="2" placeholder="Acao corretiva">${escapeHtml(old.action || "")}</textarea></td>
        <td><input class="field-input nc-owner" type="text" value="${escapeHtml(old.owner || "")}" /></td>
        <td><input class="field-input nc-date" type="date" value="${escapeHtml(old.date || "")}" /></td>
        <td>${statusOptions("Aprovada / Reprovada")}</td>
      </tr>`;
    })
    .join("");
}

function collectOutputState() {
  const state = {};
  output.querySelectorAll("input, textarea, select").forEach((el, index) => {
    const key = elementStateKey(el, index);
    if (el.type === "checkbox" || el.type === "radio") {
      state[key] = el.checked;
    } else if (el.type === "file") {
      state[key] = el.files?.[0]?.name || "";
    } else {
      state[key] = el.value;
    }
  });
  return state;
}

function restoreOutputState(state) {
  output.querySelectorAll("input, textarea, select").forEach((el, index) => {
    const key = elementStateKey(el, index);
    if (!(key in state)) return;
    if (el.type === "checkbox" || el.type === "radio") {
      el.checked = Boolean(state[key]);
    } else if (el.type !== "file") {
      el.value = state[key];
    }
  });
}

function elementStateKey(el, index) {
  return `${el.name || el.className || el.type}-${index}`;
}

async function saveCurrentFvs() {
  addHistory();
  serviceMeta.textContent = "FVS salva no historico local do navegador.";
  if (isCloudReady()) {
    await saveCurrentFvsToCloud();
  }
}

function updateCloudStatus(message, state = "") {
  if (!cloudStatus) return;
  if (message) {
    cloudStatus.textContent = message;
  } else if (isCloudReady()) {
    cloudStatus.textContent = "Nuvem configurada. As FVS podem ser salvas por lote com fotos e assinaturas.";
  } else {
    cloudStatus.textContent = "Nuvem nao configurada. O sistema esta salvando neste aparelho.";
  }
  cloudStatus.dataset.state = state || (isCloudReady() ? "ready" : "local");
  if (cloudSyncBtn) cloudSyncBtn.disabled = !isCloudReady();
}

function isCloudReady() {
  return Boolean(cloudConfig.enabled && cloudConfig.supabaseUrl && cloudConfig.supabaseAnonKey);
}

async function saveCurrentFvsToCloud() {
  if (!isCloudReady()) {
    updateCloudStatus("Configure a nuvem no arquivo cloud-config.js para ativar o salvamento online.", "local");
    return;
  }

  const service = currentService();
  const data = formData();
  const recordId = currentRecordId || makeRecordId();
  currentRecordId = recordId;
  updateCloudStatus("Salvando FVS na nuvem...", "syncing");

  try {
    const uploadedFiles = await uploadEvidenceFiles(recordId);
    await supabaseRequest(`/rest/v1/fvs_inspections?on_conflict=id`, {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify(buildCloudInspection(recordId, service, data)),
    });

    if (uploadedFiles.length) {
      await supabaseRequest("/rest/v1/fvs_files", {
        method: "POST",
        headers: { Prefer: "return=minimal" },
        body: JSON.stringify(uploadedFiles),
      });
    }

    const lotText = data.lot ? ` | lote ${data.lot}` : "";
    updateCloudStatus(`FVS salva na nuvem${lotText}. Fotos vinculadas: ${uploadedFiles.length}.`, "ready");
    serviceMeta.textContent = "FVS salva localmente e sincronizada na nuvem.";
  } catch (error) {
    updateCloudStatus(`Falha ao salvar na nuvem: ${cloudErrorMessage(error)}`, "error");
    serviceMeta.textContent = "FVS salva localmente. A sincronizacao em nuvem falhou.";
  }
}

function buildCloudInspection(recordId, service, data) {
  return {
    id: recordId,
    obra_nome: obra.nome,
    service_code: service.code,
    service_name: service.name,
    lote: data.lot || null,
    torre: data.tower || null,
    local_pavimento: data.floor || null,
    frente: data.front || null,
    data_inspecao: data.date || null,
    status_sugerido: document.getElementById("autoRelease")?.textContent || null,
    form_data: data,
    fvs_state: collectOutputState(),
    html: serializedOutputHtml(),
    updated_at: new Date().toISOString(),
  };
}

async function uploadEvidenceFiles(recordId) {
  const bucket = cloudConfig.evidenceBucket || "fvs-evidencias";
  const files = [];
  const inputs = Array.from(output.querySelectorAll(".photo-input"));

  for (const input of inputs) {
    const file = input.files?.[0];
    if (!file) continue;
    const fieldKey = input.dataset.photo || input.name || "evidencia";
    const storagePath = `${recordId}/${fieldKey}-${Date.now()}-${filenameSafe(file.name)}`;
    await uploadStorageObject(bucket, storagePath, file);
    files.push({
      inspection_id: recordId,
      field_key: fieldKey,
      file_name: file.name,
      file_type: file.type || "application/octet-stream",
      storage_path: storagePath,
      public_url: `${cloudConfig.supabaseUrl.replace(/\/$/, "")}/storage/v1/object/public/${bucket}/${storagePath}`,
    });
  }

  return files;
}

async function uploadStorageObject(bucket, storagePath, file) {
  const baseUrl = cloudConfig.supabaseUrl.replace(/\/$/, "");
  const response = await fetch(`${baseUrl}/storage/v1/object/${bucket}/${storagePath}`, {
    method: "POST",
    headers: {
      apikey: cloudConfig.supabaseAnonKey,
      Authorization: `Bearer ${cloudConfig.supabaseAnonKey}`,
      "Content-Type": file.type || "application/octet-stream",
      "x-upsert": "true",
    },
    body: file,
  });
  if (!response.ok) throw new Error(await response.text());
}

async function supabaseRequest(path, options = {}) {
  const baseUrl = cloudConfig.supabaseUrl.replace(/\/$/, "");
  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      apikey: cloudConfig.supabaseAnonKey,
      Authorization: `Bearer ${cloudConfig.supabaseAnonKey}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  if (!response.ok) throw new Error(await response.text());
  return response;
}

function cloudErrorMessage(error) {
  const text = String(error?.message || error || "erro desconhecido");
  return text.length > 160 ? `${text.slice(0, 157)}...` : text;
}

function infoGrid(items) {
  return `<div class="info-grid">${rows(items, ([label, value]) => `<div class="field"><strong>${label}</strong>${value}</div>`)}</div>`;
}

function list(items) {
  return `<ul class="small-list">${rows(items, (item) => `<li>${item}</li>`)}</ul>`;
}

function table(headers, bodyRows) {
  return `<table><thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead><tbody>${bodyRows.map((row) => `<tr>${row.map((value) => `<td>${value}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}

function isProjectService(service) {
  return service.stage === "Projetos";
}

function projectDocumentsTable(service) {
  const docs = [
    ["Projeto executivo da disciplina", "Projetista / consultor", "Revisao vigente", "PDF e editavel quando aplicavel", statusOptions()],
    ["Memorial descritivo / especificacao tecnica", "Projetista / incorporadora", "Revisao vigente", "Compatibilidade com projeto", statusOptions()],
    ["ART/RRT e responsavel tecnico", "Profissional habilitado", "Numero e data", "Obrigatorio quando aplicavel", statusOptions()],
    ["Lista mestra de projetos", "Qualidade / engenharia", "Controle vigente", "Distribuicao controlada", statusOptions()],
    ["Atas, RFI, comentarios ou relatorio de compatibilizacao", "Engenharia / projetistas", "Registro vinculado", "Pendencias rastreadas", statusOptions()],
  ];

  if (service.code === "FVS-PRJ-019") {
    docs.push(["Protocolos e aprovacoes legais/ambientais", "Orgaos competentes", "Numero do protocolo", "Condicionantes controladas", statusOptions()]);
  }

  return table(["Documento", "Origem", "Revisao / Identificacao", "Criterio de controle", "Status"], docs);
}

function projectResourcesTable() {
  return table(["Recurso", "Aplicacao", "Controle requerido", "Conforme?"], [
    ["Lista mestra / plataforma de documentos", "Confirmar revisao vigente e bloquear versoes obsoletas", "Registro atualizado e rastreavel", statusOptions()],
    ["Matriz de compatibilizacao", "Controlar interferencias entre disciplinas", "Pendencias com responsavel e prazo", statusOptions()],
    ["Visualizador CAD/BIM/PDF", "Conferir modelos, plantas, detalhes e revisoes", "Arquivos oficiais e legiveis", statusOptions()],
    ["Ata de reuniao / RFI / comentario tecnico", "Registrar decisoes e duvidas tecnicas", "Resposta formal antes da liberacao", statusOptions()],
    ["Checklist de liberacao para obra", "Autorizar uso do projeto em campo", "Assinatura da engenharia/qualidade", statusOptions()],
  ]);
}

function statusOptions(label = "C / NC / NA") {
  const options = label.split("/").map((item) => item.trim()).filter(Boolean);
  return `<span class="status-box">${options.map((option) => `<label class="inline-check"><input type="checkbox" class="status-choice" value="${escapeHtml(option)}" />${option}</label>`).join(" ")}</span>`;
}

function checklistStatusOptions(index) {
  return `<span class="status-box checklist-status" data-row="${index}">
    <label class="inline-check"><input type="radio" name="check-${index}" class="status-choice checklist-choice" value="C" />C</label>
    <label class="inline-check"><input type="radio" name="check-${index}" class="status-choice checklist-choice" value="NC" />NC</label>
    <label class="inline-check"><input type="radio" name="check-${index}" class="status-choice checklist-choice" value="NA" />NA</label>
  </span>`;
}

function traceabilityBlock(service, data) {
  return `
    <div class="traceability">
      <div class="field"><strong>Codigo do pacote de servico</strong>${cell(data.code)} | ${service.stage}</div>
      <div class="field"><strong>Lote de inspecao</strong>${cell(data.lot)}</div>
      <div class="field"><strong>Localizacao controlada</strong>${cell(data.tower)} - ${cell(data.floor)} - ${cell(data.front)}</div>
      <div class="field"><strong>Vinculo de qualidade</strong>FVS + fotos + laudos + registros de liberacao</div>
      <div class="field"><strong>Pre-requisito de execucao</strong>Projeto vigente, procedimento aprovado, equipe orientada e servico predecessor liberado.</div>
      <div class="field"><strong>Criterio de bloqueio</strong>Desvio critico de seguranca, norma, projeto, material sem rastreabilidade ou ensaio reprovado.</div>
      <div class="field"><strong>Retencao de registros</strong>Arquivar no dossie da obra por etapa, pavimento, torre, lote e data de inspecao.</div>
    </div>
  `;
}

function checklistTable(service) {
  const common = isProjectService(service)
    ? [
        ["Demanda, escopo e disciplina do projeto formalmente identificados", "Conferencia documental", "Contrato, termo de referencia ou solicitacao aprovada", "Conforme / Nao conforme / NA"],
        ["Revisao vigente confirmada em lista mestra", "Conferencia de codigo, revisao, data e status", "Somente revisao liberada pode seguir para obra", "Conforme / Nao conforme / NA"],
        ["Responsavel tecnico, ART/RRT e autoria do projeto verificados", "Conferencia documental", "Obrigatorio quando aplicavel ao escopo", "Conforme / Nao conforme / NA"],
        ["Compatibilizacao com disciplinas correlatas realizada", "Analise tecnica, matriz de interferencias ou modelo BIM/CAD", "Pendencias registradas e tratadas", "Conforme / Nao conforme / NA"],
        ["Comentarios, RFI ou pendencias tecnicas respondidos", "Rastreio de comunicacoes e atas", "Nao liberar para obra com duvida critica aberta", "Conforme / Nao conforme / NA"],
        ...service.checklist.map((item) => [item, "Analise documental, tecnica e multidisciplinar", "Conforme norma, memorial, contrato e criterio da engenharia", "Conforme / Nao conforme / NA"]),
        ["Projeto apto para distribuicao controlada", "Verificacao de status e carimbo de liberacao", "Liberado / liberado com ressalva / reprovado", "Conforme / Nao conforme / NA"],
        ["Registros anexados ao dossie de projetos", "Arquivamento em pasta ou plataforma oficial", "Rastreabilidade por codigo, revisao, data e responsavel", "Conforme / Nao conforme / NA"],
      ]
    : [
        ["Projetos, revisoes e procedimentos executivos disponiveis na frente de servico", "Conferencia documental", "Ultima revisao aprovada", "Conforme / Nao conforme / NA"],
        ["Servico anterior liberado e registrado", "Verificacao da FVS anterior", "Liberacao formal obrigatoria", "Conforme / Nao conforme / NA"],
        ["Materiais recebidos, identificados e rastreados", "Inspecao visual e documentos", "Certificado/lote quando aplicavel", "Conforme / Nao conforme / NA"],
        ["Equipe orientada quanto ao procedimento, riscos e criterios de aceite", "DDS e entrevista em campo", "Registro obrigatorio", "Conforme / Nao conforme / NA"],
        ["Frente limpa, acessivel, sinalizada e segura", "Inspecao visual", "NR-18 e procedimentos internos", "Conforme / Nao conforme / NA"],
        ...service.checklist.map((item) => [item, "Inspecao em campo, medicao ou registro fotografico", "Conforme projeto, norma e procedimento", "Conforme / Nao conforme / NA"]),
        ["Registros fotograficos antes, durante e depois da execucao", "Fotos georreferenciadas ou identificadas", "Minimo conforme plano da qualidade", "Conforme / Nao conforme / NA"],
        ["Limpeza, protecao e preservacao do servico executado", "Inspecao visual final", "Sem danos, contaminacao ou interferencias", "Conforme / Nao conforme / NA"],
      ];
  const body = common
    .map((row, index) => {
      const item = String(index + 1).padStart(2, "0");
      return `<tr class="checklist-row" data-item="${item}" data-criterion="${escapeHtml(row[0])}">
        <td>${item}</td>
        <td>${row[0]}</td>
        <td>${row[1]}</td>
        <td>${row[2]}</td>
        <td>${checklistStatusOptions(index + 1)}</td>
        <td><textarea class="field-input checklist-note" rows="2" placeholder="Observacao, evidencia ou tratativa"></textarea></td>
      </tr>`;
    })
    .join("");
  return `<table class="checklist-table"><thead><tr><th>Item</th><th>Criterio de inspecao</th><th>Metodo de verificacao</th><th>Tolerancia / aceite</th><th>Status</th><th>Evidencia / observacao</th></tr></thead><tbody>${body}</tbody></table>`;
}

function criteriaTable(service) {
  if (isProjectService(service)) {
    return table(["Tipo", "Criterios obrigatorios"], [
      ["Documentais", "Codigo, revisao, data, prancha, disciplina, responsavel tecnico, ART/RRT, status de emissao e lista mestra devem estar coerentes e rastreaveis."],
      ["Tecnicos", "Solucoes, premissas, memoriais, especificacoes, detalhes, quantitativos criticos e interfaces devem atender contrato, normas aplicaveis e requisitos do empreendimento."],
      ["Compatibilizacao", "Interferencias entre arquitetura, estrutura, fundacoes, instalacoes, fachada, seguranca e operacao predial devem estar resolvidas ou formalmente tratadas antes da liberacao."],
      ["Liberacao", "Projeto somente pode ser utilizado em obra quando estiver com revisao vigente, status liberado e sem pendencia critica aberta."],
    ]);
  }
  return table(["Tipo", "Criterios obrigatorios"], [
    ["Visuais", genericCriteria.visual.join("<br>")],
    ["Dimensionais", genericCriteria.dimensional.join("<br>")],
    ["Tecnologicos", genericCriteria.technological.join("<br>")],
  ]);
}

function techControl(service) {
  const controls = isProjectService(service)
    ? [
        ...service.tech,
        "Controlar revisao vigente, emissao, responsavel tecnico, historico de alteracoes e distribuicao a obra.",
        "Registrar pendencias, decisoes, atas, RFI e liberacoes formais em lista mestra ou plataforma oficial.",
      ]
    : [
        ...service.tech,
        "Registrar responsavel pela amostragem, equipamento utilizado, local, lote, horario e condicao ambiental.",
        "Anexar certificados de calibracao, laudos laboratoriais, boletins de campo e relatorios topograficos quando aplicavel.",
      ];
  const method = isProjectService(service) ? "Analise documental, compatibilizacao tecnica, conferencia de revisao e rastreio de pendencias" : "Ensaio, medicao, verificacao documental ou inspecao em campo";
  const record = isProjectService(service) ? "Lista mestra, ata, RFI, relatorio de compatibilizacao, prancha revisada, ART/RRT ou carimbo de liberacao" : "Laudo, foto, croqui, boletim ou certificado";
  const acceptance = isProjectService(service) ? "Sem pendencia critica aberta e com status formal de aceite/liberacao" : "Conforme especificacao tecnica, norma e projeto";
  return table(["Controle", "Metodo", "Registro requerido", "Aceite"], controls.map((control) => [control, method, record, acceptance]));
}

function fieldAutomationPanel() {
  return `
    <div class="field-dashboard">
      <div class="field-card"><strong>Total de itens</strong><span id="autoTotal">0</span></div>
      <div class="field-card ok"><strong>Conformes</strong><span id="autoConforme">0</span></div>
      <div class="field-card bad"><strong>Nao conformes</strong><span id="autoNc">0</span></div>
      <div class="field-card muted"><strong>Nao aplicaveis</strong><span id="autoNa">0</span></div>
      <div class="field-card"><strong>Status sugerido</strong><span id="autoRelease">Preencher checklist</span></div>
    </div>
    <div class="field-note">
      Ao marcar NC em qualquer item, o sistema cria automaticamente uma linha de nao conformidade para tratativa.
    </div>
  `;
}

function releaseTable() {
  return `
    <div class="approval-grid">
      <div class="approval-card"><strong>Liberado</strong><div class="check-options">${statusOptions("Todos os criterios atendidos")}<br>Data: <input class="mini-input" type="date" /></div></div>
      <div class="approval-card"><strong>Liberado com ressalva</strong><div class="check-options">${statusOptions("Pendencia controlada")}<br>Prazo: <input class="mini-input" type="date" /></div></div>
      <div class="approval-card"><strong>Necessita correcao</strong><div class="check-options">${statusOptions("Abrir plano de acao")}<br>Responsavel: <input class="mini-input" type="text" /></div></div>
      <div class="approval-card"><strong>Reprovado</strong><div class="check-options">${statusOptions("Bloquear etapa seguinte")}<br>Reinspecao: <input class="mini-input" type="date" /></div></div>
    </div>
  `;
}

function nonConformityPanel() {
  return `
    <table class="nc-table">
      <thead><tr><th>NC</th><th>Item</th><th>Descricao objetiva</th><th>Acao corretiva</th><th>Responsavel</th><th>Prazo</th><th>Reinspecao</th></tr></thead>
      <tbody id="ncAutoBody">
        <tr><td colspan="7" class="placeholder-cell">Nenhuma nao conformidade marcada no checklist.</td></tr>
      </tbody>
    </table>
  `;
}

function evidenceTable(service) {
  const evidence = isProjectService(service)
    ? [
        "Projeto/prancha em revisao vigente",
        "Lista mestra de projetos atualizada",
        "ART/RRT ou documento de responsabilidade tecnica",
        "Memorial descritivo, especificacao tecnica ou memoria de calculo quando aplicavel",
        "Ata, RFI, comentario tecnico ou relatorio de compatibilizacao",
        "Registro de liberacao para obra ou devolucao para revisao",
        `Registro especifico do servico: ${service.tech[0]}`,
      ]
    : [
        "Fotos antes, durante e depois",
        "Croquis com localizacao, eixo e pavimento",
        "Anexos de projeto e procedimento",
        "Relatorios laboratoriais quando aplicavel",
        "ART/RRT quando aplicavel",
        "As built quando houver alteracao de campo",
        "Relatorio topografico quando aplicavel",
        `Registro especifico do servico: ${service.tech[0]}`,
      ];
  const trace = isProjectService(service) ? "Codigo do projeto, disciplina, revisao, data, responsavel e status" : "Data, local, pavimento, responsavel, lote e revisao";
  return table(["Evidencia", "Obrigatorio?", "Identificacao/Rastreabilidade", "Anexo/foto"], evidence.map((item, index) => [item, "Sim, quando aplicavel", trace, `<input class="photo-input" type="file" accept="image/*" data-photo="${index + 1}" /><div class="photo-name"></div>`]));
}

function signatures() {
  const people = ["Engenheiro responsavel", "Mestre de obras", "Tecnico de qualidade", "Executor", "Fiscalizacao", "Cliente/condominio"];
  return `<div class="signature-grid">${people.map((person, index) => `<div class="signature signature-field"><strong>${person}</strong><input class="signature-name" type="text" placeholder="Nome" /><input class="signature-date" type="date" /><canvas class="signature-pad" width="320" height="110" data-signature="${index + 1}" aria-label="Assinatura ${person}"></canvas><input class="signature-data" type="hidden" name="signature-${index + 1}" /><button type="button" class="clear-signature">Limpar assinatura</button></div>`).join("")}</div>`;
}

function setupSignaturePads() {
  output.querySelectorAll(".signature-pad").forEach((canvas) => {
    if (canvas.dataset.ready) return;
    canvas.dataset.ready = "true";
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#17232d";
    let drawing = false;

    const position = (event) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: ((event.clientX - rect.left) / rect.width) * canvas.width,
        y: ((event.clientY - rect.top) / rect.height) * canvas.height,
      };
    };

    canvas.addEventListener("pointerdown", (event) => {
      drawing = true;
      canvas.setPointerCapture(event.pointerId);
      const point = position(event);
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
    });

    canvas.addEventListener("pointermove", (event) => {
      if (!drawing) return;
      const point = position(event);
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
    });

    const finish = () => {
      if (!drawing) return;
      drawing = false;
      const input = canvas.closest(".signature-field")?.querySelector(".signature-data");
      if (input) input.value = canvas.toDataURL("image/png");
    };

    canvas.addEventListener("pointerup", finish);
    canvas.addEventListener("pointerleave", finish);
  });
}

async function copyContent() {
  const text = output.innerText;
  await navigator.clipboard.writeText(text);
  serviceMeta.textContent = "Conteudo copiado para a area de transferencia.";
}

function downloadWord() {
  const service = currentService();
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${service.code} - ${service.name}</title><style>${document.querySelector("style")?.innerHTML || ""}${getCssText()}</style></head><body>${serializedOutputHtml()}</body></html>`;
  const blob = new Blob(["\ufeff", html], { type: "application/msword" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${service.code}-${filenameSafe(service.name)}.doc`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function serializedOutputHtml() {
  const clone = output.cloneNode(true);
  const sourceCanvases = Array.from(output.querySelectorAll(".signature-pad"));
  clone.querySelectorAll(".signature-pad").forEach((canvas, index) => {
    const source = sourceCanvases[index];
    const data = source?.closest(".signature-field")?.querySelector(".signature-data")?.value || "";
    const replacement = document.createElement(data ? "img" : "div");
    if (data) {
      replacement.setAttribute("src", data);
      replacement.setAttribute("alt", "Assinatura");
      replacement.className = "signature-image";
    } else {
      replacement.className = "signature-line";
      replacement.textContent = "Assinatura";
    }
    canvas.replaceWith(replacement);
  });
  clone.querySelectorAll("textarea").forEach((el) => {
    el.textContent = el.value;
  });
  clone.querySelectorAll("input").forEach((el) => {
    if (el.type === "checkbox" || el.type === "radio") {
      if (el.checked) el.setAttribute("checked", "checked");
      else el.removeAttribute("checked");
      return;
    }
    if (el.type === "file") {
      const name = el.files?.[0]?.name || el.closest("td")?.querySelector(".photo-name")?.textContent || "";
      const replacement = document.createElement("span");
      replacement.textContent = name;
      el.replaceWith(replacement);
      return;
    }
    el.setAttribute("value", el.value);
  });
  return clone.outerHTML;
}

function filenameSafe(value) {
  return String(value).trim().replace(/[\\/:*?"<>|]+/g, "-").replace(/\s+/g, "-");
}

function getCssText() {
  return Array.from(document.styleSheets)
    .map((sheet) => {
      try {
        return Array.from(sheet.cssRules).map((rule) => rule.cssText).join("\n");
      } catch {
        return "";
      }
    })
    .join("\n");
}

init();
