// Consegna

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// spesa: bottone + app
let bottone = document.getElementById('bottone');

let app = document.getElementById('app');

const numChildren = 100;

// cliccando il bottone mi appare la griglia
bottone.addEventListener('click', function(){
    app.classList.replace('d-n', 'd-b');

    for (let i = 0; i < numChildren; i++) {
        let childEl = document.createElement('div');
        childEl.classList.add('child');
        childEl.innerHTML = '';
        app.appendChild(childEl);
        childEl.addEventListener('click', function(){
            childEl.classList.add('bg-click');
            console.log(`Div ${i + 1}`);
        })
    }
});
