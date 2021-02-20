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

function fetchpercent() {
    fetch("http://158.108.182.12:3000/volume", {
        method:"GET",
        headers: {"Content-Type": "application/json"},
    })
    .then((data) => data.json())
    .then(data => getPercent("water1", data));

    fetch("http://158.108.182.12:3000/volume", {
        method:"GET",
        headers: {"Content-Type": "application/json"},
    })
    .then((data) => data.json())
    .then(data => getPercent("water2", data));
}

function getPercent(id, data) {
    let destination = document.getElementById(`slot-percent-${id}`);
    var getnum;
    var before = parseInt(destination.innerText, 10);
    if (id == "water1") {
        getnum = data.water1;
        destination.innerText = "" + getnum + "%";
        // slot1gauge.style.width = `${getnum}%`;
        progressPercentage(slot1gauge, before, parseInt(getnum, 10));
    }else {
        getnum = data.water2;
        destination.innerText = "" + getnum + "%";
        // slot2gauge.style.width = `${getnum}%`;        
        progressPercentage(slot2gauge, before, parseInt(getnum, 10));   
    }
    communicator++;
}

function progressPercentage(dest, fp, tp) {
    let animprogress;
    var itp = 0;
    var end = 120;
    var tmp = (tp-fp) / 120;
    let tmp2;
    animprogress = setInterval(frame, 16);
    function frame() {
        if (itp == end || fp == tp) {
            clearInterval(animprogress);
        } else {
            itp++;
            tmp2 = fp + itp*tmp;
            dest.style.width = Math.floor(tmp2).toString() + "%";
        }
    }
}

var time = whatHourIs();
var count = [0, 0];
var tmp = [0, 0];
var communicator = 0;

let updateMinitab = document.getElementById("current-time-announce");
let statusicon = document.getElementById("setting-icon");
var slot1gauge;
var slot1gauge;

setTimeout(function() {
    slot1gauge = document.getElementById("gauge1-data");
    slot2gauge = document.getElementById("gauge2-data");
}, 100);

setInterval(() => {
    var zarg = whatHourIs();
    if (zarg != time) {
        time = zarg;
    }

    loadData();
    fetchpercent();

    // if water was dispensed
    console.log(tmp[0]);
    console.log(tmp[1]);
    
    if (count[0] != tmp[0] || count[1] != tmp[1]) {
        count[0] = tmp[0];
        count[1] = tmp[1];
        randommize_recommend();
    }

    updateMinitab.innerText = "สถานะ ณ เวลา " + time + ":00 - " + time + ":59";
    if (communicator == 11) {
        statusicon.style.animation = "circumstance 3s forwards linear infinite";
    
    } else {
        statusicon.style.animation = "none";
    }

    communicator = 0;
}, 5000);

