// alert("js ok");
var bouton = document.getElementById('toggle-rectangle');
// recherche du rectangle dans l'arbre DOM
var rectangle = document.querySelector('.rectangle');
// 2- FONCTIONS
/*
1-fonction au click sur le bouton
*/
// La méthode .toggle() va ajouter ou suprimer la class (tel in intérrupteur)
function surClicBouton(){
    rectangle.classList.toggle('hide');
}
/*
2-fonction au double-click sur le rectangle
*/
function auDoubleClicRectangle(){
    rectangle.classList.toggle('good');
}
/*
3-A L'entrée du survol du rectangle
*/
// La méthode .add() va ajouter la class CSS.
function auSurvolSourisRectangle(){
    rectangle.classList.add('important');
}
/*
4-A La sortie du survol du rectangle
*/
// La  methode .remove() va ajouter la class CSS
function aSortieSourisRectangle(){
    rectangle.classList.remove('good');
    rectangle.classList.remove('important');
}
// 3- ECOUTEUR D'EVENEMENT
/*- paramètre: l'évenement
2nd paramètre: la fonction à executer
*/
/*
1-Installation d'un gestionnaire d'évenement au clic sur le bouton
*/
bouton.addEventListener('click', surClicBouton);
/* La methode "addEventListener()" met en place une fonction à appeler chaque fois que l'évenement spécifié est remlis à la cible. Les cibles courantes sont un "Element", Le "Document" Lui même et une " Window", mais elle peut être tout objet prenant en charge Les évenements (comme XMLHttpRequest)
/*
2-Installation d'un gestionnaire d'évenement au double clic sur le rectangle
*/
rectangle.addEventListener('dblclick',auDoubleClicRectangle);
/*
3-Installation d'un gestionnaire d'évenement au survol sur le rectangle
*/
rectangle.addEventListener('mouseover',auSurvolSourisRectangle);
/*
4-Insstallation d'un gestionnaire d'évenement à la sortie du survol sur le rectangle
*/
rectangle.addEventListener('mouseout',aSortieSourisRectangle);