function boucle() {
    var tab = new Array(5);

    for (var i = 0; i < tab.length; i++) {
        tab[i] = i * i;
    }

    alert(tab);
}

function boucle2() {
    var longueur = parseInt(prompt('Quelle est la longueur souhaitée du tableau?'));
    var tab = new Array();

    for (var i = 0; i < longueur; i++) {
        tab[i] = i * i;
    }

    alert(tab);
}