// Consegna

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// spesa: bottone + app
let bottone = document.getElementById('bottone');

let app = document.getElementById('app');

// cliccando il bottone mi appare la griglia
document.addEventListener('click', function(){
    app.classList.replace('d-n', 'd-b');
});

// spesa: mini box child
let child = document.querySelector('child');

document.addEventListener('click', function(){
   child = classList.add('bg-click');
   for (let i = 0; i <= 100; i++) {
    const element = array[i];
    console.log(element);
   }
});

