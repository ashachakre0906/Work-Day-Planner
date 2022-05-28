var day = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(day);
console.log(day);
//Can enter the event + SAVE event in the timeblock --> use localStorage

$(".saveBtn").on ("click",function(event){
    event.preventDefault();
    var userInput = parseInt$(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(userInput,time);
    console.log(userInput);
    console.log(time);
 });

function colorBlock() {
    var hourNow = moment().hour(); 
    $(".time-block").each(function() {
        var hourTime = ($(this).attr("id").split('-')[1]);
        console.log(hourTime,this);
        if(hourTime < hourNow) {
            $(this).addClass("past");
        }
        else if(hourTime === hourNow){
            $(this).addClass("present")
        }
        else {
            $(this).addClass("future")
        }   
    });}
    colorBlock();

    //function to display the value on the page
    var getValue = localStorage.getItem(userInput,time);