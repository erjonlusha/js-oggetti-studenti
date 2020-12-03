// js-oggetti-studenti
// Istruzioni:

// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. 
//Stampare a schermo attraverso il for in tutte le proprietà.

// Creare un array di oggetti di studenti. 
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// var esercizio = {
//   repo : "js-oggetti-studenti",
//   istruzioni: ["Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.", "Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome", "Dare la possibilità all'utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età." ],
//   augurio: "che la forza degli oggetti sia con voi :muscle:"
// }

var studente = {
    firstName : "Alessandro",
    lastName : "De rossi",
    age:  25,
}
for (var prop in studente) {
    console.log(studente[prop]);
} 

var studenti = [
    studente = {
    firstName : "Alessio",
    lastName : "De Marco",
    age:  25
},
    studente = {
    firstName : "Matteo",
    lastName : "Rossi",
    age:  26
},
    studente = {
    firstName : "Mario",
    lastName : "Bianchi",
    age:  28
},
    studente = {
    firstName : "Luigi",
    lastName : "Neri",
    age:  25
},
    studente = {
    firstName : "Fabrizio",
    lastName : "De Andrè",
    age:  30
}
]

// for (var key in studenti) {
//     console.log(studenti[key]);

// } 

var name = prompt("Inserisci nome");
var surname = prompt("Inserisci cognome");
var age = prompt("Inserisci età");
var studente2 = {
    firstName : prompt("Inserisci nome"),
    lastName : prompt("Inserisci cognome"),
    age:  Number(prompt("Inserisci età")),
}

studenti.push(studente2);

for (var key in studenti) {
     document.getElementById("paragrafo").innerHTML += key + ": " + studente.firstName + " " + studente.lastName + "<br>";
    // for (var key in studente) {
    //  //console.log(studenti[key]);
    // document.getElementById("paragrafo").innerHTML += ": " + studente.firstName + "<br>";
//}
} 