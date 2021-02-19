function makeNewNode(text) {
    newNode = document.createElement('p');
    newNode.innerText = text;
    return newNode;
}

function getPopularData(id,water){
    let data = document.getElementById(`show-${id}`);
    data.innerText = water.popularwater;
    communicator++;
    // prayut.innerText = water.result + "\n"+ "\n"+ "\n" + water.result
    //console.log(water)
}

function getWater1Data(id,water){
    let data = document.getElementById(`water1-${id}`);
        data.innerText = water.water1;
        communicator++;
    //console.log(water)
    return water.water1;
}

function getWater2Data(id,water){
    let data = document.getElementById(`water2-${id}`);
        data.innerText = water.water2;
        communicator++;
    //console.log(water)
    return water.water2;
}

function whatHourIs() {
    var d = new Date();
    return d.getHours();
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
    .then(data => tmp[0] = getWater1Data("hourly",data));

    fetch("http://158.108.182.12:3000/popular?Type=hoursPopular", {
        method:"GET",
        headers: {"Content-Type": "application/json"},
    })
    .then((data) => data.json())
    .then(data => tmp[1] = getWater2Data("hourly",data));

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
    .then(data => getWater1Data("weekly",data));

    fetch("http://158.108.182.12:3000/popular?Type=weekPopular", {
        method:"GET",
        headers: {"Content-Type": "application/json"},
    })
    .then((data) => data.json())
    .then(data => getWater2Data("weekly",data));
}

var time = whatHourIs();
var count = [0, 0];
var tmp = [0, 0];
var communicator = 0;
let updateMinitab = document.getElementById("current-time-announce");
let statusicon = document.getElementById("setting-icon");

setInterval(() => {
    var zarg = whatHourIs();
    if (zarg != time) {
        time = zarg;
    }

    loadData();

    // if water was dispensed
    console.log(tmp[0]);
    console.log(tmp[1]);
    
    if (count[0] != tmp[0] || count[1] != tmp[1]) {
        count[0] = tmp[0];
        count[1] = tmp[1];
        randommize_recommend();
    }

    updateMinitab.innerText = "สถานะ ณ เวลา " + time + ":00 - " + time + ":59";
    if (communicator == 9) {
        statusicon.style.animation = "circumstance 3s forwards linear infinite";
    
    } else {
        statusicon.style.animation = "none";
    }

    communicator = 0;
}, 5000);