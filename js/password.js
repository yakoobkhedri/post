function validateInput(input) {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
    return pattern.test(input);
}

function validateForm() {
    const password = document.getElementById("password").value;
    if (validateInput(password)) {
        alert("رمز عبور معتبر است!");
        return true;
    } else {
        alert("رمز عبور باید شامل حروف بزرگ، حروف کوچک، اعداد و علائم باشد.");
        return false;
    }
}