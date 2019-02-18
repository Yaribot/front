//alert('coucou ceci est un test');
/*Les boucles permettent de répéter des actios simplement et rapidement. Une boucle
peut être vue comme une version informatique de "copier N lignes" ou de faire "X fois
quelque chose". par exemple en JS on peut traduire "Faire 5 pas vers l'Est" avec cette
boucle:*/
//var pas;
//for(pas=0; pas < 5; pas++){
  //Ceci sera executé 5 fois
  // A chaque éxécution, la variable "pas" augmentera de 1
  //lorsqu' elle sera arrivvée à 5, la boucle se terminera.
  //console.log("Faire un pas vers l'Est");
//}
/* Il y a différents types de boucles mais elles se ressemblent toutes au sens ou elles
répètent une action un certain nombre de fois(ce nombre peut-être zéro)Les différents types
de boucles permettent d'utiliser différentes façons de commencer et de terminer une
boucle. Chaque boucle pourra être utilisée en fonction de la situation et du problème
que l'on cherche à résoudre.*/
/*------Les Boucles-----------*/
//----La boucle FOR-----------
//for(3arguments) (l'objet argument est un objet, semblable à un tableau
//correspondant aux arguments passés à une fonction){
/*--code--*/
//}
/*L'objet "argument" est une variable local(intrasèque et inhérente aux fonctions
)disponible dans toutes les fonctions(qui ne sont pas des fonctions FLECHEES).
/*
1. initialise un compteur à partir de combien je compte(par défaut le compteur
est la variable'i')
2. la condition à vérifier qui doit donc être vrai (TRUE)
3. le 'pas d'incrémentation (combien j'ajoute à chaque tour, ggénéralement 1
donc i++)
*/
//for(var i=1; i<=10; i+=2){
  //document.write("<p>Instruction exécutée : "+i+"</p>");
//}
//--La boucle  WHILE (tant que)
//trés utilisée quand on ne connaît pas le nombre de tours de boucles à l'avance
//var j = 1;
//while( j<= 10) {
  //document.write("<hr/><p>Instruction exécutée : "+j+"</p>");
  /* 50 lignes de codes */
  //j++;//j = j+1; ou j +=1;
//}
/*--EXERCICE--
J'ai 1000€ sur mon compte
chaque mois j 'ajoute 50€
Combien de temps me faut il pour avoir 2000€ sur mon compte?
--*/
/*--Avec la boucle WHILE (tant que)--*/
var monCompte = 1000;
var temps = 0;
while(monCompte<2000){
  monCompte +=50;
  temps++;
}
document.write("<h3>Sous sur mon compte : " + monCompte + "</h3>");
document.write("<h3>Jusqu'à 2000€, il me faut : " + temps + "mois</h3>");
document.write("<h3>Jusqu'à 2000€, il me faut : " + (temps/12) + " années</h3>");

/*--Avec la boucle FOR--*/
var tps = 0;
for(var mesSous = 1000; mesSous < 2000; mesSous +=50){
  document.write("<h3>Le mois suivant j'ai : " + mesSous + "</h3>");
  tps++;
}
document.write("<h3> Il aura fallu" + tps + "mois</h3>");
