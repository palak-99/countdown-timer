const startButton = document.getElementById('startButton');

const timeInput = document.getElementById('timeInput');

const countdownDisplay = document.getElementById('countdownDisplay');

function startTimer() {
    let valueInSeconds = timeInput.value;

    if(isNaN(valueInSeconds)) {
        countdownDisplay.innerText = "please enter a valid number";
        return
    }
    if(valueInSeconds <= 0) {
        countdownDisplay.innerText = "Please enter seconds greater than 0";
        return
    }
    
    const timer = setInterval(() => {
        valueInSeconds--;
        countdownDisplay.innerText = `Time remaining: ${valueInSeconds} seconds`

        if(valueInSeconds <= 0) {
            clearInterval(timer);
            countdownDisplay.innerText = 'Time up ⏰'
        }
    }, 1000);


}

startButton.addEventListener('click', startTimer);