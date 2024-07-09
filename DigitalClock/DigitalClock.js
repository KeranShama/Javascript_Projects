function DisplayTime(){
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var date = new Date();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = h<11 ? 'AM' : 'PM';
    var todate = date.getDate();
    todate = (todate<10)?"0"+todate:todate;
    
    document.getElementById("Date").innerHTML = dayNames[date.getDay()]+" "+ todate + ' '+ monthNames[date.getMonth()]+ ' '+ date.getFullYear();

    // 12 hours format
    if(h>=12){
        h-=12;
    }
    if(h==0){
        h = 12;
    }

    h = (h<10)?"0"+h:h;
    m = (m<10)?"0"+m:m;
    s = (s<10)?"0"+s:s;

    document.getElementById("Clock").innerHTML = h + ":" + m + ":" + s + " " + session;
    setTimeout(DisplayTime, 1000)
}

//setInterval(DisplayTime, 500)
DisplayTime();