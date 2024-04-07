function clock(){
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let period = "AM";
    if(hours>12){
        period = "PM";
    }
    hours = hours>12 ? hours%12 : hours;
    if(hours<10){
        hours = "0"+hours;
    }
    if(minutes<10){
        minutes = "0"+minutes;
    }
    if(seconds<10){
        seconds = "0"+seconds;
    }
    document.querySelector("#hour").innerHTML = hours;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;
    document.querySelector("#period").innerHTML = period;

}
let updateclock = setInterval(clock,1000);

let today = new Date();
const date = today.getDate();
const year = today.getFullYear();
const day = today.toLocaleDateString("default",{weekday: "long"});
const month = today.toLocaleDateString("default",{month: "short"});

document.querySelector("#month").innerHTML = month;
document.querySelector("#day").innerHTML = day;
document.querySelector("#date").innerHTML = date;
document.querySelector("#year").innerHTML = year;
