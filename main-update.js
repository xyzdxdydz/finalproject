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

    fetch("http://158.108.182.0:20010/app/admin/exceed_group10/g10/602ceb00df6a3e7117266daf")
    .then((data) => data.json())
    .then(datas => { 
        datas.forEach(d => {
            app.appendChild(makeNewNode(d.Slot));
            app.appendChild(makeContent(d.Volume));
            app.appendChild(makeNewNode(d.Is_on));
        });
    });
}, 5000);