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
function balanceUpdate(amount, isAdd) {
    const balance = document.getElementById('balance-total');
    const balanceInText = parseFloat(balance.innerText);
    let newBalance;
    if (isAdd == true) {
        newBalance = balanceInText + amount;
    }
    else {
        newBalance = balanceInText - amount;
    }
    balance.innerText = newBalance;


}

//Handle  Deposit 
document.getElementById('deposit-button').addEventListener('click',
    function () {
        const amount = getInputValue('deposit-input');
        // Error handle 
        if (amount > 0) {
            UpdateTotal('total-deposit', amount);
            balanceUpdate(amount, true);
        }

    }
)

// Handle  Withdraw 
document.getElementById('withdraw-button').addEventListener('click',
    function () {
        const amount = getInputValue('withdraw-input');
        const balance = document.getElementById('balance-total').innerText;
        // amount cant't be negative and if not have balance we can't withdraw 
        if (amount > 0 && balance >= amount) {
            UpdateTotal('withdraw-text', amount);
            balanceUpdate(amount, false);
        }
    }
)