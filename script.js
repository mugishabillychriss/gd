(function() {
  emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_ywpaczq", "template_7ndxs8k", this)
    .then(function(response) {
       document.getElementById("statusMsg").innerText = "Message sent successfully!";
    }, function(error) {
       document.getElementById("statusMsg").innerText = "Failed to send message. Try again.";
    });
});
