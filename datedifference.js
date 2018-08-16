function getDate() {
    var d = new Date();

    function formatDate(date) {
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

        var day = addZero(date.getDate());
        var monthIndex = date.getMonth();
        var year = addZero(date.getFullYear());
        var hour = addZero(date.getHours());
        var minute = addZero(date.getMinutes());
        var second = addZero(date.getSeconds());

        return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hour + ":" + minute + ":" + second;
    }

    var d1value = document.getElementById("setd1").value;
    var m1value = document.getElementById("setm1").value - 1;
    var y1value = document.getElementById("sety1").value;
    var ho1value = document.getElementById("setho1").value;
    var mi1value = document.getElementById("setmi1").value;
    var se1value = document.getElementById("setse1").value;

    var date1 = new Date(y1value, m1value, d1value, ho1value, mi1value, se1value);

    document.getElementById("date1").innerHTML = "The 1st date is " + formatDate(date1);

    var d2value = document.getElementById("setd2").value;
    var m2value = document.getElementById("setm2").value - 1;
    var y2value = document.getElementById("sety2").value;
    var ho2value = document.getElementById("setho2").value;
    var mi2value = document.getElementById("setmi2").value;
    var se2value = document.getElementById("setse2").value;

    var date2 = new Date(y2value, m2value, d2value, ho2value, mi2value, se2value);

    document.getElementById("date2").innerHTML = "The 2nd date is " + formatDate(date2);

    var msleft = date2 - date1;

    var daysleft = Math.trunc(msleft / (1000 * 60 * 60 * 24));
    var hoursleft = Math.trunc(msleft / (1000 * 60 * 60));
    var minsleft = Math.trunc(msleft / (1000 * 60));
    var secleft = Math.trunc(msleft / (1000));

    document.getElementById("placeholdertext1").innerHTML = "The number of days between the two dates is: ";
    document.getElementById("dayoutput").innerHTML = daysleft + " days";
    document.getElementById("placeholdertext2").innerHTML = "or...";
    document.getElementById("houroutput").innerHTML = hoursleft + " hours";
    document.getElementById("minoutput").innerHTML = minsleft + " mins";
    document.getElementById("secoutput").innerHTML = secleft + " seconds";

}
setInterval(function () { getDate(); }, 1000);