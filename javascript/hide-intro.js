var hide = document.getElementById("anim-key1");

setTimeout(function() { 
    var show = document.getElementById("anim-key2");
    hide.style.display = "none"; 
    show.style.display = "initial";
}, 5000);