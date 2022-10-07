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
function compileSchedule() {
    //  create hour objects
    
    var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
    var hourArea = [];
    for (var i = 0; i < hours.length; i++) {
        var newHour = new moment(currentDateTime);
        newHour.hour(hours[i]);
        newHour.minute(0);
        newHour.second(0);
        newHour.millisecond(0);

        hourArea.push(newHour)
    }

    //  create new row for each hour object
    for (var i = 0; i < hourArea.length-1; i++){
        var row = $("<div");
        row.addClass("row");
    }

    //  create text area
    var textArea = $("<textarea>");
    textArea.addClass(".......")

    //  create function to change class of textArea based upon the current time of day
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

    //  create saveButton object with save icon
    var saveButton = $("<button>");
    saveButton.addClass("saveBtn")

}