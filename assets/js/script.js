var day = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(day);
console.log(day);
var Day = [{
    id: "hour-9",
    hour:"9",
    meridiem: "am",
}
,
{
    id: "hour-10",
    hour:"10",
    meridiem: "am",
}
,
{
    id: "hour-11",
    hour:"11",
    meridiem: "am",
}
,   
{
    id: "hour-12",
    hour:"12",
    meridiem: "pm",   
}
,
{
    id: "hour-13",
    hour:"13",
    meridiem: "pm",   
}
,
{
    id: "hour-14",
    hour:"14",
    meridiem: "pm",   
}
,
{
    id: "hour-15",
    hour:"15",
    meridiem: "pm",   
}
,
{
    id: "hour-16",
    hour:"16",
    meridiem: "pm",   
}
,
{
    id: "hour-17",
    hour:"17",
    meridiem: "pm",   
}
]

//for each timeblock
(".saveBtn").on("click", function(){
    var userInput = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    
});
function colorBlock() {
    var hourNow = moment().hour(); 
    $(".time-block").each(function() {
        var hourTime = parseInt($(this).attr("id").split('-')[1]);
        if(hourTime < hourNow) {
            $(this).addClass("past");
        }
        else if(hourTime === hourNow) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}