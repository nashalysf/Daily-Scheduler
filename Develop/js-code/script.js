
$(document).ready(function() {
  
    // current date
    var cTime = moment().format("dddd, MMMM Do Y")
    $("#currentDay").append(cTime)

    // current hour 
    var milHour = moment().format("HH")
    var businessHoursMil = ["09", "10", "11", "12", "13", "14", "15", "16", "17"]

  //save function 
  $(".saveBtn").click(function() {
    var textSave = $.trim($(this).siblings("textarea").val());
    var newSave = {text: textSave, hour: this.id}
    storedAgenda.push(newSave)
    window.localStorage.setItem("agendaSave", JSON.stringify(storedAgenda))
})

})