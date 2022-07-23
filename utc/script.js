// written by chapel1337
// 7/22/2022
// took 2 hours to create

function checkTime() {
    let date = new Date();

    let hours = date.getUTCHours()
    let minutes = date.getUTCMinutes();
    let seconds = date.getUTCSeconds();

    let clockTime = document.getElementById("clock_time");
    let clockSeconds = document.getElementById("clock_seconds");

    // credit to jac
    clockTime.innerHTML = (`${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}`);
    clockSeconds.innerHTML = (`${seconds < 10 ? "0" : ""}${seconds}`);
    // -------------
}

setInterval(checkTime, 1000);