

//alert('je suis super contente');
// Deux Slash pour faire un commentaire uniligne.

/*
Ici, je peux faire un commentaire
sur plusieurs lignes
*/

// -- 1 : Déclarer une Variable en JS
//var Prenom;

// -- 2 : Affecter une Valeur
//Prenom = "Hugo";

// -- 3 : Une instruction se termine TOUJOURS par un point-virgule, aussi il est possible d'écrire plusieurs
//instructions sur une seule ligne
//instruction_1;
//nstruction_2; 
//instruction_3;

// -- 4 : afficher une boîte de dialogue (2 façons)
//alert("WOW ! Tu es sur ma page !");
//window.alert("WOW ! Tu es sur ma page !");

// -- 5 : Afficher dans la console (ici, la Valeur de ma Variable Prenom)
//console.log(Prenom);

// -- 6 : Afficher du texte dans une page web
//document.write("Bonjour à tous !")

// -- 7 : Demander à l'utilisateur une valeur (2 façons)
//var retourneValeur = window.prompt("Question: on est quel jour ?", "Saisissez le jour de la semaine");
//var retourneValeur = prompt("Question: on est quel jour ?", "Saisissez le jour de la semaine");

// -- 8 : Attention le JS est sensible à la casse (case sensitive)
//mavariable = /= maVariable

// -- 9 : Une variable ne peut pas commender par un chiffre, ne doit contenir que des caractères alphanumériques, et ne
//peut pas être un mot réservé(var, for...des éléments natifs du langage JS)
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s

// -- 10 : une variable peut être déclarée de façon explicite :
var prenom = "Sandra";
// -- ou implicite :
prenom = "Milou"


// -- 1. Chaîne de caratères (string)
var vacances = "2017";
var destination = "Australie";

// -- 2. Un nombre entier (integer ou int)
var annee = 2017;

// -- 3. Un nombre décimal (float)
var nombre_a_virgule = -5.32;

// -- 4. Un booléen (boolean = VRAI/FAUX = TRUE/FALSE)
var unBooleen = false; // -- true

// -- 5. Les Constantes

/* La déclaration const permet de créer une constante accessible uniquement en lecture. Contrairement à une variable sa
valeur ne peut plus être modifiée par réaffectation plus bas dans le code.
Une constante ne peut pas être déclarée à nouveau dans le même script.
*/

// -- Par convention les constantes sont en majuscules
const PAYS = "France";

/*=======================
=========================
=======================*/

// Intro JS & Algo - J2

//===================================================
// NOUVEAUX FICHIERS html & js => 02concaténation.html & 02.js
//===================================================
/* ---------------------
LA CONCATENATION
---------------------- */

// 1er exemple
var annee = 2017;
var mois = 3;
var calcul = annee + mois;
console.log(calcul);
document.write(calcul + "<br>");// d'abord sans le <br> en poursuivant avec le paragraphe suivant

// Je réaffecte une valeur à ma variable mois
mois = "-7";
var calcul2 = annee + mois;
console.log(calcul2);
document.write(calcul2 + "<br>");

// 2ème exemple
var DebutDePhrase = "Aujourd'hui ";
var NombreDeStagiaires = 12;
var SuiteDePhrase = " stagiaires";
var FinDePhrase = " sont présents.<br>";


// -- Nous souhaitons maintenant, grâce à la concaténation, afficher tout ce petit monde, en un seul morceau !

document.write(DebutDePhrase + NombreDeStagiaires + SuiteDePhrase + FinDePhrase);

/* ---------------------
EXERCICE :
Créez une concaténation à partir des éléments suivants :
---------------------- */

var phrase1 = "Je m'appelle ";
var phrase2 = "Sandra et j'ai ";
var age = 375;
var phrase3 = " ans !";

//solution:
console.log(phrase1 + phrase2 + age + phrase3);
document.write(phrase1 + phrase2 + age + phrase3);

//===================================================
// NOUVEAUX FICHIERS html & js 03operateurs.html & 03.js
//===================================================
/* -------------------------------
LES OPERATEURS ARITHMETIQUES
-------------------------------- */
// ######## L'Addition ######## //
// -- Déclaration de plusieurs variables à la suite
var nb1, nb2, resultat;

nb1 = 10;
nb2 = 5;

// -- Addition de nb1 + nb2 avec l'opérateur "+"
resultat = nb1 + nb2;

// -- Affichage du résultat dans la console
console.log(resultat);

// ######## Soustraction ######## //
// -- Soustraction de nb1 - nb2 avec l'opérateur "-"
resultat = nb1 - nb2;

// -- Affichage du résultat dans la console
console.log(resultat);

// ######## Multiplication ######## //
// -- Multiplication de nb1 et nb2 avec l'opérateur "*"
resultat = nb1 * nb2;

// -- Affichage du résultat dans la console
console.log(resultat);

// ######## Division ######## //
// -- Division de nb1 et nb2 avec l'opérateur "/"
resultat = nb1 / nb2;

