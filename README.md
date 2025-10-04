# Site static - IT Business

Acest folder conține un site static de prezentare pentru o firmă IT construit cu HTML, CSS și JavaScript.

Fișiere generate:
- `index.html` — pagina principală
- `css/styles.css` — stiluri
- `js/script.js` — interactivitate (meniu mobil, validare formular, smooth scroll)

Cum rulezi local:
1. Deschide fișierul `index.html` în browserul tău (dublu-click sau `Open File`).
2. Pentru dezvoltare cu refresh automat poți folosi un server local (ex: extensia Live Server din VS Code) sau un server simplu:

   PowerShell:

   ```powershell
   # din directorul proiectului
   python -m http.server 8000;
   # apoi deschide http://localhost:8000
   ```

Personalizare rapidă:
- Schimbă numele firmei/logo în `index.html`.
- Ajustează paleta în `css/styles.css` (culoarea principală este #0b5fff).
- Conectează formularul la backend în `js/script.js` (secțiunea simulare trimitere).

Dacă vrei, pot adăuga:
- variante de pagină (portfolio, blog), formulare care trimit email/CRM, sau integrare cu Google Analytics/Meta.
