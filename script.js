// Using Moment to display current date on header            
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);
 
                                
// variable for the save button
var saveBtn = $(".saveBtn");

// each time block is color-coded to indicate whether it is in the past, present, or future
function timeBlockColor() {
    var hour = moment().hours();
    console.log(hour);
    // select elements with the class time-block
    $(".time-block").each(function () {
        var currHour = parseInt($(this).attr("id"), 10);
        
        console.log(currHour);
        // add CSS class to color-code based on the current hour
        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};


// on page refresh, the saved events persist using local storage
function savePlanner() {
    $(".hour").each(function () {
        // get the name of the div 
        var name = String($(this).attr("name")).trim().toLowerCase()

        // trim the name and check it in console
        console.log("name " + name)

        // retrieve the plan from storage 
        var plan = localStorage.getItem(name)

        // only display it in console/textbox if it's there, otherwise ditch the log spam
        if (plan !== null) {
            console.log("from storage: " + plan)
            $(this).siblings(".textarea").val(plan)
        }
    });
}

// on click function to save user input for each time block
 saveBtn.on("click", function () {
   // get the hour (same as the name)
   var name = $(this).siblings(".hour").text().trim().toLowerCase()

   // get the text entered in the box 
   var text = $(this).siblings(".textarea").val()

   // check the console for vars
   console.log("name: " + name)
   console.log("plan: " + text)

   // save the text for that event in local storage
   localStorage.setItem(name, text);
 });

saveBtn.on("click", savePlanner); 

// Execute functions
timeBlockColor();
savePlanner();