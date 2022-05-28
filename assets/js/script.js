var dateTime = moment().format('dddd, MMMM Do - h:mm:ss a');
$('#currentDay').text(dateTime);
console.log(dateTime);
function colorBlock() {
    var hourNow = moment().hour(); 
    $(".time-block").each(function() {
        var Time = $(this).attr("id");
        console.log(typeof Time);//returns string
        if(Time < hourNow) {
            $(this).addClass("past").css("background-color", "rgb(210, 87, 98)");
        }
        else if(Time === hourNow){
            $(this).addClass("present").css("background-color", "rgb(42, 87, 0))");
            $(this).removeClass("past");
        }
        else {
            $(this).addClass("future").css("background-color", "rgb(0, 191, 255)");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }   
    });}
    colorBlock();
 ////Added event listener to the save button   
    $(".saveBtn").on("click",function(handler){
        // $(document).ready(handler);
        // event.PreventDefault();
        // console.log(this);
        var text = $(this).siblings(".description").val().trim();
        console.log(text);
        var value = $(this).parent().attr("id");//returning all the div's has unique ids
        console.log(value);
        localStorage.setItem(value,text);//saving the data into local storage
        // localStorage.getItem(time);//getting the data from local storage
        // console.log(userInput);
        // console.log(time);
     });

    //retrieving the stored data from local storage for each timeblock 
    //targetting the id , class description
    function storedData(){
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-1"));
    $("#hour-14 .description").val(localStorage.getItem("hour-2"));
    $("#hour-15 .description").val(localStorage.getItem("hour-3"));
    $("#hour-16 .description").val(localStorage.getItem("hour-4"));
    $("#hour-17 .description").val(localStorage.getItem("hour-5"));
    $("#hour-18 .description").val(localStorage.getItem("hour-6"));
    };
    storedData();


    


