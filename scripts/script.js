function displayEmail() {

    let element = document.getElementById("email-box");

    if (element.style.visibility == "hidden" || element.style.visibility == ""){
        element.style.visibility = "visible";
    } else {
        element.style.visibility = "hidden";
    }
}

function copyEmail() {
    var email = document.getElementById("email").innerHTML;
    navigator.clipboard.writeText(email);

    let element = document.getElementById("copy");

    // change element's image source for 2 seconds, and switch back to original
    element.src = "images/check.png";
    setTimeout(() => {
        element.src = "images/copy.png";
    }, 1500);
}