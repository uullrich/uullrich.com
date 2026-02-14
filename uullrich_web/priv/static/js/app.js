/* Buzzword Bingo */
(function() {
  document.addEventListener("click", function(e) {
    var pill = e.target.closest(".buzz-pill");
    if (!pill) return;

    var category = pill.getAttribute("data-category");
    var title = pill.getAttribute("data-title");
    var explanation = pill.getAttribute("data-explanation");
    var githubLink = pill.getAttribute("data-github");

    // Deselect all pills in same category
    document.querySelectorAll('.buzz-pill[data-category="' + category + '"]').forEach(function(p) {
      p.classList.remove("selected");
    });
    pill.classList.add("selected");

    // Close all details in other categories
    document.querySelectorAll(".buzz-details").forEach(function(d) {
      if (d.getAttribute("data-category") !== category) {
        d.classList.remove("open");
      }
    });

    // Open the matching details panel
    var detail = document.querySelector('.buzz-details[data-category="' + category + '"]');
    if (detail) {
      detail.classList.add("open");
      var expEl = detail.querySelector(".buzz-explanation");
      if (expEl) expEl.textContent = explanation;
      var ghLink = detail.querySelector(".buzz-github a");
      if (ghLink) ghLink.setAttribute("href", githubLink);
    }
  });
})();

/* Contact Form */
(function() {
  var num1, num2;

  function initMath() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    var label = document.getElementById("math-label");
    if (label) label.textContent = num1 + " + " + num2 + " =";
  }

  document.addEventListener("DOMContentLoaded", initMath);

  document.addEventListener("input", function(e) {
    if (e.target.id === "math-input") {
      var val = parseInt(e.target.value, 10);
      var btn = document.getElementById("send-btn");
      if (btn) {
        btn.dataset.mathOk = (val === num1 + num2) ? "true" : "false";
        updateButton();
      }
    }
  });

  function updateButton() {
    var btn = document.getElementById("send-btn");
    if (!btn) return;
    var mathOk = btn.dataset.mathOk === "true";
    var privacyOk = btn.dataset.privacyOk === "true";
    btn.disabled = !(mathOk && privacyOk);
  }

  document.addEventListener("change", function(e) {
    if (e.target.name === "privacyConsent") {
      var btn = document.getElementById("send-btn");
      if (btn) {
        btn.dataset.privacyOk = e.target.checked ? "true" : "false";
        updateButton();
      }
    }
  });

  document.addEventListener("click", function(e) {
    if (e.target.id !== "send-btn") return;
    e.preventDefault();

    var form = document.getElementById("contact-form");
    if (!form) return;

    var firstName = form.querySelector('[name="firstName"]').value;
    var lastName = form.querySelector('[name="lastName"]').value;
    var email = form.querySelector('[name="email"]').value;
    var url = form.querySelector('[name="url"]').value;
    var subject = form.querySelector('[name="subject"]').value;
    var message = form.querySelector('[name="message"]').value;

    if (!firstName || !lastName || !email || !subject || !message) {
      var status = document.getElementById("field-missing");
      if (status) status.style.display = "block";
      return;
    }

    // Honeypot check
    if (url !== "") return;

    var endpoint = "https://sgxzrq6vo7.execute-api.us-east-1.amazonaws.com/default/sendContanctEmail";
    var body = JSON.stringify({
      senderFirstName: firstName,
      senderLastName: lastName,
      senderEmail: email,
      subject: subject,
      message: message
    });

    fetch(endpoint, { method: "POST", body: body })
      .then(function(response) {
        if (!response.ok) throw new Error("Error in fetch");
        return response.json();
      })
      .then(function() {
        document.getElementById("contact-input").style.display = "none";
        document.getElementById("contact-success").style.display = "block";
      })
      .catch(function() {
        document.getElementById("contact-input").style.display = "none";
        document.getElementById("contact-failed").style.display = "block";
      });
  });
})();

/* Chevron scroll behavior */
(function() {
  document.addEventListener("click", function(e) {
    var chevron = e.target.closest(".cover-chevron");
    if (!chevron) return;
    var cover = document.querySelector(".cover-wrapper");
    if (cover) {
      window.scrollTo({ top: cover.offsetHeight, behavior: "smooth" });
    }
  });

  var ticking = false;
  window.addEventListener("scroll", function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        var chevron = document.querySelector(".cover-chevron");
        if (chevron) {
          if (window.scrollY > 100) {
            chevron.classList.add("hidden");
          } else {
            chevron.classList.remove("hidden");
          }
        }
        ticking = false;
      });
      ticking = true;
    }
  });
})();
