
$(document).ready(function() {
  
    // current date
    var cTime = moment().format("dddd, MMMM Do Y")
    $("#currentDay").append(cTime)

    // current hour 
    var milHour = moment().format("HH")
    var businessHoursMil = ["09", "10", "11", "12", "13", "14", "15", "16", "17"]

  
})