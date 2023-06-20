// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var dt = new Date();

var local_text = ""
var schedule = {}
var storage_item = "schedule"

// current date and time having the dayjs() with nothing inside the parenthesis makes it show current time
function gentime(){
var currentday = dayjs().format('MMMM DD,YYYY:hh:mma');
$('#currentDay').text(currentday);
}

//the function sets a if statement to give past, present and future
function return_tense(hour){

  var current_hour = dt.getHours()

  if (hour < current_hour) {
    return "past"
  } else if (hour == current_hour) {
    return "present"
  } else { 
    return "future"
  }
}

//to set the hours anthing below 12 stays as is and anything over 12 gets subtracted
function return_hour(hour) {
  if (hour <= 11) {
    return hour+' AM'
  } else {
    if (hour > 12) {
    return hour-12 +' PM'
    } else {
      return hour+' PM'
    }
  }
}


function savedata(){
localStorage.setItem(storage_item,JSON.stringify(schedule))
}

function get_data(){
var take = JSON.parse(localStorage.getItem(storage_item))
if (take === null) {
  create_sch()
  
}else{
  for(x=9; x<18; x++){
    schedule[x] = take[x]
  }
  console.log(schedule)
  
}
make_section()
}

function create_sch(){
  for (var i = 9; i < 18; i++) {
    schedule[i] = local_text;
  }
  savedata()
}

function make_section() {

  for (var index = 9; index < 18; index++) {
                              
    $('#container-fluid').append(`<div id="hour-${index}" class="row time-block ${return_tense(index)}">
    <div class="col-2 col-md-1 hour text-center py-3">${return_hour(index)}</div>
     <textarea id="text-${index}" class="col-8 col-md-10 description" rows="3">${schedule[index]}</textarea>
     <button id="btn" onclick=save_schedule_item(${index}) class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
     </button>
    </div>`)
     
   }
}

get_data()

// refreshes every second 
setInterval(gentime,1000);


//First you need to get data using localStorage.getItem and then assign it to textarea using .value property












$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

});
