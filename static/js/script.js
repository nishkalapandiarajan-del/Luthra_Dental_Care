
// Set minimum appointment date to today
const appointmentDate = document.getElementById("appointmentDate");

if (appointmentDate) {
    const today = new Date();
    const localDate = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    appointmentDate.min = localDate;
}

// Temporary form preview until Flask backend integration
["appointmentForm", "contactForm"].forEach(id => {
    const form = document.getElementById(id);

    if (form) {
        form.addEventListener("submit", event => {
            event.preventDefault();

            const message = document.getElementById(
                id === "appointmentForm"
                    ? "appointmentMessage"
                    : "contactMessage"
            );

            message.textContent =
                "Form is ready. Submission will be enabled after backend integration.";

            message.style.color = "#28765D";
        });
    }
});

// ==========================================
// CONTACT FORM - SEND MESSAGE TO WHATSAPP
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!contactForm.reportValidity()) return;

            const name = document.getElementById("contactName").value.trim();
            const phone = document.getElementById("contactPhone").value.trim();
            const email = document.getElementById("contactEmail").value.trim();
            const message = document.getElementById("contactMessage").value.trim();

            const whatsappMessage =
                "Hello Luthra Dental Care!\n\n" +
                "I would like to make an enquiry.\n\n" +
                "Name: " + name + "\n" +
                "Phone: " + phone + "\n" +
                "Email: " + (email || "Not provided") + "\n" +
                "Message: " + message;

            const whatsappURL =
                "https://wa.me/918270050287?text=" +
                encodeURIComponent(whatsappMessage);

            window.open(whatsappURL, "_blank");
        });
    }


    // ==========================================
    // APPOINTMENT FORM - BOOK THROUGH WHATSAPP
    // ==========================================

    const appointmentForm = document.getElementById("appointmentForm");

    if (appointmentForm) {
        appointmentForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!appointmentForm.reportValidity()) return;

            const name = document.getElementById("patientName").value.trim();
            const phone = document.getElementById("patientPhone").value.trim();
            const email = document.getElementById("patientEmail").value.trim();
            const date = document.getElementById("appointmentDate").value;
            const time = document.getElementById("appointmentTime").value;
            const treatment = document.getElementById("treatment").value;
            const message = document.getElementById("patientMessage").value.trim();

            const whatsappMessage =
                "Hello Luthra Dental Care!\n\n" +
                "I would like to request a dental appointment.\n\n" +
                "Patient Name: " + name + "\n" +
                "Phone Number: " + phone + "\n" +
                "Email: " + (email || "Not provided") + "\n" +
                "Preferred Date: " + date + "\n" +
                "Preferred Time: " + time + "\n" +
                "Treatment: " + treatment + "\n" +
                "Additional Message: " + (message || "None") + "\n\n" +
                "Please confirm the appointment availability. Thank you!";

            const whatsappURL =
                "https://wa.me/918270050287?text=" +
                encodeURIComponent(whatsappMessage);

            window.open(whatsappURL, "_blank");
        });
    }

});
// ==========================================
// FULL-SCREEN LOGO POP-OUT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const logoLink = document.querySelector(".site-header .logo");
    const logoImage = logoLink
        ? logoLink.querySelector("img")
        : null;

    if (!logoImage) return;

    // Create full-screen overlay
    const overlay = document.createElement("div");
    overlay.className = "logo-fullscreen-overlay";

    // Copy the original logo image
    const enlargedLogo = document.createElement("img");
    enlargedLogo.src = logoImage.src;
    enlargedLogo.alt = logoImage.alt || "Luthra Dental Care Logo";

    overlay.appendChild(enlargedLogo);
    document.body.appendChild(overlay);

    // Open enlarged logo when original logo is clicked
    logoLink.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        overlay.classList.add("active");
    });

    // Close when anywhere on the overlay is clicked or touched
    overlay.addEventListener("click", function () {
        overlay.classList.remove("active");
    });

    // Close when Escape key is pressed
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            overlay.classList.remove("active");
        }
    });

});

<script>
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
</script>

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }
});