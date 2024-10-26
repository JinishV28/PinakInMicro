document.getElementById("consultbtn").addEventListener("click", function() {
    document.getElementById("consultation").checked = true;
});

// Add event listener for the "Training" button

const phoneInputField = document.querySelector("#phoneno");
    const phoneError = document.getElementById("phoneError");

    const iti = window.intlTelInput(phoneInputField, {
        initialCountry: "in", // Set default to India
        separateDialCode: true, // Displays country code separately
        preferredCountries: ["in", "us", "gb"], // Customize this as needed
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // Provides formatting/validation utils
    });

// Validate phone number on input
phoneInputField.addEventListener("input", () => {
    if (iti.isValidNumber()) {
        phoneError.style.display = "none"; // Hide error if valid
    } else {
        phoneError.style.display = "inline"; // Show error if invalid
    }
});

function submitForm(event) {
    event.preventDefault();

    // Get form values
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("exampleInputEmail1").value.trim();
    const phone = document.getElementById("phoneno").value.trim();
    const queryType = document.querySelector('input[name="queryType"]:checked').value;
    const message = document.getElementById("message").value.trim();

    // Handle dropdown and 'other' input fields based on query type
    let specificSubject = "";
    if (queryType === "Other") {
        specificSubject = document.getElementById("otherSubject").value.trim();
    } else {
        specificSubject = document.getElementById("dropdownOptions").value.trim();
    }

    // Prepare the email message
    const emailBody = `
        Name: ${fullname}
        Email: ${email}
        Phone: ${phone}
        Query Type: ${queryType}
        Subject: ${specificSubject}
        Message: ${message}
    `;
    
    const body = encodeURIComponent(emailBody);

    // Replace with the owner’s email address
    const recipientEmail = "consult@pinakinmicro.com";

    // Construct the mailto link
    window.location.href = `mailto:${recipientEmail}?subject=${queryType}&body=${body}`;

    document.getElementById("consultForm").reset();
}

// Function to handle showing and hiding specific fields based on query type
function updateDropdown() {
    const dropdownContainer = document.getElementById("dropdownContainer");
    const otherInputContainer = document.getElementById("otherInputContainer");
    const consultationRadio = document.getElementById("consultation");
    const trainingRadio = document.getElementById("training");

    // Show dropdown if "Consultation" or "Training" is selected
    if (consultationRadio.checked || trainingRadio.checked) {
        dropdownContainer.style.display = "block";
        otherInputContainer.style.display = "none";
    } else {
        dropdownContainer.style.display = "none";
    }
}

function showOtherInput() {
    const dropdownContainer = document.getElementById("dropdownContainer");
    const otherInputContainer = document.getElementById("otherInputContainer");

    dropdownContainer.style.display = "none";
    otherInputContainer.style.display = "block";
}
