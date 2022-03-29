



const signupNewUser = async (e) => {
    e.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up, please try again');
        }
    }
    else {
        alert('Please enter a valid username and password (password must be at least 8 characters)');
    }


};




var el = document
    .querySelector('#submit-sign-up-btn');
if (el) {
    el.addEventListener('click', signupNewUser);
}




// document
//     .querySelector('.login-form')
//     .addEventListener('submit', loginFormHandler);