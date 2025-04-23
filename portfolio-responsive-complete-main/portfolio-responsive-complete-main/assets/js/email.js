// email.js

// Initialize EmailJS with your public key
(function () {
    emailjs.init("nn1QIwKTaWz5CY9iq");
  })();
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact__form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const submitBtn = form.querySelector(".contact__button");
      submitBtn.value = "Sending...";
      submitBtn.disabled = true;
  
      emailjs
        .sendForm("service_1z450o1", "template_4ul6flr", this)
        .then(
          () => {
            alert("Message sent successfully!");
            form.reset();
            submitBtn.value = "Send Message";
            submitBtn.disabled = false;
          },
          (error) => {
            console.error(" FAILED...", error);
            alert("Something went wrong. Please try again!");
            submitBtn.value = "Send Message";
            submitBtn.disabled = false;
          }
        );
    });
  });
  