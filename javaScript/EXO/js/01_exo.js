/*function surfaceRectangle(){
	var largeur;
	var longueur;

	largeur=prompt("Quelle est la largeur du rectangle ?");
	longueur=prompt("Quelle est la longueur du rectangle ?");

	alert("La surface vaut " + longueur * largeur);
	alert("Le périmètre vaut " + 2 * (Number(longueur) + Number(largeur))); //Il faut ici transformer les chaînes saisies en nombre, faute de quoi l'opérateur + agit comme une concaténation et non une somme


}*/
function surfaceRectangle(){
    alert("Salut, on va calculer ensemble !");
    var longueur = prompt("Entre s' il te plait une longueur");
    var largeur = prompt("Et maintenant une largeur");
    resultat = longueur * largeur;
    alert("La surface du rectagle est de " + resultat );

    alert("Maintenant on va s' occuper du périmetre !");
    var longueur = prompt("Entre s' il te plait une longueur");
    var largeur = prompt("Et maintenant une largeur");
    resultat = (2 * longueur) + (2 * largeur) ;
    alert("Le périmetre du rectagle est de " + resultat );
}
