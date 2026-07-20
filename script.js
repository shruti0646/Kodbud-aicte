let is24Hour = false;


function updateClock(){

    let now = new Date();


    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let period = "";


    if(!is24Hour){

        period = hours >= 12 ? "PM" : "AM";

        hours = hours % 12;

        hours = hours ? hours : 12;

    }


    hours = hours.toString().padStart(2,"0");
    minutes = minutes.toString().padStart(2,"0");
    seconds = seconds.toString().padStart(2,"0");


    document.getElementById("clock").innerHTML =
    `${hours}:${minutes}:${seconds} ${period}`;

}


setInterval(updateClock,1000);


updateClock();



document.getElementById("toggleBtn")
.addEventListener("click",function(){


    is24Hour = !is24Hour;


    if(is24Hour){

        this.innerHTML="Switch to 12 Hour";

    }
    else{

        this.innerHTML="Switch to 24 Hour";

    }


});