/*$(document).runDateTime(function () {

    console.log(moment());

    let updateDateTime = function () {
        currentDateTime = moment().format("ddd, MMMM Do YYY, h:mm:ss a")
        $("#current-day").text(currentDateTime)
    }

    updateDateTime();
})*/

var currentDateTime = moment().format("dddd. MMMM Do, YYYY, hh:mm:ss a")
$("#currentDay").text(currentDateTime);
console.log(currentDateTime);

function runningTime() {
    currentDateTime = moment().format("dddd, MMMM Do, YYYY. hh:mm:ss a");
    $("#currentDay").text(currentDateTime);
}

setInterval(runningTime, 1000);