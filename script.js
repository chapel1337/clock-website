// i give up
// 7/22/2022
// waste of 2 hours
// i love css! i love css! i love css! i love css! i love css!

function checkTime() {
    let date = new Date();

    let month = date.getMonth();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let clockTime = document.getElementById("clock_time");
    let clockSeconds = document.getElementById("clock_seconds");

    // credit to jac
    clockTime.innerHTML = (`${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}`);
    clockSeconds.innerHTML = (`${seconds < 10 ? "0" : ""}${seconds}`);
    // -------------
}

setInterval(checkTime, 1000);