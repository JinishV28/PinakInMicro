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

    // Prepare the message for WhatsApp
    let whatsappMessage = `Name: ${fullname}\nEmail: ${email}\nPhone: ${phone}\nQuery Type: ${queryType}\nSubject: ${specificSubject}\nMessage: ${message}`;
    whatsappMessage = encodeURIComponent(whatsappMessage); // Encode the message for URL

    // Replace with the owner's phone number in international format
    const ownerPhoneNumber = "919821937240";

    // Open WhatsApp with the formatted message
    window.open(`https://wa.me/${ownerPhoneNumber}?text=${whatsappMessage}`, '_blank');
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