// -- Affichage du Résultat dans la Console.
console.log("Le Résultat de " + nb1 + " / " + nb2 + " est égal à : " + resultat);

// ######## Modulo ######## //
// -- NB : Le Modulo retourne le reste d'une division.

// -- Modulo de nb1 et nb2 avec l'opérateur "%"
nb1 = 11;
resultat = nb1 % nb2;

// -- Affichage du Résultat dans la Console.
console.log("Le Reste de la Division de " + nb1 + " par " + nb2 + " est égal à : " + resultat);

/* -------------------------------
LES ECRITURES SIMPLIFIEES
-------------------------------- */

nb1 = 15;
nb1 = nb1 + 5;
console.log(nb1);

nb1 += 5; // -- Ce qui équivaut à écrire nb1 = nb1 + 5;
// -- Ici, j'ai incrémenté et réaffecté.

console.log(nb1);

// -- Je peux procéder de la même manière pour tous les autres opérateurs arithmétiques : "+", "-", "/", "*", "%"


//===================================================
// NOUVEAUX FICHIERS html & js 04IncrementationDecrementation.html & 04.js
//===================================================
/* -------------------------------
INCREMENTATION & DECREMENTATION
-------------------------------- */

// ############ Incrémentation ############ //
var nb1 = 1;
nb1 = nb1 + 1;

// -- Affichage dans ma console
console.log(nb1);

// -- Ecriture simplifiée
nb1++;

// -- Affichage dans ma console
console.log(nb1);

// ############ Décrémentation ############ //
nb1 = nb1 - 1;

// -- Affichage dans ma console
console.log(nb1);

// -- Ecriture Simplifiée
nb1--;

// -- Affichage dans ma console
console.log(nb1);



//===================================================
// NOUVEAUX FICHIERS html & js 05conditions.html & 05.js
//===================================================
/* -------------------------------
LES CONDITIONS
-------------------------------- */

var MajoriteFR = 18;

if (MajoriteFR >= 19) {//si ma condition est vraie (booléen TRUE)
    alert("Bienvenue !");
} else {//sinon => ma condition est fausse (booléen FALSE)
    alert('Allez voir un autre site...');
}

/* -------------------------------
EXERCICE
Créer une fonction permettant de vérifier l'age d'un visiteur.
S'il a la majorité légale, alors je lui souhaite la bienvenue, sinon, je fait une redirection sur Google après lui
avoir signalé le soucis.
-------------------------------- */

// 1 -- Déclarer la Majorité légale
var MajoriteFR = 18;

// -- 2. demander son age en s'assurant que nous avons un NUMBER
var age = parseInt(prompt("Bonjour, Quel age avez-vous ?", "<Saisissez votre age>"));

// 2 -- Créer une fonction pour demander son age
//function verifierAge() {
// -- Demande de l'age de mon visiteur et le retourner.
//return parseInt(prompt("Bonjour, Quel age avez-vous ?","<Saisissez votre age>"));
//}

// 3 -- Une Condition pour vérifier si l'age de l'utilisateur est supérieur ou égal à la MajoriteFR
if (age >= MajoriteFR) {
    
    // -- J'affiche un Message de Bienvenue
    alert("Bienvenue sur mon site internet pour les majeurs...");
} else {
    // -- J'affiche une Alerte
    alert("ATTENTION !!! Vous devez être majeur pour accéder à ce site !");

    // -- Puis je redirige vers Darty ;-)
    document.location.href = "http://sherisson.ma6tvacoder.org/";
}

/* -------------------------------
LES OPERATEURS DE COMPARAISON
-------------------------------- */

// -- L'Opérateur de Comparaison "==" signifie : Egal à ... Il permet de vérifier que les VALEURS de deux
//variables sont identiques.
var chiffre1 = 123;
var chiffre2 = "123";
console.log(chiffre1 == chiffre2);// retourne TRUE

// -- L'Opérateur de Comparaison "===" signifie : Strictement Egal à ... Il va comparer la VALEUR et aussi le
//YPE de donnée.
    console.log(chiffre1 === chiffre2);// retourne FALSE

// -- L'Opérateur de Comparaison "!=" signifie : Différent de en VALEUR
console.log(chiffre1 != chiffre2);// retourne FALSE

// -- L'Opérateur de Comparaison "!==" signifie : Strictement Différent de en VALEUR et TYPE
console.log(chiffre1 !== chiffre2);// retourne TRUE

/* -------------------------------
EXERCICE :
J'arrive sur un Espace Sécurisé au moyen du prénom et de l'âge.
Je doit saisir mon prénom et mon age pour être authentifié sur le site (les infos sont en BDD, ici dans mes
variables prenom et age).
En cas d'échec une alerte m'informe du problème.
Si tout se passe bien, un message de bienvenue m'accueille.
-------------------------------- */
var prenom, monAge;
prenom = "Sandra";
monAge = 999;

