// (function(){
//     emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
// })();

// function sendEmail(e) {
//     e.preventDefault();

//     const fullname = document.getElementById('fullname').value;
//     const email = document.getElementById('exampleInputEmail1').value;
//     const phoneno = document.getElementById('phoneno').value;
//     const message = document.getElementById('message').value;

//     emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
//         fullname: fullname,
//         email: email,
//         phoneno: phoneno,
//         message: message
//     })
//     .then(function(response) {
//        alert("Email sent successfully!");
//     }, function(error) {
//        alert("Failed to send email. Please try again later.");
//     });
// }

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the notification
    // const notificationContainer = document.getElementById("notification");
    // notificationContainer.style.display = "block";

    const name = document.getElementById("fullname2").value.trim();
    const email = document.getElementById("exampleInputEmail2").value.trim();
    const phone = document.getElementById("phoneno2").value.trim();
    const message = document.getElementById("message2").value.trim();

    // Debugging to check if values are being retrieved correctly
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);

    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`.replace(/\n/g, '%0A');
    const phoneNumber = "919821937240"; // Replace with the owner's phone number including country code

    // Open WhatsApp with prefilled text
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');

    // Optionally, you can clear the form inputs if needed
    document.getElementById("queryForm").reset();
}