let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    colorChange();
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    colorChange();
}

function colorChange(){
    if (currentNumber < 0) {
        document.getElementById("currentNumber").style.color = "red";
    } else if (currentNumber > 0) {
        document.getElementById("currentNumber").style.color = "green";
    }
}