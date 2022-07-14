
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

  // local storage
    var storedAgenda = JSON.parse(localStorage.getItem("agendaSave")) || [] ;
    console.log(storedAgenda, "storedAgenda")
    for (var i = 0; i < storedAgenda.length; i++) {
        var hour = storedAgenda[i].hour;
        var textBlock = $("#text-" + hour)
        textBlock.text(storedAgenda[i].text)
        $("#text-" + hour).append(textBlock)
    }

})