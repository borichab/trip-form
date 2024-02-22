function validate(){
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

    //calculating total time taken to fill a form
    endTime = new Date().getTime();
    totalTime = endTime - startTime;
    var minutes = Math.floor(totalTime / 60000);
    var seconds = ((totalTime % 60000) / 1000).toFixed(0);
    var timeTaken = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    alert(`Time Taken to fill form : ${timeTaken}`);
    // window.location.href = "/index.html";
}