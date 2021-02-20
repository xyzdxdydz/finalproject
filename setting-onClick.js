var btn = document.getElementById("setting");
var modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];

var btnA = document.getElementById("button-about");
var modalA = document.getElementById("modal-about");
var spanA = document.getElementsByClassName("close")[1];

btn.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}

btnA.onclick = function() {
    modalA.style.display = "block";
    }
    
spanA.onclick = function() {
    modalA.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalA) {
    modalA.style.display = "none";
    }
}