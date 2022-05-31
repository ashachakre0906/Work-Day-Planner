## Work-Day Scheduler

## Decsription of the project

`Work-day scheduler` allows user to save events for each hour of the day.The app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. `moment.js` link to an library to work with date and time.Header will display the current date,day and time on the top of the webpage through `moment().format()`.`index.html` will have timeblocks created for each hour .common class `timeblock`attached to the parent `div`.Textarea is basically sibling which has a common class `description`for each div.Each block are color coded to represents if it is past, present and future.When user enters data in any timeblock and clicks the save button it needs to saved in the local storage by `localStorage.setItem()`method.Retrieving the stored data from local storage for each timeblock and displaying on the page using `localStorage.getItem()`method.Refreshing the page to make sure my saved events still persists.Added comments throughout the html and script.js file.Using Bootstrap to develop a responsive and mobile friendly webpage.

## Links

[Github URL here](https://github.com/ashachakre0906/Work-Day-Planner)<br>
[Live webpage URL](https://ashachakre0906.github.io/Work-Day-Planner/)<br>

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

```

### Header displays the current day, date and time

<img src =./assets/images/currentdateandtime.png>

### Color-coded each time-block (PAST - GREY,PRESENT - RED, FUTURE - GREEN)

<img src =./assets/images/colorblock.png>

### Function displayData() will retrieve the data from the local storage and display it on the page.data will still persists after refreshing the page.

```
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
    displayData()
```
## Built with

- HTMLs
- CSS
- Jquery
- Bootstrap. 

## Author

Starter code includes some parts of HTML and full CSS given by UC Berkely Extension.
## License

Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.

Copyright (c) [2022] [Asha Chakre]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
