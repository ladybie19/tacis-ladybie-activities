function login() {
const Username = document.getElementById('username').value;
const Password = document.getElementById('password').value; 

const error = document.getElementById('error');

    if((Username == "ladybie")  && (Password == "123")) {
        error.innerHTML = "Login successful";
        error.style.color = "green";
        error.style.backgroundColor = "lavender";
        error.style.visibility = "visible";
    }

    else {
        error.innerHTML = "Invalid username or password";
        error.style.color = "red";
        error.style.backgroundColor = "lavender";
        error.style.visibility = "visible";
    }
}