// 1 -- Demander son prénom à l'utilisateur avec un prompt
var prenomLogin = prompt("Bonjour, Quel est votre prénom ?");

// 2 -- Je vérifie si le prénom saisi (prenomLogin) correspond à celui en base de donnée (prenom)
if (prenomLogin === prenom) {
    // 2a. Si tout est ok, je continue la vérification avec l'âge
    // 2a1. Demande a mon utilisateur son l'âge via un PROMPT
    var ageLogin = parseInt(prompt("votre age ?", "<Saisissez votre âge>"));// par défaut le prompt renvoie une
    //chaîne de caractères STRING, donc ici je m'assure que je stocke une valeur de type NUMBER avec parseInt()
    if (ageLogin === monAge) {
        alert("Bienvenue Utilisateur !");
    } else {
        // 2a2. Si les AGEs ne correspondent pas, je lance une ALERT.
        alert("ERREUR d'âge");
    }
} else {
    // 2b. Sinon, les prénoms ne correspondent pas, je lance une ALERT.
    alert("ATTENTION, nous n'avons pas reconnu votre prénom.");
}

/* -------------------------------
LES OPERATEURS DE LOGIQUES
-------------------------------- */

// L'opérateur ET : && ou AND

// -- Si la combinaison prenom et prenomLogin correspond ET la combinaison monAge et ageLogin correspond.

// -- Dans cette condition, les 2 doivent obligatoirement correspondre pour être validée.

//if( (prenomLogin === prenom) && (ageLogin === monAge) ) { ... }

// -- L'opérateur OU : || ou OR (| = pipe = ctrl gr + 6)

// -- Si la combinaison prenom et prenomLogin correspond OU la combinaison monAge et ageLogin correspond.

// -- Ici, dans cette condition, au moins l'une des deux doit correspondre pour être validée.

//if( (prenomLogin === prenom) || (ageLogin === monAge) ) { ... }

// -- L'Opérateur "!" : qui signifie le CONTRAIRE de, ou encore NOT

// var siMonUtilisateurEstApprouve = true;
// if(!siMonUtilisateurEstApprouve) { // Si l'utilisateur n'est pas approuvé.
//
// }

// -- Reviens également a écrire :
// if(siMonUtilisateurEstApprouve == false) { }







// -- Pour i = 1 (je démarre mon compteur 'i' à 1); tant que i <= (strictement inférieur ou égal à) 10 ;
//alors, j'incrémente i de + 1 à chaque fois que je refais un tour de boucle;
//=================================================== // NOUVEAUX FICHIERS html & js 06boucles.html &
06.js //=================================================== 
/* ------------------------------- LES BOUCLES-------------------------------- * / / /
 --La Boucle FOR 
 /* 3 arguments dans une boucle FOR :=>
                1. initialisation du compteur (par défaut la 'var i') à partir de combien je commence à compter
                => 2. l'argument/condition à vérifier qui doit être VRAIE/TRUE (c'est un booléen)
                => 3. le 'pas' d'incrémentation (j'ajoute +1 à chaque tour, +5, ou +12 ?)

                Pour i = 1 (je démarre mon compteur 'i' à 1); tant que i <= (strictement inférieur ou égal à) 10 ;
                    alors, j'incrémente i de + 1 à chaque fois que je refais un tour de boucle; */ for (var i = 1; i <= 10
    ; i++) {
        document.write("<p>Instruction exécutée :<strong>" + i + "</strong></p>");
}

// -- SUBTILITE
var i = 40;
i++ // Affiche 40
++i // Affiche 41

document.write(" < hr > ");


                        // -- La Boucle WHILE : Tant que
                        // très utilisée quand on ne connaît le nombre de tours que doit faire la boucle
                        // /!\ il faut bien mettre l'instruction d'incrémentation sinon boucle infinie qui fait bugers!!
                        var j = 1;
while (j <= 10) {
    document.write("<p>Instruction executée :<strong>" + j + "</strong></p>");
    j++;
}

/* -------------------------------
EXERCICE
j'ai 1000€ sur mon compte
chaque mois j'ajoute 50€
combien de temps me faut-il pour avoir 2000€ sur mon compte ?
-------------------------------- */
var monCompte = 1000;
var temps = 0;
// je ne connais pasle nombre de tours que va faire ma boucle... donc une WHILE
while (monCompte <= 2000) {
    monCompte += 50; // raccourci de monCompte=monCompte + 50 temps +=1;
} console.log("mois jusqu'à 2000€ : " + temps);
console.log(" années jusqu'à 2000€ : " + (temps/12));

// avec une boucle FOR
for (var i = 1000; i <= 2000; i += 50) {
    document.write("< p > Le mois suivant j'ai :<strong>" + i + "€</strong></p>");
                                }
document.write("<p>Instruction exécutée : <strong>" + ((i - 1000) / 50) + " fois</strong></p>");

