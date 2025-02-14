function openForm(id) {
    let form = document.getElementById(id);
    let overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    form.style.display = "block";
    setTimeout(() => {
        form.style.opacity = "1";
        form.style.transform = "translate(-50%, -50%) scale(1)";
    }, 10);
  }
  
  function closeForm() {
    let overlay = document.getElementById("overlay");
    let forms = document.querySelectorAll(".form-container");
    overlay.style.display = "none";
    forms.forEach(form => {
        form.style.opacity = "0";
        form.style.transform = "translate(-50%, -50%) scale(0.8)";
        setTimeout(() => {
            form.style.display = "none";
        }, 500);
    });
  }

  document.getElementById("showFormBtn").addEventListener("click", function() {
      var form = document.getElementById("registrationForm");
      form.style.display = form.style.display === "none" || form.style.display === "" ? "block" : "none";
  });
