// get current date and time from moment
// display formatted date and time at top of page
    //use jquery to find parent element to append date and time to 
    //append date and time
    
    
// create dom elements for calendar hours
    //create classes in css for different background colors
    //loop through time-col and check agains current time 
    //use jquery to append class based on past present future 
        //change past hours to past class
        //change current time to red
        //change future to future class / green color
// add click event to event column to activate text 
// create element to enter event 
    // save button with click event 
    // saves event to local storage
// get events from local storage so they dont disappear on page reload
// load events into appropriate collumns on page refresh
// event object model:
//     {
//         eventName:'String',
//         eventBody:'String',
//         eventTime:'eventTime',
//     }

var currentDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');

$( "#currentDay" ).append(currentDateTime);

const times = ['8 A.M.', '9 A.M.', '10 A.M.', '11 A.M.', '12 P.M.', '1 P.M.', '2 P.M.', '3 P.M.', '4 P.M.', '5 P.M.'];


addEventListener("click",)