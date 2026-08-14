const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const ticket = document.getElementById("ticket").value;
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms").checked;

    // Reset message
    message.textContent = "";
    message.className = "";

    // Basic validation
    if (name.length < 3) {
        showError("Please enter your full name.");
        return;
    }

    if (!email.includes("@")) {
        showError("Please enter a valid email address.");
        return;
    }

    if (phone.length < 10) {
        showError("Please enter a valid phone number.");
        return;
    }

    if (!ticket) {
        showError("Please select a ticket type.");
        return;
    }

    if (password.length < 6) {
        showError("Password must contain at least 6 characters.");
        return;
    }

    if (password !== confirmPassword) {
        showError("Passwords do not match.");
        return;
    }

    if (!terms) {
        showError("Please accept the terms and conditions.");
        return;
    }

    // Successful registration
    message.textContent =
        `🎉 Registration successful! Welcome, ${name}!`;
    message.className = "success";

    // Clear form
    form.reset();
});

function showError(text) {
    message.textContent = text;
    message.className = "error";
}