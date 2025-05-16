document.addEventListener("DOMContentLoaded", function() {
    // Show welcome message only once per session
    if (!sessionStorage.getItem("welcomeShown")) {
        const messageDiv = document.createElement("div");
        const line1 = document.createElement("div");
        line1.textContent = "Hello, world!";
        line1.style.fontWeight = "bold";
        const line2 = document.createElement("div");
        line2.textContent = "this is my first website!";
        messageDiv.appendChild(line1);
        messageDiv.appendChild(line2);
        messageDiv.style.position = "fixed";
        messageDiv.style.top = "0";
        messageDiv.style.left = "0";
        messageDiv.style.width = "100vw";
        messageDiv.style.height = "100vh";
        messageDiv.style.display = "flex";
        messageDiv.style.flexDirection = "column";
        messageDiv.style.justifyContent = "center";
        messageDiv.style.alignItems = "center";
        messageDiv.style.background = "rgba(255,255,255,0.95)";
        messageDiv.style.fontSize = "5rem";
        messageDiv.style.zIndex = "1000";
        messageDiv.style.transition = "opacity 1s";
        messageDiv.style.opacity = "1";
        document.body.appendChild(messageDiv);
        setTimeout(() => { messageDiv.style.opacity = "0"; }, 2000);
        setTimeout(() => { messageDiv.remove(); }, 3000);
        sessionStorage.setItem("welcomeShown", "true");
    }

    // User tab and form logic
    const form = document.getElementById("myForm");
    const imeInput = document.getElementById("ime");
       const emailInput = document.getElementById("email");
    const userTab = document.getElementById("userTab");
    const usrNameDiv = document.getElementById("usrName");

    // Load saved data from localStorage (if any)
    const savedIme = localStorage.getItem("ime");
    const savedEmail = localStorage.getItem("email");
    if (userTab && (savedIme || savedEmail)) {
        userTab.textContent = "Ime: " + (savedIme || "") + " | Email: " + (savedEmail || "");
        imeInput.value = savedIme || "";
        emailInput.value = savedEmail || "";
    }
    if (usrNameDiv && savedIme) {
        usrNameDiv.textContent = savedIme;
    }

     if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            // Save to localStorage
            localStorage.setItem("ime", imeInput.value);
            localStorage.setItem("email", emailInput.value);
            // Show in user tab
            if (userTab) {
                userTab.textContent = "Ime: " + imeInput.value + " | Email: " + emailInput.value;
            }
            // Update usr button with user name
            if (usrNameDiv) {
                usrNameDiv.textContent = imeInput.value;
            }
             // Clear the form fields
    imeInput.value = "";
    emailInput.value = "";
        });
    }
});
