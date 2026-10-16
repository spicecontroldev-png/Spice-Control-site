# SPICE CONTROL — Landing page

Site estático (HTML, CSS e JavaScript puros) com cenas 3D em three.js. Não precisa de build.

## Estrutura

```
index.html                  página (textos, botões, links)
css/style.css               estilos e cores
js/main.js                  cenas 3D, transições e navegação por pontos
assets/img/                 imagens usadas nas cenas 3D e logo
  cena-laptop.jpg           cena 1 (laptop com dashboard)
  cena-cartoes.jpg          cena 2 (cubo com cartões)
  cena-globo.jpg            cena 4 (globo)
  logo.jpg                  logo oficial (cena 3, símbolo em 3D)
assets/icons/               favicon e ícones
assets/brand/               logo original em alta resolução
vercel.json                 configuração do Vercel
robots.txt  .gitignore
```

## Rodar no computador

Não abra o `index.html` com duplo clique: o 3D carrega imagens e o navegador bloqueia isso em `file://`.
Use um servidor local, dentro da pasta:

```
npx serve .
```

## Publicar no Vercel

1. Suba esta pasta inteira para um repositório no GitHub (o `index.html` fica na raiz).
2. No Vercel: Add New > Project > importe o repositório.
3. Framework Preset: **Other**. Deixe Build Command e Output Directory vazios.
4. Deploy.

Ou pelo terminal, dentro da pasta: `npx vercel` (e `npx vercel --prod` para o endereço final).

## O que editar

- Textos e títulos: `index.html`
- Links do WhatsApp e do Instagram: `index.html` (procure `wa.me` e `instagram.com`)
- Cores e tamanhos: `css/style.css` (variáveis no início do arquivo)
- Cenas, animações e posições do 3D: `js/main.js`
- Trocar uma imagem das cenas: substitua o arquivo em `assets/img/` mantendo o mesmo nome e a mesma proporção

## Dependências externas (carregadas pela internet)

- three.js r128 (cdnjs.cloudflare.com)
- Fonte Archivo (Google Fonts)

## Observação

As imagens das cenas vêm de uma imagem de referência de resolução limitada. Para ficar mais nítido, substitua pelos renders originais em alta resolução.
