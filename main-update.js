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
    fetch("http://158.108.182.12:3000/popular?Type=hoursPopular", {
        method:"GET",
        headers: {"Content-Type": "application/json"},

    })
    .then((data) => data.json())
    .then(data => console.log("hoursPopular = "+data.result));

    fetch("http://158.108.182.12:3000/popular?Type=dayPopular", {
        method:"GET",
        headers: {"Content-Type": "application/json"},

    })
    .then((data) => data.json())
    .then(data => console.log("dayPopular = "+data.result));

    fetch("http://158.108.182.12:3000/popular?Type=weekPopular", {
        method:"GET",
        headers: {"Content-Type": "application/json"},

    })
    .then((data) => data.json())
    .then(data => console.log("weekPopular = "+data.result));
}, 5000);