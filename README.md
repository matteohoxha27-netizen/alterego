# alterego

Sito web del brand **alterego PREMIUM** — minimal luxury streetwear.

> *Everyone has an Alter Ego. Which one are you wearing today?*

## Identità di brand

| | |
|---|---|
| **Stile** | Minimal luxury · dettagli invisibili, impatto eterno · ricami tono su tono · linee pulite e sofisticate · tessuti leggeri e premium |
| **Vibe** | Senza tempo · esclusivo · sottile · ricercato · alta moda |
| **Payoff** | LESS IS IDENTITY. |

### Palette

| Colore | Hex |
|---|---|
| Sand | `#C9C1B6` |
| Off-white | `#FAF9F7` |
| Taupe | `#A2988C` |
| Navy | `#1B2438` |
| Black | `#1A1A1A` |

## Struttura

```
alterego/
├── index.html          # homepage
├── assets/
│   ├── css/            # fogli di stile
│   ├── js/             # script
│   └── img/            # immagini ottimizzate per il sito
├── img/                # sorgenti fotografiche (moodboard, mockup prodotto)
├── .nojekyll           # disabilita Jekyll su GitHub Pages
└── README.md
```

## Sviluppo locale

```bash
cd ~/Desktop/alterego
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy

Il sito è pubblicato con **GitHub Pages** dal branch `main`.
Ogni `git push` sul branch `main` aggiorna il sito online.

```bash
git add -A && git commit -m "aggiornamento" && git push
```
