var day = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(day);
console.log(day);
var Day = [{
    id: "hour-9",
    hour:"9",
    meridiem: "AM",
}
,
{
    id: "hour-10",
    hour:"10",
    meridiem: "AMP",
}
,
{
    id: "hour-11",
    hour:"11",
    meridiem: "AM",
}
,   
{
    id: "hour-12",
    hour:"12",
    meridiem: "PM",   
}
,
{
    id: "hour-13",
    hour:"1",
    meridiem: "PM",   
}
,
{
    id: "hour-14",
    hour:"2",
    meridiem: "PM",   
}
,
{
    id: "hour-15",
    hour:"3",
    meridiem: "PM",   
}
,
{
    id: "hour-16",
    hour:"4",
    meridiem: "PM",   
}
,
{
    id: "hour-17",
    hour:"5",
    meridiem: "PM",   
}
]
//Can enter the event + SAVE event in the timeblock --> use localStorage

   $(".saveBtn").on ("click",function(){
    var userInput = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(userInput,time);
    console.log(userInput);
    console.log(time);
 });

// function colorBlock() {
//     var hourNow = moment().hour(); 
//     $(".time-block").each(function() {
//         var hourTime = parseInt($(this).attr("id").split('-')[1]);
//         if(hourTime < hourNow) {
//             $(this).addClass("past");
//         }
//         else if(hourTime === hourNow) {
//             $(this).removeClass("past");
//             $(this).addClass("present");
//         }
//         else {
//             $(this).removeClass("past");
//             $(this).removeClass("present");
//             $(this).addClass("future");
//         }
//     });
// }

// function background(){
//     TimeBlocks.each(function() 
//     {
//         var hour = parseInt($(this).attr("data-hour").split('-')[0]);
    
//         console.log(hour)
    
//         if(hour < hoursNow) {
//             $(this).addClass("past");
//         }
//         else if(hour === hoursNow){
//             $(this).addClass("present")
//         }
//         else {
//             $(this).addClass("future")
//         }
    
    // });}