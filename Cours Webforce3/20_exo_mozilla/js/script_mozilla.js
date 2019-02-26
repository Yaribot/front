alert("OK !");

// fonction sui va switcher l'image lorsque on clique dessus 

// on stocke dans la variable monImage la première image du document
// querrySelectorAll récupérerait toutes les img


var monImage = document.querySelector('img');
// équivalent à querySelector 
//  var monImage = document.querySelectorAll('img')[0];

console.log(monImage);

// on va utiliser la méthode addEventListener pour ajouter un écouteur de click sur l'image 


// addEventListener attend 2 paramètres : l'événement (click) et l'action (changer l'image) à réaliser lorsque l'événement survient
monImage.addEventListener('click', function(){

    // récupérer dans une variable maSrc, la valeur actuelle de l'attribut src de monImage. On va utiliser la méthode getAttribute(), l'argument attendu pour cette méthode est le nom d'un attribut de balise html (ici ça sera src)
    
    // alert('click');


    var maSrc = monImage.getAttribute('src');
    console.log(maSrc);

    // SI (la valeur de la variable maSrc est égale à 'images/logo_firefox1.png')
    // ALORS
    // alert("je suis l'image 1")
    // SINON 
    // alert(maSrc+"n'est pas l'image 1")

    // première version de cette condition pour tester
    /*
    if(condition){
        instruction 1;
    }
    else{
        instruction 2;
    }
    */
    
    // if (maSrc === 'images/logo_firefox_1.png') {
    //     alert("je suis l'image 1, ma source est" + maSrc);
    // }
    // else {
    //     alert("je ne suis pas l'image 1");
    // }

    // SECONDE VERSION : ici on va intervertir les images avec la méthode setAttribute qui attend 2 arguments :
    // 1: l'attribut ciblé (ici ça sera src)
    // 2: sa nouvelle valeur (ici ça sera  images/logo_firefox_2.png)
    // on veut remplacer la source de la 2eme image

    if (maSrc === 'images/logo_firefox_1.png') {
        alert("je suis l'image 1, ma source est" + maSrc);
        // ici on veut remplacer la source par la source de la 2eme image
        monImage.setAttribute('src', 'images/logo_firefox_2.png');
    }
    else {
        alert("je ne suis pas l'image 1");
        // ici on veut remplacer la source par la source de la 1ere image
    }

    if (maSrc === 'images/logo_firefox_2.png') {
        alert("je suis l'image 1, ma source est" + maSrc);
        monImage.setAttribute('src', 'images/logo_firefox_1.png');
    }
    else {
        alert("je ne suis pas l'image 1");
    }
}); // FIN DE LA FONCTION D'INVERTION DES IMAGES



    /*

    Dans le code précédent on a fait :
    1/ quand on clique sur l'image (dans la fonction addEventListener)
    2/ On a utilisé la structure conditionnelle if else pour voir si la valeur de l'attribut src est égale au chemin de l'image originale
    3/ Si c'est le cas, on change la valeur de cet attribut en kui indiquant le chemin vers la seconde image
    4/ Si ce n'est pas le cas (ce qui signifie que l'image a été changée), la valeur de l'attribut src revient à sa valeur initiale
    */


//  Prochaine recette (fonction) : ajouter un message d'acceeuil personnalisé

/*
    On va changer le titre de la page pour inclure un message pour le visiteur du site 
    Ce message sera conservé quand l'utilisateur quittera le site et si il y revient plus tard

    On va conserver ce message dans le cache du navigateur en utilisant l'API Webstorage
    Au final, on ajoutera une option sur le bouton, pour pouvoir changer l'utilisateur et le message d'acceuil si besoin
*/

//  1ere étape : récupérer dans une variable monTitre le 1er h1 du document et l'afficher sur la console

var monTitre = document.querySelector('h1');
console.log(monTitre);

// 2eme étape : récupérer dans une variable monBouton la première balise button du document


var monBouton = document.querySelector('button');
console.log(monBouton);

// Préparer la fonction du message d'acceuil (qui sera invoquée, déclanchée plus tard)

function definirNomUtilisateur(){
    var monNom = prompt('Ecris ton prénom'); // prompt, comme une alerte sauf qu'on demande à l'utilisateur d'écrire quelque chose
    localStorage.setItem('nomUtilisateur', monNom);
    monTitre.textContent = "Bienvenue" + monNom;
}
/* EXPLICATION DE LA FONCTION :

    Cette fonction utilise la méthode prompt() qui affiche une boite de dialogue, un peu comme une alert(), sauf qu"elle permet à l'utilisateur de saisir des données et de les enregister dans une variable quand l'utilisateur click sur OK
    Dans notre exemple on demande à l'utilisateur de saisir son nom
    Ensuite nous appelons l'API localStorage qui permet de stocker des données dans le navigateur pour pouvoir les réutiliser ultérieurement.
    Nous utilisons la fonction setItem de cet API pour stocker la donnée qui nous intéresse dans un conteneur appelé nomUtilisateur. La valeur stockée ici est la valeur de la variable monNom qui contient le nom saisi par l'utilisateur dans le prompt.
    Au final on utilise la propriété textContent du titre pour lui affecter un nouveau contenu.




*/ 




// La suite va être : tester si le nom n'est pas dans le cache. S'il n'y est pas, on demande avec prompt son nom à l'utilisateur (déclanche la fonction definirNomUtilisateur)
// Si il y est, si le nom est déja dans le cache, on le récupère et on l'affiche dans le titre

// pour tester : vider le localStorage
// localStorage.clear();

if (!localStorage.getItem('nomUtilisateur')){
    alert('le cache est vide');
    definirNomUtilisateur();
}
else{
    var nomEnregistre = localStorage.getItem('nomUtilisateur');
    monTitre.textContent = "Bienvenue à nouveau" + nomEnregistre;
}

// au clic sur le bouton, invoquer la fonction definirNomUtilisateur()

monBouton.addEventListener('click', function(){
    definirNomUtilisateur();
})

// Le bloc de la conditionnelle if else utilise l'opérateur de négation NON (le pooint d'exclamation !) pour vérifier si le navigateur possède une donnée enregistrée appelée nomUtilisateur ou pas.
// Sinon, la fonction definirNomUtilisateur() est invoquée pour créer cette donnée.
// Si elle existe (ce qui correspond au cas ou l'utilisateur est déjà venu sur la page), on la récupère avec la méthode getItem().
// Pour finir on définit le contenu de textContent pour le titre avec une concaténation de chaine suivie du nom de l'utilisateur.
// Enfin, on associe le gestionnaire d'événement click au bouton.quand l'utilisateur cliquera sur le bouton, ça déclanchera l'éxécution de la fonction definirNomUtilisateur()
// ce bouton permet donc à l'utilisateur de modifier son nom s'il le souhaite.