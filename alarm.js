// array containing all the saved presets for the alarm
var savedpresets = ["15:00:00", "16:00:00", "17:00:00"];

// function to add a zero onto the number of either the alarm or the current time if is a number smaller than 10
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// function to get the current time and display it
function displayTime() {
    // get current time
    var ctime = new Date();

    // current time hours
    var h = addZero(ctime.getHours());
    // current time minutes
    var m = addZero(ctime.getMinutes());
    // curent time seconds
    var s = addZero(ctime.getSeconds());
    // current time full string
    var ctt = addZero(ctime.getTime());

    // displays the current time on the HTML element 
    document.getElementById("time-output").innerHTML = h + ":" + m + ":" + s;
}
setInterval(function () { displayTime(); }, 1000);

function loadAlarm() {
    // main alarm function
    function alarm() {
        // get current time
        var ctime = new Date();

        // current time hours
        var h = addZero(ctime.getHours());
        // current time minutes
        var m = addZero(ctime.getMinutes());
        // curent time seconds
        var s = addZero(ctime.getSeconds());
        // current time full string
        var ctt = addZero(ctime.getTime());

        // set the time to be displayed on the alarm
        var atime = new Date();

        // gets the value of the alarm inputs from the HTML element
        var hvalue = document.getElementById("seth").value;
        var mvalue = document.getElementById("setm").value;
        var svalue = document.getElementById("sets").value;

        // sets the value of the input to the alarm
        atime.setHours(hvalue, mvalue, svalue)
        // alarm hours
        var ah = addZero(atime.getHours());
        // alarm minutes
        var am = addZero(atime.getMinutes());
        // alarm seconds
        var as = addZero(atime.getSeconds());
        // alarm full time string
        var att = addZero(atime.getTime());

        // displays the alarm time on the HTML element 
        document.getElementById("alarm-output").innerHTML = "The alarm's time is " + ah + ":" + am + ":" + as;

        // takes away the values of the alarm's time with the current time
        var ot = Math.round(att - ctt);

        // splits the output into hms and rounds it to a readable number
        var oh = addZero(Math.trunc(ot / (1000 * 60 * 60)));
        var om = addZero(Math.trunc(ot / (1000 * 60)));
        var os = addZero(Math.trunc(ot / 1000));

        // checks to see if the minutes is greater than 60 and if so takes away 60 from it
        while (om > 60) {
            om = om - 60;
        }

        // checks to see if the seconds is greater than 60 and if so takes away 60 from it
        while (os > 60) {
            os = os - 60;
        }

        // gives the user a notification when the alarm time and the current time are the same value
        if (ot == 0) {
            var audio = new Audio('sound.mp3');
            audio.play();
            window.alert("The alarm has finished!");
            audio.pause();
        }

        // notifications for the user inputting an alarm greater than the current time
        if (os == "0-280") {
            window.alert("Please input another time for the alarm")
            // minus 5 mins of the alarm
        } else if (os == "0-600") {
            window.alert("Please input another time for the alarm")
            // minus 10 mins of the alarm
        } else if (os == "0-1200") {
            window.alert("Please input another time for the alarm")
            // minus 20 mins of the alarm
        }

        // display the output of the alarm and the time left onto the HTML element
        document.getElementById("time-left").innerHTML = "The time left is " + oh + ":" + om + ":" + os;
    }
    // sets the interval in ms in which to refresh the function
    setInterval(function () { alarm(); }, 1000);
}

// function to save the presets for the alarm
function savePreset() {
    // gets the value of the HTML input box
    var presetvalue = document.getElementById("presetvalue").value;

    // pushes the value just acquired to the presets array
    savedpresets.push(presetvalue);
}

// function to display the currently saved presets from the array
function displayPresets(y) {
    // checks to see if the given value by the button press is either 0 or 1 and changing the HTML element based on this
    if (y == 0) {
        window.alert("Current presets: " + savedpresets);
    } else {
        document.getElementById("preset-output").innerHTML = "";
    }
}