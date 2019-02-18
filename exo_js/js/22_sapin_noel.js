
//----------------------------------------------------------------------------
//Sapin de Noël

var branche = prompt('choix du nombre d\'étages du sapin');
// on itère le nombre d'étages du sapin
for(var etage=1; etage<=branche; etage++) {
    // 1. Pour chaque étage e, nous avons i=e+3 lignes
    for(var i=0; i<etage+3 ; i++) {
    			// 2. Pour chaque ligne i, nous avons ((etage+i)*2)-1 étoiles
          for(var nb_etoile=1; nb_etoile<=((etage+i)*2)-1; nb_etoile++) {
          document.getElementById('sapin').innerHTML+='*';
            sapin.style.color ="green";
            /*sapin.style.color ="red";*/

          }
          document.getElementById('sapin').innerHTML+='</br>';
    } //fin lignes
} //fin étage

// On affiche le pied
for(var s=1; s<=branche; s++) {
  document.getElementById('sapin').innerHTML+='||||';
  document.getElementById('sapin').innerHTML+='</br>';

}
//La propriété Element.innerHTML de Element récupère ou définit la syntaxe
//HTML décrivant les descendants de l'élément.
/*La méthode getElementById() de Document renvoie un objet  Element représentant l'élément
dont la propriété  id correspond à la chaîne de caractères spécifiée. Étant donné que
les ID d'élément doivent être uniques, s'ils sont spécifiés,
ils constituent un moyen utile d'accéder rapidement à un élément spécifique.*/
