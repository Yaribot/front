/*alert('coucou');
var numeroTour=prompt("c'est le tour n°");
if ((numeroTour>= 0) && (numeroTour<= 10)){
  document.write("<h3>c'est le tour de manège n°"+numeroTour);
}else{
  alert('desolé le manège ne tourne pas plus de 10 tours');
}*/
/* 1-- boucle WHILE */
var manege = 0;
while (manege < 10) {
    manege++;
    document.write("c'est le tour n°" + manege + "<br />");
}

/* 1-- boucle FOR */
document.write("<hr />");

for (var i = 1; i <= 10 ; i++) {
    document.write("c'est le tour n°" + i + "<br />");
}

document.write("<hr />");
document.write("<hr />");

/* 2-- boucle WHILE */
var question = parseInt(prompt("Combien de tours voulez-vous ?"));
var compteur = 1;
while (compteur <= question) {
    document.write("c'est le tour n°" + compteur + "<br />");
    compteur++;
}
document.write("<hr />");

/* 2-- boucle FOR */
var nbTours = parseInt(prompt("Combien de tours à faire ?"));
for (var tour = 1; tour <= nbTours; tour++) {
    document.write("c'est le tour n°" + tour + "<br />");
}
