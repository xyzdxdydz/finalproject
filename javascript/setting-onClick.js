function openModal(id) {
    if (id == "stat") {
        modal.style.display = "block";
        enableAbout = false;
        isStatOn = true;

    } else if (id == "about") {
        modalA.style.display = "block";
        enableStat = false;
    }
}

function closeModal(id) {
    if (id == "stat") {
        modal.style.display = "none";
        enableAbout = true;
        isStatOn = false;

    } else if (id == "about") {
        modalA.style.display = "none";
        enableStat = true;
    }
}
// variable of about modal and stat modal
var btn = document.getElementById("setting");
var modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];

var btnA = document.getElementById("button-about");
var modalA = document.getElementById("modal-about");
var spanA = document.getElementsByClassName("close")[1];

// statud each modal
var enableAbout = true;
var enableStat = true;
var isStatOn = false;

//button click
btn.onclick = function() {
    if (enableStat && !isStatOn) {
        openModal("stat");

    }else if (isStatOn) {
        closeModal("stat");
    }
}

btnA.onclick = function() {
    if (enableAbout) {
        openModal("about");
    }
}

// ok botton click
span.onclick = function() {
    closeModal("stat");
}

spanA.onclick = function() {
    closeModal("about");
}

// window click
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal("stat");

    } else if (event.target == modalA) {
        closeModal("about");
    }
}