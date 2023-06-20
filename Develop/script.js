// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let dt = new Date();

// current date and time having the dayjs() with nothing inside the parenthesis makes it show current time
function gintime(){
var currentday = dayjs().format('MMMM DD,YYYY:hh:mma');
$('#currentDay').text(currentday);
}
// refreshes every second 
setInterval(gintime,1000);

//the function sets a if statement to give past, present and future
function return_tense(hour){

  let current_hour = dt.getHours()

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

var local_text = ""
var text = {}

function savedata(){
localStorage.setItem("text",JSON.stringify(text))
}

function test_txt(){
  for (var index = 9; index < 18; index++) {
    text[index] = local_text;
  }
}

function set_text(){
  var local = JSON.parse(localStorage.getItem("text"))
  // if empty place local text
 if (local === null) {
  test_txt()
 } else {
  //checks the array 
  for (var index = 9; index < 18; index++) {
    text[index] = local[index]
  }
 }
}

for (var index = 9; index < 18; index++) {
                              
 $('#container-fluid').append(`<div id="hour-${index}" class="row time-block ${return_tense(index)}">
 <div class="col-2 col-md-1 hour text-center py-3">${return_hour(index)}</div>
  <textarea id="text-${index}" class="col-8 col-md-10 description" rows="3">${text[index]}</textarea>
  <button id="btn" onclick=savetext(${index}) class="btn saveBtn col-2 col-md-1" aria-label="save">
   <i class="fas fa-save" aria-hidden="true"></i>
  </button>
 </div>`)
  
}











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
