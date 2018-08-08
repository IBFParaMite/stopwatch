function getDate() {
    var d = new Date();

    var day = d.getTime();

    document.getElementById("currentdate").innerHTML = "The current date is " + d;

    var dvalue = document.getElementById("setd").value;
    var mvalue = document.getElementById("setm").value;
    var yvalue = document.getElementById("sety").value;

    var target = new Date(yvalue, mvalue, dvalue);

    var mstarget = target.getTime();

    document.getElementById("targetdate").innerHTML = "The target date is " + target;

    var comparison = (mstarget - day
    );
    document.getElementById("dayoutput").innerHTML = "The amount of days left is " + comparison;

}
setInterval(function () { getDate(); }, 1000);