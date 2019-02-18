function ajout() {
    liste = document.getElementById("listecommissions");

    nouveauli = document.createElement("li");
    nouveauli.appendChild(document.createTextNode("Un texte en plus"));

    liste.appendChild(nouveauli);
}

function ajoutBouton() {
    liste = document.getElementById("listecommissions");
    texte = document.getElementById("course").value;

    nouveauli = document.createElement("li");
    nouveauli.innerHTML = texte;

    liste.appendChild(nouveauli);
}