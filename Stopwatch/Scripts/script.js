function addZero(i) {
    if (i < 10 && i >= 0) {
        i = "0" + i;
    }
    return i;
}

function displayTime() {
    var tod = "AM";
    var ctime = new Date();
    var h = ctime.getHours();

    if (h >= 13) {
        h = h - 12;
        if (h > 10) {
            h = "0" + h;
        }
        
        tod = "PM";
    }

    var m = addZero(ctime.getMinutes());
    var s = addZero(ctime.getSeconds());

    if (ctime.getHours === "4" && ctime.getMinutes === "20") {
        $("#time-output").color = "red";
    }

    $("#time-output").text("The current time is: " + h + ":" + m + ":" + s + " "+ tod);
}
setInterval(function () { displayTime(); }, 1000);

function loadAlarm() {
    var sethour = $("#seth").val();
    var setminutes = $("#setm").val();
    var setseconds = $("#sets").val();
    var tod = $("#hourSelect").val();

    if (tod === "1") {
        tod = "AM";
    } else if (tod === "2") {
        tod = "PM";
    }

    function alarm() {
        $("#alarm-output").text("The alarm's time is: " + sethour + ":" + setminutes + ":" + setseconds + " " + tod);
        

        var alarmTime = new Date();

        if (tod === "PM") {
            alarmTime.setHours(sethour + 12);
        } else if (tod === "AM") {
            alarmTime.setHours(sethour);
        }
        
        alarmTime.setMinutes(setminutes);
        alarmTime.setSeconds(setseconds);

        var currentTime = new Date();

        var timeLeft = currentTime - alarmTime;

        var timeLeftHours = addZero(Math.trunc(timeLeft / (1000 * 60 * 60)));
        var timeLeftMinutes = addZero(Math.trunc(timeLeft / (1000 * 60)));
        var timeLeftSeconds = addZero(Math.trunc(timeLeft / 1000));

        $("#time-left").text("The time left is: " + timeLeftHours + ":" + timeLeftMinutes + ":" + timeLeftSeconds);

        if (timeLeft === 0) {
            var audio = new Audio('sound.mp3');
            audio.play();
            window.alert("The alarm has finished!");
            audio.pause();
        }

        if (os === "0-280") {
            window.alert("Please input another time for the alarm");
        } else if (os === "0-600") {
            window.alert("Please input another time for the alarm");
        } else if (os === "0-1200") {
            window.alert("Please input another time for the alarm");
        }
    }
    setInterval(function () { alarm(); }, 1000);
}