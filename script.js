let display = document.getElementById("display");


// Display input
function appendValue(value){

    display.value += value;

}


// Clear screen
function clearDisplay(){

    display.value="";

}


// Delete last character
function deleteChar(){

    display.value =
    display.value.slice(0,-1);

}


// Calculate result
function calculate(){

    try{

        display.value =
        eval(display.value);

    }

    catch{

        display.value="Error";

    }

}