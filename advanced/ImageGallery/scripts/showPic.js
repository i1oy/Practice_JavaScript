function showPic(whichPic) {
    var source = whichPic.getAttribute("href");
    var text = whichPic.getAttribute("title");
    var placeholder = document.getElementById("placeholder");
    var description = document.getElementById("description");
    placeholder.setAttribute("src", source);
    description.firstChild.nodeValue = text;
}