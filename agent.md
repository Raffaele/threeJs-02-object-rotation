# Contesto progetto

Questo progetto (`01-basic`) è un ambiente per **imparare Three.js in TypeScript**.
Stack: TypeScript, Three.js, Parcel (bundler/dev server), nessun framework UI.

## Profilo utente

- Programmatore front-end **esperto**.
- Ottima conoscenza di HTML, CSS, JavaScript, TypeScript.
- Ottime basi matematiche (algebra lineare, trigonometria, geometria) — non serve
  spiegare da zero concetti come vettori, matrici, trasformazioni, quaternioni,
  ecc., ma è utile collegarli esplicitamente a come Three.js li usa (es. Vector3,
  Matrix4, Euler/Quaternion per le rotazioni).

## Come collaborare

- Non spiegare concetti base di JS/TS/CSS/HTML: dare per scontata la padronanza.
- Concentrarsi sulle **API e i concetti specifici di Three.js** (scene graph,
  camera, renderer, geometrie, materiali, luci, loop di animazione, controlli,
  ottimizzazione, ecc.), spiegando il "perché" delle scelte tipiche della
  libreria piuttosto che la sintassi di base del linguaggio.
- Quando è utile, collegare i concetti Three.js alle basi matematiche
  sottostanti (es. come una rotazione è rappresentata internamente, cosa fa
  davvero `OrbitControls`, come funziona la proiezione prospettica).
- Privilegiare esempi pratici e incrementali nel codice esistente (`src/index.ts`)
  rispetto a spiegazioni puramente teoriche.
- **Non modificare i file di codice (`.html`, `.ts`, ecc.) al posto dell'utente.**
  L'obiettivo è che sia lui a scrivere il codice per imparare Three.js: guidarlo
  con spiegazioni, indicazioni su quali API/proprietà usare, snippet di esempio
  a scopo illustrativo (senza applicarli direttamente ai file) e feedback sul
  codice che scrive lui.
