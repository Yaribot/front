// alert("js OK");
var moyenne = prompt("Ecrivez votre moyenne");

if (moyenne < 10) {
    document.write("Vous etes malheureusement recalé");
} else if (moyenne >= 10 && moyenne < 12) {
    document.write("Vous etes reçu");
} else if (moyenne >= 12) {
    document.write(" reçu avec mention");
}