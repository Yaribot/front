/* 
L'operateur ET : && ou AND

-- Si je cumule 2 conditions : 
=> prenom === prenomLogin
=> monAge === ageLogin

Pour que les 2 corrrespondent pour être validés  il faut les associer
if((prenomLogin === prenom) && (ageLogin === monAge)){
    /*-- code  --*/
/*-- code  --*/
// je ne rentre ici que si les 2 conditios vraies

//}
/*
if ((A) && (B)) { ...} 
=> si A est FAUX et B est VRAI => FAUX 
=> si A est VRAI et B est FAUX => FAUX 
=> si A est FAUX et B est FAUX => FAUX 
=> si A est VRAI et B est VRAI => VRAI
*/

/*

L 'opérateur OU : || ou OR (| pipe => alt gr + 6)

if((C) || (D)){.....}
=> si C est FAUX et D est FAUX =>FAUX
=> si C est FAUX et D est VRAI =>VRAI
=> si C est VRAI et D est FAUX =>VRAI
=> si C est VRAI et D est VRAI =>FAUX
*/

/*
L'opérateur "!" signifie : le contraire de
var utilisateurLog = true;
if (!utilisateurLog) {
    //si l'utilisateur n'est pas loggé.
}
// ce qui revient à écrire :
if (utilisateurLog == false) {
    //si l'utilisateur n'est pas loggé.
}
*/

var nb1 = prompt("Votre 1er nombre :");
var nb2 = prompt("Votre 2ème nombre :");

if (isNaN(nb1) && (!isNaN(nb2))) {
    if (nb1 < nb2) {
        document.write("Votre 1er nombre : " + nb1 + " est plus petit que votre 2nd : " + nb2);
    } else if (nb1 > nb2) {
        document.write("Votre 1er nombre : " + nb1 + " est plus grand que votre 2nd : " + nb2);
    } else {
        document.write("Votre 1er nombre : " + nb1 + " est égal à votre 2nd : " + nb2);

    }
} else {
    alert('Vous n\'avez pas saisi de chiffre');
}