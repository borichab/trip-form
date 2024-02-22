// Get the date input element
var dateinput = document.getElementById("today");

// Create a regular expression to match the DD/MM/YYYY format
var dateFormat = /^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/](19|20)\d\d$/;

// Create a function to handle input changes
dateinput.onchange = function() {
    // Get the input value
    var dateinputValue = dateinput.value;

    // Check if the input value matches the date format
    if (!dateFormat.test(dateinputValue)) {
        dateinput.value = "";
        alert("Please Enter Valid date");
    }
    else{
        var today = new Date();
        var enteredDate = dateinputValue;
        var date = today.toLocaleDateString('en-GB');
        console.log(date);

        console.log(enteredDate);
        if(Date(date) > Date(enteredDate)){
            console.log(today +" > "+ enteredDate);
            alert("Please Enter date in future");
            dateinput.value = today;
        }
    }
};

// Get the time input element
var timeinput = document.getElementById("time");

// Create a regular expression to match the hh:mm format
//var timeFormat = /^([01]?[0-9]|1[0-2]):[0-5][0-9]$/;
var timeFormat = /^(1[012]|0[1-9]):[0-5][0-9]$/;

// Create a function to handle input changes
timeinput.onchange = function() {
    // Get the input value
    var timeinputValue = timeinput.value;

    // Check if the input value matches the time format
    if (!timeFormat.test(timeinputValue)) {
        timeinput.value = "";
        alert("Enter valid time / Enter Time in 12 hours format");
    }
};

// Get a reference to the form element
const form = document.getElementById('myForm');

let startTime = 0;
let endTime;
let totalTime;

// Set the start time when the form is first changed
form.addEventListener('change', function(event){
    if(startTime == 0){
        startTime = new Date().getTime();
    }
});

form.onsubmit = function(){

    if(dateinput.value == ""){
        alert("Date field is required");
        return false;
    }

    if(timeinput.value == ""){
        alert("Time field is required");
        return false;
    }

    //calculating total time taken to fill a form
    endTime = new Date().getTime();
    totalTime = endTime - startTime;
    var minutes = Math.floor(totalTime / 60000);
    var seconds = ((totalTime % 60000) / 1000).toFixed(0);
    var timeTaken = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    alert(`Time Taken to fill form : ${timeTaken}`);
    // window.location.href = "/index.html";

    //set time taken using session
    sessionStorage.setItem("timeVariant1", timeTaken);
}