Test site for scrupping

[gh-pages link](https://practicum-com.github.io/simple-shop_fr/)

# Branches

- branch _main_ - hardcoded product cards and deploy to gh-pages
- branch _dev_ - generate cards from _data.js_ - json array (from csv google
  sheet)

# Development

1. Swith to dev branch. Start dev server

```
npm run dev
```

2. Edit google sheet with products. Export .csv and convert .csv to .json.
3. Past json array to _data.js_
4. Copy <ul> tag content from browser to main branch html
5. Push to gh-pages from main

```
npm run deploy
```
