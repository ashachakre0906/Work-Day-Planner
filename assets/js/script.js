var dateTime = moment().format('dddd, MMMM Do - h:mm:ss a');
$('#currentDay').text(dateTime);
console.log(dateTime);
//for each method to loop over each time block
function colorCoded() {
    var hourNow = moment().hour(); 
    $(".time-block").each(function() {
        var Time = $(this).attr("id").split('-')[1];
        console.log ($(this));
        console.log(typeof Time);//returns string
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
    colorCoded();
    //Added event listener to the save button   
    $(".saveBtn").on("click",function(){
        var text = $(this).siblings(".description").val().trim();
        console.log(text);
        var value = $(this).parent().attr("id");
        console.log(value);
        localStorage.setItem(value,text);//saving the data into local storage
     });

    //retrieving the stored data from local storage for each timeblock 
    //targetting the id , class description
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
    displayData();