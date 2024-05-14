function validateEmails() {
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirm-email").value;

    if (email !== confirmEmail) {
        document.getElementById("email-error").innerText = "Emails do not match!";
        return false;
    } else {
        document.getElementById("email-error").innerText = "";
    }
}