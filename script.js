(function() {
  emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(function(response) {
       document.getElementById("statusMsg").innerText = "Message sent successfully!";
    }, function(error) {
       document.getElementById("statusMsg").innerText = "Failed to send message. Try again.";
    });
});
