WelcomeSpeech();

function WelcomeSpeech() {
    let name = prompt("Enter your name:");

    document.getElementById('greet-name').innerHTML = `Hi ${name}, `;
}

function ValidateForm() {
    const name = document.getElementById("name-input").value.trim();
    const email = document.getElementById("email-input").value.trim();
    const phone = document.getElementById("phone-input").value.trim();
    const message = document.getElementById("message-input").value.trim();

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const phoneError = document.getElementById("phone-error");
    const messageError = document.getElementById("message-error");

    // Clear old errors
    [nameError, emailError, phoneError, messageError].forEach(e => {
        e.textContent = "";
        e.classList.add("hidden");
    });

    // Regex patterns
    const namePattern = /^[A-Za-z\s]{2,50}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10,15}$/;

    let isValid = true;

    // Validate name
    if (!name) {
        nameError.textContent = "*Name is required.";
        nameError.classList.remove("hidden");
        isValid = false;
    } else if (!namePattern.test(name)) {
        nameError.textContent = "*Name should contain only letters and spaces.";
        nameError.classList.remove("hidden");
        isValid = false;
    }

    // Validate email
    if (!email) {
        emailError.textContent = "*Email is required.";
        emailError.classList.remove("hidden");
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "*Please enter a valid email address.";
        emailError.classList.remove("hidden");
        isValid = false;
    }

    // Validate phone
    if (!phone) {
        phoneError.textContent = "*Phone number is required.";
        phoneError.classList.remove("hidden");
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        phoneError.textContent = "*Phone number must be 10–15 digits.";
        phoneError.classList.remove("hidden");
        isValid = false;
    }

    // Validate message
    if (!message) {
        messageError.textContent = "*Message cannot be empty.";
        messageError.classList.remove("hidden");
        isValid = false;
    }

    // If valid show submitted data
    if (isValid) {
        document.getElementById("show-name").innerHTML  = name;
        document.getElementById("show-email").innerHTML  = email;
        document.getElementById("show-phone").innerHTML  = phone;
        document.getElementById("show-message").innerHTML  = message;
        document.getElementById("submitted-data").classList.remove("hidden");
    } else {
        document.getElementById("submitted-data").classList.add("hidden");
    }
}

