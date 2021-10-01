// Used Moment to display current date to header            
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

// GIVEN I am using a daily planner to create a schedule             
// Create planner time block list  
                                
// Defining variables
var saveBtn = $(".saveBtn");

// each time block is color-coded to indicate whether it is in the past, present, or future
function timeBlockColor() {
    var hour = moment().hours();
    console.log(hour);

    $(".time-block").each(function () {
        var currHour = parseInt($(this).attr("id"), 10);
        
        console.log(currHour);

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// WHEN I refresh the page
// THEN the saved events persist
function savePlanner() {
    $(".hour").each(function () {
        // get the name of the div 
        var name = String($(this).attr("name")).trim().toLowerCase()

        // let's trim the name and check it in console
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

// // WHEN I click the save button for that time block
 saveBtn.on("click", function () {
   // get the hour (same as the name)
   var name = $(this).siblings(".hour").text().trim().toLowerCase()

   // get the text entered in the box 
   var text = $(this).siblings(".textarea").val()

   // let's check the console for vars
   console.log("name: " + name)
   console.log("plan: " + text)

   // THEN the text for that event is saved in local storage
   localStorage.setItem(name, text);
 });

saveBtn.on("click", savePlanner); 

// Execute functions
timeBlockColor();
savePlanner();