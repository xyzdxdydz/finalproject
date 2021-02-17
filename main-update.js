function makeNewNode(text) {
    newNode = document.createElement('p');
    newNode.innerText = text;
    return newNode;
}

let cache = [];
a = document.createElement("h1");
a.innerText = "Welcome back : Yo";

i = document.createElement("h3");
i.innerText = "What's new with your friend? Check something below!"

setInterval(() => {

    fetch("http://dimmoy")
    .then((data) => data.json())
    .then(datas => { 
        datas.forEach(d => {
            app.appendChild(makeNewNode(d.Slot));
            app.appendChild(makeContent(d.Volume));
            app.appendChild(makeNewNode(d.Is_on));
        });
    });
}, 5000);