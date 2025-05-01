const display = document.getElementById("display");
let resultShown = false; //For check whether the result is shown or not.

//Show the input value in the display
function showInDisplay(input){
    display.value += input;
}

//Clear the screan
function clearall(){
    display.value = '';
    resultShown = false;
}

//Calculate the result using eval function
function calculate(){
    try{
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        display.value = eval(expression);
        resultShown = true;
    }
    catch(error){
        display.value = "Error"
        resultShown = true;
    }
}

//Delete the last value from display
function del(){
    display.value = display.value.toString().slice(0,-1);
}

//Read values from keyboard
document.addEventListener("keydown" , function(event){
    const key = event.key;

    if(key>=0 && key<=9 || key ==='-' || key ==='+'||key ==='%'){
        if(resultShown){
            display.value = '';
            resultShown = false;
        }
        showInDisplay(key)
    }

    else if (key === '*') {
        showInDisplay('×');}
    else if (key === '/') {
        showInDisplay('÷');}

    if(key === 'Enter'){
        calculate();
    }

    if(key === 'Backspace'){
        del();
    }
    if(key === 'Escape'){

        clearall()
    }
});
