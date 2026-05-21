# Gerador automatizado de FVS - Edificio Virtus

Sistema local para gerar Fichas de Verificacao de Servicos completas, auditaveis e prontas para impressao/PDF ou exportacao em Word.

## Como usar

1. Abra o arquivo `index.html` no navegador.
2. Selecione o servico desejado.
3. Preencha torre, pavimento, frente de servico, equipe, responsaveis e dados da executora.
4. Carregue as logomarcas da Genesi Engenharia e do Virtus, se ainda nao estiverem salvas no navegador.
5. Clique em `Gerar FVS`.
6. Use `Imprimir/PDF` para salvar em PDF.
7. Use `Baixar Word` para gerar um arquivo editavel em formato `.doc`.

## Salvamento em nuvem por lote

O sistema agora possui uma camada opcional de nuvem para salvar FVS, lote, fotos/evidencias e assinaturas desenhadas no celular usando Supabase.

1. Crie um projeto no Supabase.
2. Execute o script `database-supabase.sql` no editor SQL do Supabase.
3. Abra `cloud-config.js`.
4. Preencha `supabaseUrl` e `supabaseAnonKey`.
5. Altere `enabled` para `true`.
6. Publique novamente no GitHub Pages ou abra o sistema no navegador.

Com a nuvem ativa, o botao `Salvar FVS` salva no historico local e tambem sincroniza a inspecao online. O campo `Lote da inspecao` permite agrupar fichas por lote, pavimento, frente ou pacote executivo.

## Observacao sobre a versao analisada

O arquivo `FVS_Virtus_Sistema.html` enviado em Downloads foi analisado. Foram aproveitados o conceito de cabecalho corporativo, indicadores, catalogo por etapa e historico de geracao. A chamada externa de IA no navegador foi removida da solucao final, porque depende de internet, falha por CORS/autenticacao e nao e adequada para expor uma rotina de geracao tecnica de obra diretamente no frontend.

## Conteudo da FVS

Cada ficha inclui:

- Cabecalho completo da obra.
- Cabecalho com logomarca da Genesi Engenharia e do Virtus, no padrao de relatorio tecnico.
- Controle documental com codigo, revisao, data e paginacao.
- Matriz de rastreabilidade por torre, pavimento, frente de servico, pacote e registros obrigatorios.
- FVS de projetos, incluindo arquitetura, estrutural, fundacao, instalacoes, linha de vida/EPC, gas, incendio/SPDA, deteccao e alarme, seguranca patrimonial/CFTV, iluminacao, paisagismo, aprovacoes complementares, analise critica, compatibilizacao, liberacao para obra, alteracoes e as built.
- Identificacao tecnica do servico.
- Referencias normativas aplicaveis.
- Materiais e equipamentos.
- Checklist executivo detalhado.
- Preenchimento in loco com status por item: C, NC e NA.
- Controle por lote de inspecao.
- Observacao por item do checklist.
- Painel automatico de nao conformidades quando algum item e marcado como NC.
- Anexos/fotos por evidencia, com nome do arquivo registrado na ficha.
- Assinaturas com nome, data e campo manual para assinar na tela do celular.
- Salvamento local da FVS no historico do navegador.
- Salvamento em nuvem quando configurado.
- Criterios visuais, dimensionais e tecnologicos.
- Controle tecnologico quando aplicavel.
- Liberacao de etapa.
- Nao conformidades e plano de acao corretiva.
- Evidencias obrigatorias.
- Assinaturas.

## Obra configurada

- Obra: Edificio Virtus Boutique Medical e Empresarial
- Local: Petrolina/PE
- Construtora: Genesi Engenharia
- Tipologia: Torre Medical + Torre Empresarial + Mall + Garagens
- Padrao: Alto padrao corporativo/medico
