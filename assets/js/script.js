//Displying current date and time pulling from moment.js
var dateTime = moment().format('dddd, MMMM Do - h:mm:ss a');
$('#currentDay').text(dateTime);
// console.log(dateTime);
//for each method to loop over each time block and display the colors
function colorCoded() {
    var hourNow = moment().hour(); //displaying the current hour
    $(".time-block").each(function() {//targetting the class timeblock which is common in each div
        var Time = $(this).attr("id").split("-")[1];//It will return the string "hour-9" and soon.we will remove the dash using split()method and pull the index 1.
        console.log (Time);
        //Adding and removing class past, present and future.
        if(Time < hourNow) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if(Time == hourNow){
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }   
    });}
    colorCoded();//Calling function colorCoded().
    //Added event listener to the save button   
    $(".saveBtn").on("click",function(){
        var text = $(this).siblings(".description").val().trim();//grabbing the description class from sibling textarea html element 
        console.log(text);
        var value = $(this).parent().attr("id");
        console.log(value);
        localStorage.setItem(value,text);//saving the data into local storage using set item method
     });
    //Retrieving the stored data from local storage for each timeblock and displaying on the page using getitem method
    function displayData(){
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));
    };
    displayData();//calling display data function