const xhr = new XMLHttpRequest();
xhr.open("GET",url);

xhr.onreadystatechange = function() {
    if(xhr.readyState == 4) {

    }
}

xhr.send();