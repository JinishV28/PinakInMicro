const phoneInputField2 = document.querySelector("#phoneno2");
    const phoneError2 = document.getElementById("phoneError2");

    const iti2 = window.intlTelInput(phoneInputField2, {
        initialCountry: "in", // Set default to India
        separateDialCode: true, // Displays country code separately
        preferredCountries: ["in", "us", "gb"], // Customize this as needed
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // Provides formatting/validation utils
    });

// Validate phone number on input
phoneInputField2.addEventListener("input", () => {
    if (iti2.isValidNumber()) {
        phoneError2.style.display = "none"; // Hide error if valid
    } else {
        phoneError2.style.display = "inline"; // Show error if invalid
    }
});

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("fullname2").value.trim();
    const email = document.getElementById("exampleInputEmail2").value.trim();
    const phone = document.getElementById("phoneno2").value.trim();
    const message = document.getElementById("message2").value.trim();

    // Prepare the email message
    const emailBody = `
     Name: ${name}
     Email: ${email}
     Phone: ${phone}
     Message: ${message}
 `;

    const subject = encodeURIComponent("New Query Submission");
    const body = encodeURIComponent(emailBody);

    // Replace with the owner’s email address
    const recipientEmail = "consult@pinakinmicro.com";

    // Construct the mailto link
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Optionally, you can clear the form inputs if needed
    document.getElementById("queryForm").reset();
}