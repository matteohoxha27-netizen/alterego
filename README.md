# alterego

Sito vetrina del brand **alteregø** — minimal luxury italiano.

> *Designed for the version of you nobody sees.*
> **LESS IS IDENTITY.**

## Cos'è

Un sito statico, senza build e senza dipendenze: HTML, un foglio di stile, un file JS.
È una **vetrina / lookbook**, non un e-commerce — nessun carrello, nessun prezzo pubblicato.

## Decisioni prese

| Domanda | Decisione |
|---|---|
| Linee mostrate | Tutte e quattro: Premium (uomo), Statement, Women, Sport |
| Lockup del logo | `alteregø` minuscolo con la *o* barrata. `AØ` solo per la linea Sport |
| Stagione | Nessun riferimento ad anno o stagione: le board dicono S/S 2025, il sito è del 2026 |
| Tipo di sito | Vetrina statica su GitHub Pages |
| Prezzi | Non pubblicati — quelli del brand book donna restano interni |

L'analisi degli asset e dell'identità di brand sta in [`BRAND.md`](BRAND.md).

## Struttura

```
alterego/
├── index.html          # home: hero, manifesto, le quattro linee
├── premium.html        # linea uomo minimal luxury
├── statement.html      # capsule t-shirt con slogan
├── women.html          # capsule donna "Capri Attitude"
├── sport.html          # sotto-linea tecnica ALTEREGØ SPORT
├── brand.html          # filosofia, materiali, palette, monogramma
├── contatti.html       # contatti
├── assets/
│   ├── css/style.css   # design system completo (token, componenti)
│   ├── js/main.js      # menu mobile + rivelazione allo scroll
│   └── img/            # immagini del sito + MANIFEST.md che le descrive
├── img/                # board sorgenti — non toccare, non pubblicate
├── .nojekyll           # disabilita Jekyll su GitHub Pages
└── BRAND.md            # analisi interna del brand
```

Il CSS è organizzato per token: palette e scala tipografica stanno tutte in `:root`,
in cima al file. Cambiare un colore del brand significa cambiare una riga sola.

## Sviluppo locale

```bash
cd ~/Desktop/alterego
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy

Pubblicato con **GitHub Pages** dal branch `main` di
`matteohoxha27-netizen/alterego`. Ogni push su `main` aggiorna il sito.

```bash
git add -A && git commit -m "aggiornamento" && git push
```

## Da fare prima di diffonderlo

- [ ] Sostituire gli indirizzi email e il profilo Instagram segnaposto in `contatti.html`
- [ ] Shooting fotografico ad alta risoluzione: le board in `img/` sono a 1280px e
      composite, i ritagli che se ne ricavano sono al limite dell'usabile
- [ ] Decidere se registrare un dominio proprio al posto di `github.io`
