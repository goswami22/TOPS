function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    error.innerHTML = "";

    if (name === "") {
        error.innerHTML = "Name is required";
        return false;
    }

    if (!email.includes("@")) {
        error.innerHTML = "Enter valid email";
        return false;
    }

    if (password.length < 6) {
        error.innerHTML = "Password must be at least 6 characters";
        return false;
    }

    return true;
}