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