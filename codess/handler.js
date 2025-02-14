document.addEventListener("DOMContentLoaded", function () {
    const togglePassword = document.getElementById("togglePassword");
    const passwordField = document.getElementById("password");

    togglePassword.addEventListener("click", function () {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");
        } else {
            passwordField.type = "password";
            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const storedEmail = localStorage.getItem("lastLoggedIn");
    if (storedEmail) {
        document.querySelector(".btn-login").style.display = "none";
        document.getElementById("login").style.display = "none";
    }

    const customProposalButton = document.querySelector(".buttons button[onclick=\"openForm('formContainer')\"]");
    const lockIcon = document.createElement("i");
    lockIcon.className = "fa-solid fa-lock lock-icon";
    lockIcon.id = "lockIcon";
    
    if (storedEmail) {
        customProposalButton.disabled = false;
        customProposalButton.style.opacity = "1";
        customProposalButton.style.cursor = "pointer";
    } else {
        customProposalButton.disabled = true;
        customProposalButton.style.opacity = "0.5";
        customProposalButton.style.cursor = "not-allowed";
        
        if (!document.getElementById("lockIcon")) {
            customProposalButton.parentNode.insertBefore(lockIcon, customProposalButton.nextSibling);
        }
    }
});

document.querySelector(".login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const userData = localStorage.getItem(email);

    if (userData) {
        alert("Accesso effettuato con successo!");
        localStorage.setItem("lastLoggedIn", email);
        document.querySelector(".btn-login").style.display = "none";
        document.getElementById("login").style.display = "none";
    } else {
        if (confirm("Vuoi procedere con la creazione dell'account?")) {
            const userObject = { name, email, password, createdAt: new Date().toISOString() };
            localStorage.setItem(email, JSON.stringify(userObject));
            localStorage.setItem("lastLoggedIn", email);
            alert("Account creato con successo!");

            document.querySelector(".btn-login").style.display = "none";

            document.getElementById("login").style.display = "none";
            document.getElementById("overlay").style.display = "none";
        }
    }
});
