window.addEventListener("load", function() {
    var now = new Date();
    var utcString = now.toISOString().substring(0,19);
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var localDatetime = year + "-" +
                      (month < 10 ? "0" + month.toString() : month) + "-" +
                      (day < 10 ? "0" + day.toString() : day) + "T" +
                      (hour < 10 ? "0" + hour.toString() : hour) + ":" +
                      (minute < 10 ? "0" + minute.toString() : minute) +
                      "00" +
                      utcString.substring(16,19);
    //inputField.value = now.toISOString().slice(0, -5);
    
    var datetimeField = document.getElementById("today");
    datetimeField.value = localDatetime.slice(0, -5);
   // datetimeField.value = now.toISOString().slice(0, -5);

    const datetimeInput = document.getElementById('today');
    datetimeField.setAttribute('min', localDatetime.slice(0, -5));
    const currentDate = new Date();

    datetimeField.addEventListener('change', function(event) {
        const selectedDate = new Date(datetimeField.value);
        if (selectedDate < currentDate) {
            alert('Please select a date and time in the future');
            datetimeField.value = localDatetime.slice(0, -5);
        }
    });
});

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

function validate(){
    // Get the form element
    var form = document.getElementById("myForm");
    
    // Get the value of the input field
    var fullName = document.forms["myForm"]["fullname"].value;
    var email = document.forms["myForm"]["email"].value;
    var city = document.forms["myForm"]["city"].value;
    
    // Check if the input value is empty
    if (fullName == "" || email == "" || city == "") {
        // If the value is empty, display an error message
        alert("All fields are required!");
        return false;
    }else{
        //email validation
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(email)==false){
            alert("Please enter valid Email address");
            return false;
        }
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
    sessionStorage.setItem("timeVariant2", timeTaken);
    
    // If the input value is not empty, the form is valid
    return true;   
}
