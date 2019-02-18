//alert('hello');

// --1 ADDITIONS
// info --- je peux déclarer plusieurs variables à la suite.
var nb1, nb2, resultat;
nb1 = 10;
nb2 = 5;

// Addition de nb1 et de nb2 avec l'operateur '+'

resultat = nb1 + nb2;
console.log(resultat);

//--2 SOUSTRACTIONS
//Soustraction de nb1 et de nb2 avec l'operateur '-'

resultat = nb1 - nb2;
console.log(resultat);

//--3 MULTIPLICATIONS
//Multiplication de nb1 et de nb2 avec l'operateur '*'


resultat = nb1 * nb2;
console.log(resultat);

//--4 DIVISION
//Division avec l'operateur "/"


resultat = nb1 / nb2;
console.log(resultat);

//---MODULO
//--Le Modulo retourne le reste d'une division
//--modulo de nb1 % nb2 avec l'operateur "%"

resultat = nb1 % nb2;
console.log(resultat);

// et maintenant je réaffecte une valeur à nb1

nb1 = 11;
resultat = nb1 % nb2;
console.log("le reste de la division de " +nb1 +" par " + nb2 " est égale à : " + resultat);

//les écritures simplifiée

nb1 = 15;
nb2 = nb1 + 5
console.log(nb1);

nb1 += 10;// nb1 lui même plus qq chose  
