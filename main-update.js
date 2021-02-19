function makeNewNode(text) {
    newNode = document.createElement('p');
    newNode.innerText = text;
    return newNode;
}

function getPopularData(id,water){
    let data = document.getElementById(`show-${id}`);
    data.innerText = water.popularwater
    // prayut.innerText = water.result + "\n"+ "\n"+ "\n" + water.result
    //console.log(water)
}

function getWater1Data(id,water){
    let data = document.getElementById(`water1-${id}`);
        data.innerText = water.water1
    //console.log(water)
}

function getWater2Data(id,water){
    let data = document.getElementById(`water2-${id}`);
        data.innerText = water.water2
    //console.log(water)
}

function loadData() {
    fetch("http://158.108.182.12:3000/popular?Type=hoursPopular", {
        method:"GET",
        headers: {"Content-Type": "application/json"},
    })
    .then((data) => data.json())
    .then(data => getPopularData("hourly",data));

    fetch("http://158.108.182.12:3000/popular?Type=hoursPopular", {
        method:"GET",
        headers: {"Content-Type": "application/json"},
    })
    .then((data) => data.json())
    .then(data => getWater1Data("hourly",data));

    fetch("http://158.108.182.12:3000/popular?Type=hoursPopular", {
        method:"GET",
        headers: {"Content-Type": "application/json"},

    })
    .then((data) => data.json())
    .then(data => getWater2Data("hourly",data));

    // By day
    fetch("http://158.108.182.12:3000/popular?Type=dayPopular", {
        method:"GET",
        headers: {"Content-Type": "application/json"},

    })
    .then((data) => data.json())
    .then(data => getPopularData("daily",data));

    fetch("http://158.108.182.12:3000/popular?Type=dayPopular", {
    method:"GET",
    headers: {"Content-Type": "application/json"},
    })
    .then((data) => data.json())
    .then(data => getWater1Data("daily",data));

    fetch("http://158.108.182.12:3000/popular?Type=dayPopular", {
    method:"GET",
    headers: {"Content-Type": "application/json"},
    })
    .then((data) => data.json())
    .then(data => getWater2Data("daily",data));

    // By week
    fetch("http://158.108.182.12:3000/popular?Type=weekPopular", {
        method:"GET",
        headers: {"Content-Type": "application/json"},
    })
    .then((data) => data.json())
    .then(data => getPopularData("weekly",data));

     fetch("http://158.108.182.12:3000/popular?Type=weekPopular", {
        method:"GET",
        headers: {"Content-Type": "application/json"},
    })
    .then((data) => data.json())
    .then(data => getWater2Data("weekly",data));

      fetch("http://158.108.182.12:3000/popular?Type=weekPopular", {
        method:"GET",
        headers: {"Content-Type": "application/json"},
    })
    .then((data) => data.json())
    .then(data => getWater1Data("weekly",data));
}

var d = new Date();
var time = d.getHours();
var count = [0, 0];
var updateMinitab = document.getElementById("current-time-announce");

setInterval(() => {
    if (d.getHours() != time) {
        time = d.getHours();
   }
    loadData();
    updateMinitab.innerText = "สถานะ ณ เวลา " + time + ":00 - " + time + ":59";
    // if ( || )
    
}, 5000);
