var dateTime = moment().format('dddd, MMMM Do - h:mm:ss a');
$('#currentDay').text(dateTime);
console.log(dateTime);
//added event listener to the save button
$(".saveBtn").on ("click",function(){
    // event.preventDefault();
    console.log(this);
    var userInput = parseInt($(this).siblings(".description").val());
    console.log(userInput);
    var time = $(this).parent().attr("id");//returning all the div's
    console.log(time);
    localStorage.setItem(userInput,time);//saving the data into local storage
    localStorage.getItem(time);//getting the data from local storage
    // console.log(userInput);
    // console.log(time);
 });

function colorBlock() {
    var hourNow = moment().hour(); 
    $(".time-block").each(function() {
        var hourTime = ($(this).attr("id").split('-')[1]);
        console.log(typeof hourTime);
        if(hourTime < hourNow) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if(hourTime === hourNow){
            $(this).addClass("present")
        }
        else {
            $(this).addClass("future")
        }   
    });}
    colorBlock();

    //fetching the data from localStorage


