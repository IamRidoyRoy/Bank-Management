// Login submit form 
document.getElementById('login-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value;
    // const userEmail = userFiled.ariaValueMax;
    console.log(userEmail);

    // get user password
    const userPassword = document.getElementById('user-password').value;

    // condition 
    if (userEmail == 'example@gmail.com' && userPassword == 'secret') {
        // Go another page 
        window.location.href = "banking.html";
    }

})