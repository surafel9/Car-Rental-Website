"use strict";
// Help page js on the submit icon start here

const form = document.getElementById("onsubmit");

const spinner = document.createElement("div");
spinner.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
spinner.style.display = "none";
spinner.style.margin = "15px 0";
spinner.style.color = "#f73505";
form.parentNode.appendChild(spinner);

const messageBox = document.createElement("div");
messageBox.style.margin = "15px 0";
form.parentNode.appendChild(messageBox);

form.addEventListener("submit", function (e) {
    e.preventDefault();

    messageBox.textContent = "";
    messageBox.style.color = "";
    spinner.style.display = "none";

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();

    if (!name) {
        messageBox.textContent = "Name is required!";
        messageBox.style.color = "red";
        return;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        messageBox.textContent = "Please enter a valid email address!";
        messageBox.style.color = "red";
        return;
    }
    if (!msg) {
        messageBox.textContent = "Message cannot be empty!";
        messageBox.style.color = "red";
        return;
    }


    spinner.style.display = "block";

    setTimeout(() => {
        spinner.style.display = "none";
        messageBox.textContent = `Thank you, ${name}! Your message has been sent. We'll contact you ASAP. Check Your Email`;
        messageBox.style.color = "green";
        form.reset();
    }, 1500);
});

