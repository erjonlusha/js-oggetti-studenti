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
    {
    firstName : "Alessio",
    lastName : "De Marco",
    age:  25
},
    {
    firstName : "Matteo",
    lastName : "Rossi",
    age:  26
},
    {
    firstName : "Mario",
    lastName : "Bianchi",
    age:  28
},
    {
    firstName : "Luigi",
    lastName : "Neri",
    age:  25
},
    {
    firstName : "Fabrizio",
    lastName : "De Andrè",
    age:  30
}
]

//console.log(studenti);
for (var prop in studenti) {
    console.log(studenti[prop].firstName, studenti[prop].lastName);
} 

var name = prompt("Inserisci nome");
var surname = prompt("Inserisci cognome");
var age = prompt("Inserisci età");