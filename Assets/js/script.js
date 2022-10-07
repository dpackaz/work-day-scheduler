/*$(document).runDateTime(function () {

    console.log(moment());

    let updateDateTime = function () {
        currentDateTime = moment().format("ddd, MMMM Do YYY, h:mm:ss a")
        $("#current-day").text(currentDateTime)
    }

    updateDateTime();
})*/

//create object for current date and time
var currentDateTime = moment().format("dddd. MMMM Do, YYYY, hh:mm:ss a")
$("#currentDay").text(currentDateTime);
console.log(currentDateTime);

//create function to update the current date and time on the page when the page loads
function runningTime() {
    currentDateTime = moment().format("dddd, MMMM Do, YYYY. hh:mm:ss a");
    $("#currentDay").text(currentDateTime);
}
//every 1000 milliseconds, update current time
setInterval(runningTime, 1000);


//create hour object, append text object, append save button
function createRows() {
    var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

}

//create function to change class of textArea based upon the current time of day
function color(scheduleHour) {
    if (currentDateTime.text.isBetween(scheduleHour[i], scheduleHour[i+1], "[]")) {
        textArea.addClass("present");
    }
    else if (currentDateTime.text.isBefore(scheduleHour[i])) {
        textArea.addClass("future");
    }
    else {
        textArea.addClass("past");
    }
}
//create saveButton object with save icon
var saveButton = $("<button>");
saveButton.addClass("saveBtn")