function prepareGallery() {
    if (!document.getElementsByTagName) {
        return false;
    }
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById("imagegallery")) {
        return false;
    }
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (let index = 0; index < links.length; index++) {
        const element = links[index];
        element.onclick = function () {
            return showPic(this) ? false : true;
            // return false;
        }
    }
}

function showPic(whichPic) {
    var placeholder = document.getElementById("placeholder");
    if (!placeholder) {
        return false;
    }
    // var source = whichPic.getAttribute("href");
    var source = whichPic.href;
    // placeholder.setAttribute("src", source);
    placeholder.src = source;

    var description = document.getElementById("description");
    if (description) {
        var text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
        description.firstChild.nodeValue = text;        
    }

    return true;
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);

// window.onload = prepareGallery;