// alert("OKAY");

var jour = prompt("Quel jour sommes nous ?");

if (jour === "lundi") { /*si la saisir de l'internaute est strictement égale à "lundi" */
    document.write('Demain nous serons mardi');
} else if (jour === "mardi") {
    document.write('Demain nous serons mercredi');
} else if (jour === "mercredi") {
    document.write('Demain nous serons jeudi');
} else if (jour === "jeudi") {
    document.write('Demain nous serons vendredi');
} else if (jour === "vendredi") {
    document.write('Demain nous serons samedi');
} else if (jour === "samedi") {
    document.write('Demain nous seronsdimanche');
} else if (jour === "dimanche") {
    document.write('Demain nous serons lundi');
} else { /*Si la saisie de l'internaute ne correspond à rien */
    prompt("Saisissez un jour valable !!!!");
}

// switch(jour){
//     case 'lundi':
//     document.write('Demain nous serons mardi');
//     break;
//     case 'mardi':
//     document.write('Demain nous serons mercredi');
//     break;
//     case 'mercredi':
//     document.write('Demain nous serons jeudi');
//     break;
//     case 'jeudi':
//      document.write('Demain nous serons vendredi');
//     break;
//     case 'vendredi':
//     document.write('Demain nous serons samedi');
//     break;
//     case 'samedi':
//     document.write('Demain nous serons dimanche');
//     break;
//     case 'dimanche':
//     document.write('Demain nous serons lundi');
//     break;
//     default:
//     break;
// }