function getDate() {
    var d = new Date();

    function formatDate(d) {
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        var day = addZero(d.getDate());
        var monthIndex = d.getMonth();
        var year = addZero(d.getFullYear());
        var hour = addZero(d.getHours());
        var minute = addZero(d.getMinutes());
        var second = addZero(d.getSeconds());

        return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hour + ":" + minute + ":" + second;
    }

    document.getElementById("currentdate").innerHTML = "The current date is " + formatDate(d);

    var dvalue = document.getElementById("setd").value;
    var mvalue = document.getElementById("setm").value - 1;
    var yvalue = document.getElementById("sety").value;
    var hovalue = document.getElementById("setho").value;
    var mivalue = document.getElementById("setmi").value;
    var sevalue = document.getElementById("setse").value;

    var target = new Date(yvalue, mvalue, dvalue, hovalue, mivalue, sevalue);

    document.getElementById("targetdate").innerHTML = "The countdown date is " + formatDate(target);

    var msleft = target - d;

    var daysleft = Math.trunc(msleft / (1000 * 60 * 60 * 24));
    var hoursleft = Math.trunc(msleft / (1000 * 60 * 60));
    var minsleft = Math.trunc(msleft / (1000 * 60));
    var secleft = Math.trunc(msleft / (1000));

    document.getElementById("placeholdertext1").innerHTML = "The number of days left until the countdown date is: ";
    document.getElementById("dayoutput").innerHTML = daysleft + " days";
    document.getElementById("placeholdertext2").innerHTML = "or...";
    document.getElementById("houroutput").innerHTML = hoursleft + " hours";
    document.getElementById("minoutput").innerHTML = minsleft + " mins";
    document.getElementById("secoutput").innerHTML = secleft + " seconds";

}
setInterval(function () { getDate(); }, 1000);