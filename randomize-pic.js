function randommize_recommend() {
    var destination = document.getElementById("recpic");
    var num = Math.floor(Math.random() * 2);  // int random for 0-1
    
    if (num == 0) {
        destination.setAttribute("src", "main-pic/water-slot1.webp");
    } else {
        destination.setAttribute("src", "main-pic/water-slot2.jpg");
    }
}

randommize_recommend();