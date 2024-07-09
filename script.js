const displayTotal = document.getElementById("totalBalanceAmount");
const depositInput = document.getElementById("depositInput");
const withdrawInput = document.getElementById("withdrawInput");

let balance = 15;

displayTotal.innerHTML = `$${balance.toFixed(2)}`;

function deposit() {
    if(isNaN(depositInput.value)) {
        alert("Please enter a number");
        return depositInput.value = "";
    } else if(depositInput.value < 0.01 || depositInput.value > 10000) {
        alert("You can only deposit between $0.01 and $10,000");
        return depositInput.value = "";
    } else {
        balance += Number(depositInput.value);
        displayTotal.innerHTML = `$${balance.toFixed(2)}`;
        console.log(`Deposited Amount: $${depositInput.value}`);
        depositInput.value = "";
    }
}

function withdraw() {
    if(isNaN(withdrawInput.value)) {
        alert("Please enter a number");
        return withdrawInput.value = "";
    } else if(withdrawInput.value < 0.01 || withdrawInput.value > 10000) {
        alert("You can only deposit between $0.01 and $10,000");
        return withdrawInput.value = "";
    } else {
        balance -= Number(withdrawInput.value);
        displayTotal.innerHTML = `$${balance.toFixed(2)}`;
        console.log("Withdrawed Amount: " + "$" + withdrawInput.value);
        withdrawInput.value = "";
    }
}