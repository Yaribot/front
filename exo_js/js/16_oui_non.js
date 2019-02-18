// alert('test');

var disMoi = "";
var i = 0;

 while ((disMoi !== "oui") && (disMoi !== "non")) {
    disMoi = prompt("Alors on joue au Ni oui Ni non ?");
     document.write(disMoi + " pour la " + i + "° fois, dis moi oui ou non!<br />");
    i++
 }
 document.write("<h1 style='background-color:cyan; text-align:center;'>Fini ;-) !</h1>");

/*--------------------code iuliia---------
var k = 'oui';
var l = 'non';
var j = prompt('mettrez la mot svp');

if ((j === k) || (j === l)) {
    document.write("Cool");
} else {
    location.reload();
}*/
/*---------code Alpha-----
var a= prompt("Voulez vous jouez avec moi?")
if((a==="oui") || (a==="non")){
    document.write("looser");
}else{
    document.write("winner");
}*/
