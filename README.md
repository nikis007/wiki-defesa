# Wiki de Defesa

Wiki enciclopédica militar de acesso público. Conteúdo gerado e validado pelo agente **Analista de Defesa**.

## Adicionando uma página

1. Crie o arquivo Markdown no diretório da categoria apropriada:
   - `docs/blindados/` para MBTs, IFVs, APCs
   - `docs/aviacao/` para aviões
   - `docs/marinha/` para embarcações
   - `docs/misseis/` para mísseis
   - `docs/drones/` para VANTs
   - `docs/radares/` para sistemas de radar
   - `docs/espaco/` para sistemas espaciais

2. Use o frontmatter padrão:
```
sidebar_position: <número>
title: <nome do sistema>
description: <descrição curta, 1 linha>
```

3. Adicione o `id` da página no array `items` do `sidebars.js` dentro da categoria correspondente.

4. Commite. O deploy é automático.

## Padrão de conteúdo

Cada página segue seções padronizadas:
- Visão geral
- Histórico de desenvolvimento
- Especificações técnicas (tabela)
- Sistema de controle de tiro / eletrônica
- Operadores confirmados
- Histórico operacional público
- Comparação com concorrentes
- Fontes consultadas (com idioma original)
