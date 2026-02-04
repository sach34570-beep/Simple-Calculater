let display= document.getElementById('display');

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = '';
}
function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }

}
function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);

        if (result === Infinity || result === -Infinity) {
            display.value = "∞";
        } 
        else if (isNaN(result)) {
            display.value = "Error";
        } 
        else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}

