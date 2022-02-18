// Get input value 
function getInputValue(inputs) {
    const inputField = document.getElementById(inputs);
    const value = parseFloat(inputField.value);
    return value;

}


// Deposit added 
document.getElementById('deposit-button').addEventListener('click',
    function () {
        const amount = getInputValue('deposit-input');
        console.log(amount);
    }
)