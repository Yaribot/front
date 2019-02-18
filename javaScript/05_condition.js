//alert("Vive javaScript");
/*L'instruction "if" exécute une instruction si une condition
donnée est vrai. Si la condition n'est pas vérifiée, il est possible
d'utiliser une autre instruction.*/
//-----STRUCTURE DE BASE IF----//
/*if(true){par defaut la condition à vérifier le "if"verifie si elle
est vrai*/
/*----ici le code-----
}
var nb1 = 10;
if(nb1 <50){
  console.log("nb1 est bien inferieur à 50");
}
if(true){
  /*....le code.....si c'est vrai...
}else{
  /*.........le code si c'est faux...
}
if (nb1>50){
  console.log("nb1 est inferieur à 50");
}else{
  console.log(" nb1 n'est pas inferieur à 50");
}
/*----EXERCICE----
On utilise le if pour vérifier l'age de l'internaute.
=> si il est majeur je lui souhaite la bienvenue.
=> si il est mineur je :
  -1: lui signale et 2: le renvoie vers un autre site*/
// -- je déclare la majorité légale
//-- demander l'âge en s'assurant que nous avons un NUMBER
// je vérifie si mon internaute est majeur
// si il est mineur je le lui signale
// et ensuite je le redirige sur le site de mon choix.
/*EXERCICE
On utilise le IF pour vérifier l'âge de l'internaute.
=> s'il est majeur je lui souhaite la bienvenue
=> s'il est mineur je [1]lui signale et [2]le renvoie vers un autre site
*/
// 1 -- je déclare la majorité légale
var MajoriteFR = 18;

// 2 -- demander l'âge en s'assurant que nous avons un NUMBER
var age = parseInt(prompt("Indiquez votre âge"));

// 3 -- je vérifie si mon internaute est majeur
if (age >= MajoriteFR {// bienvenue si vrai
    alert("Bienvenue, vous êtes majeur");
} else {
    // s'il est mineur je lui signale
    alert("Allez voir un autre super site...");
    // et ensuite je redirige vers Darty ;-)
    document.location.href = "https://sherisson.ma6tvacoder.org"
}
