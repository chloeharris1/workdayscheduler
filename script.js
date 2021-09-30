

// Used Moment to display current date to header            
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

// GIVEN I am using a daily planner to create a schedule             
// Create planner time block list                                  



// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// Add present, past, future CSS classes to hours list
var saveBtn = $(".saveBtn");

// each time block is color-coded to indicate whether it is in the past, present, or future
function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function () {
        var currHour = parseInt($(this).attr("id"));

        // console.log(this); //each time-block

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// WHEN I click the save button for that time block
saveBtn.on("click", function () {

    // console.log(this); //save button
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    // THEN the text for that event is saved in local storage
    localStorage.setItem(time, plan);
});

// WHEN I refresh the page
// THEN the saved events persist
function usePlanner() {

    $(".hour").each(function () {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);

        // console.log(this);
        // console.log(currHour);

        if (currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
}

/**
 * CALL FUNCTIONS
 */

timeBlockColor();
usePlanner();


// WHEN I click into a timeblock
// THEN I can enter an event
    // Allow user to input information in each field

// WHEN I refresh the page
// THEN the saved events persist
    // save session in browser