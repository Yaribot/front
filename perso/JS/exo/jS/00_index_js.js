// alert('jS Okay'); Pour vérifier que mon fichier jS est bien relier à mon HTML.

/* Syntaxe de base */

// Deux slash pour faire un commentaire uniligne

/* 
    Ici je peux faire un commentaire 
    sur plusieurs lignes
*/

// -- 1 : Déclaration d'une variable en jS
var Prenom;

// -- 2 : Affecter une valeur 
var Prenom = "Alpha";

// -- 3 : Une instruction se termine TOUJOURS par un point-virgulr, aussi il est possible d'écrire plisieurs instruction sur une seule ligne
var instruction_1;
var instruction_2, instruction_3;

//-- 4 : Afficher une boite de dialogue (2 façons)
alert("WOW ! Tu es sur ma page !");
window.alert("WOW ! Tu es sur ma page !");

// -- 5 : Afficher dans la console (ici, la valeur de ma variable Prenom)
console.log(Prenom);

// -- 6 : Afficherdu texte dans une page web
document.write("Bonjour à tous !");

// -- 7 : Demander à l'utilisateur une valeur (2 façons)
var retournerValeur = window.prompt("Question : on est quel jour ? ", "Saisissez lz jouir de la semaine");
var retourneValeur = prompt("Question : on est quel jour ? ", "Saisissez lz jouir de la semaine");

// -- 8 : Attention le JS est sensible à la casse (case sensitive)
// mavariable = /=maVariable

// -- 9 : Une variable ne peut pas commencer par un chiffre, ne doit  contenir que des carctères alphanumériques, et ne peut être un mot réservé (var, for... des éléments natifs du language JS)
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s

// -- 10 : Une variable peut être déclarée de façon explicite :
var prenom = "Alpha";
//--ou implicite :
prenom = "Alpha";

// -- 1. Chaîne de caractère (string)
var vacances = "2017";
var destination = "Guadaljara";

// -- 2. Un nombre entier (integer)
var annee = 2017;

// -- 3. Un nombre décimal (float)
var nombre_a_virgule = -5.32;

// --4. Un booléan (boolean = VRAI/FAUX = TRUE/FALSE)
var unBoolean = false; //--true

// --5. Les Constante 
/* La déclaration const permet de créer une constante accessible uniquement en lecture. Contrairement à une variable, sa valeur ne peut être modifiée par réaffectation plus bas dans le code.
Une constante ne peut pas être déclarée à nouveau dans le même scripte.
*/

//Par convention les constantes sont en majuscules
const PAYS = "France";

/*===================================================== */

// Intro JS & Algo

/*==========================================================================  
                        LA CONCATENATION
==========================================================================*/

// 1er exemple
var annee = 2017;
var mois = 3;
var calcul = annee + '/' + mois;
// console.log(calcul);

document.write(calcul + "<br>");

//Je réaffecte une valeur à ma variable mois
mois = "7";
var calcul = annee + '/' + mois;
console.log(calcul);
document.write(calcul + "<br>");

// 2ème exemple
var DebutDePhrase = "Aujourd'hui ";
var NombreDeStagiaires = " 9 ";
var SuiteDePhrase = " stagiaires ";
var FinDePhrase = " sont présent.<br>";

// Nous souhaitons maintenant, grâce à la concaténation, afficher tout ce petit monde, en un seul morceau!
document.write(DebutDePhrase + NombreDeStagiaires + SuiteDePhrase + FinDePhrase);

/* ---------------------
EXERCICE :
Créez une concaténation à partir des éléments suivants :
---------------------- */
var phrase1 = "Je m'appelle ";
var phrase2 = "Sandra et j'ai ";
var age = 375;
var phrase3 = " ans !";

//solution
console.log(phrase1 + phrase2 + age + phrase3);
document.write(phrase1 + phrase2 + age + phrase3);

/* -------------------------------
    LES OPERATEURS ARITHMETIQUES
-------------------------------- */

//######### L'Addition ########
// --- Déclaration de plusieurs variable à la suite 
var nb1, nb2, resultat;

nb1 = 10;
nb2 = 5;
// Addition de nb1 + nb2 avec l'opérateur  "+"
resultat = nb1 + nb2;

//--- Affichage du resultat dans la console
console.log(resultat);

//######### La soustraction ########
//-- Soustraction de nb1 - nb2 avec l'opérateur "-"
resultat = nb1 - nb2;

//--- Affichage du resultat dans la console
console.log(resultat);

//######### La Division ########
//-- Division de nb1 / nb2 avec l'opérateur "/"
resultat = nb1 / nb2;

//--- Affichage du resultat dans la console
console.log(resultat);

//######### Le Modulo ########
//-- NB : Le Modulo retourne le reste d'une division
// -- Modulo de nb1 et nb2 avec l'opérateur "%"
nb1 = 11;
resultat = nb1 % nb2;

//--- Affichage du resultat dans la console
console.log(resultat);

/* -------------------------------
LES ECRITURES SIMPLIFIEES
-------------------------------- */

nb1 = 15;
nb1 = nb1 + 5;
console.log(nb1);

nb1 + 5; // -- Ce qui équivaut à écrire nb1 = nb1 + 5;
// -- Ici, j'ai incrémenté et réaffecté
console.log(nb1);

// -- Je peux procédé de la même manière pour les autres opérateurs arithmétique : " + ", " -", " / ", " * ", " % "

/* -------------------------------
INCREMENTATION & DECREMENTATION
-------------------------------- */

var nb1 = 1;
nb1 = nb1 + 1;

//Affichage dans la console
console.log(nb1);

// Ecriture simplifié
nb1++
console.log(nb1);

// ############ Décrémentation ############ //
nb1 = nb1 - 1;

//Affichage dans la console
console.log(nb1);

// Ecriture simplifié
nb1--
console.log(nb1);

/* -------------------------------
LES CONDITIONS
-------------------------------- */

var MajoriteFR = 18;

if (MajoriteFR >= 18) { //si ma condition est vrai (boolean = TRUE/ VRAI)
    alert("Bienvenue");
} else { // sinon => ma condition est fause (boolean = FALSE/FAUX)
    alert("Allez voir ailleurs !");
}

/* -------------------------------
EXERCICE
Créer une fonction permettant de vérifier l'age d'un visiteur.
S'il a la majorité légale, alors je lui souhaite la bienvenue, sinon, je fait une redirection sur Google après lui
avoir signalé le soucis.
-------------------------------- */

/* CORRECTION */

// 1 --- Déclaration de la variable de reception :
var age = prompt("Quel age avez vous ?", "<Saisir votre âge>");
// var age = Number(prompt("Quel age avez vous ?", "<Saisir votre âge>"));
//2 --- ma condition 
if (age >= 18) { // si la saisie est = ou supérieur à 18 (TRUE)
    alert("Bienvenue sur mon site");
} else { // Si la saisie est inferieur à 18 (FALSE)
    alert("Vous n'êtes pas majeur");
    document.location.href = "https://www.google.com/";
}