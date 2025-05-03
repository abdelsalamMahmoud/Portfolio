document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh

    const nameInput = this.querySelector("input[name='name']");
    const emailInput = this.querySelector("input[name='email']");
    const messageInput = this.querySelector("textarea[name='message']");

    let isValid = true;

    // Clear previous error messages
    this.querySelectorAll(".error").forEach(el => el.remove());

    // Helper to show error
    function showError(input, message) {
      const error = document.createElement("div");
      error.className = "error";
      error.style.color = "red";
      error.style.fontSize = "0.9rem";
      error.style.marginTop = "5px";
      error.textContent = message;
      input.insertAdjacentElement("afterend", error);
    }

    // Validate name
    if (nameInput.value.trim() === "") {
      showError(nameInput, "Please enter your name.");
      isValid = false;
    }

    // Validate email
    if (emailInput.value.trim() === "") {
      showError(emailInput, "Please enter your email.");
      isValid = false;
    }

    // Validate message
    if (messageInput.value.trim() === "") {
      showError(messageInput, "Please enter your message.");
      isValid = false;
    }

    // If valid, show thank you alert
    if (isValid) {
      alert(`Thank you for contacting us, ${nameInput.value.trim()}!`);
      this.reset(); // Optional: clear the form
    }
  });