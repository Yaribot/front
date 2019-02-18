alert('cc c est moi');

function change_liste() {
    liste = document.getElementsByTagName("ul")[0];
    items = document.getElementsByTagName("li");

    liste.setAttribute("type", "circle");

    for (i = 0; i < items.length; i++) {
        //items[i].innerHTML="| blabla |";
        items[i].replaceChild(document.createTextNode("| blabla |"), items[i].firstChild);
        items[i].setAttribute("onclick", "alert('Bonjour!')");
    }
}