function labelVisibility(inputId, labelId) {
    const inputElement = document.getElementById(inputId);
    const labelElement = document.querySelector(`.${labelId}`);
    
    if (inputElement.value.length > 0) {
        labelElement.classList.remove('hidden');
    } else {
        labelElement.classList.add('hidden');
    }
}

const changeColor = () => {
    const passwordInput = document.getElementById('password-input');

    const loginButton = document.getElementById('login-button');

    if(passwordInput.value.length > 6) {
        loginButton.style.background = '#FFFC00'
        loginButton.style.color = '#000'
    }else{
        loginButton.style.background = '#BBBBBB'
        loginButton.style.color = '#fff'
    }
}