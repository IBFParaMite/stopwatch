function stopwatchStart() {
    var ctime = new Date();
    
    var timestarted = [];
    timestarted.push(ctime);
    console.log(timestarted);
    
    document.getElementById("stopwatch-output").innerHTML = "The stopwatch was started at " + timestarted;
}