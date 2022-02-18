// Get input value 
function getInputValue(inputs) {
    const inputField = document.getElementById(inputs);
    const value = parseFloat(inputField.value);
    inputField.value = '';
    return value;

}

// UpdateTotal
function UpdateTotal(fieldId, amount) {
    const previousTotal = document.getElementById(fieldId);
    const getTotal = parseFloat(previousTotal.innerText);
    const newTotal = getTotal + amount;
    previousTotal.innerText = newTotal;
}

// Balance Update 
function balanceUpdate(amount) {
    const balance = document.getElementById('balance-total');
    const balanceInText = parseFloat(balance.innerText);
    const newBalance = balanceInText + amount;
    balance.innerText = newBalance;
}

//Handle  Deposit 
document.getElementById('deposit-button').addEventListener('click',
    function () {
        const amount = getInputValue('deposit-input');
        UpdateTotal('total-deposit', amount);
        balanceUpdate(amount);
    }
)

// Handle  Withdraw 
document.getElementById('withdraw-button').addEventListener('click',
    function () {
        const amount = getInputValue('withdraw-input');
        UpdateTotal('withdraw-text', amount);

    }
)