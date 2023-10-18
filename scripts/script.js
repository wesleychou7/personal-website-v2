function displayEmail() {

    element = document.getElementById("email-box");

    if (element.style.visibility == "hidden" || element.style.visibility == ""){
        element.style.visibility = "visible";
    } else {
        element.style.visibility = "hidden";
    }
}