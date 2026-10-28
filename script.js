// Replace these demo contact details before publishing for a real client.
const WHATSAPP_NUMBER = "919000000000";
const CONTACT_EMAIL = "hello@example.com";

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close mobile navigation after selecting a section
document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

// Property category filters
const filterButtons = document.querySelectorAll(".filter-btn");
const propertyCards = document.querySelectorAll(".property-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    propertyCards.forEach((card) => {
      const matches =
        selectedCategory === "all" ||
        card.dataset.category === selectedCategory;

      card.classList.toggle("hidden", !matches);
    });
  });
});

// WhatsApp enquiry helper
function openWhatsApp(message) {
  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank", "noopener,noreferrer");
}

// Enquire about an individual property
document.querySelectorAll(".property-enquire").forEach((button) => {
  button.addEventListener("click", () => {
    const propertyName = button.dataset.property;

    openWhatsApp(
      "Hello, I am interested in the " +
      propertyName +
      " listing on your website. Could you please share more details?"
    );
  });
});

// General WhatsApp enquiry
document.getElementById("whatsappButton").addEventListener("click", (event) => {
  event.preventDefault();

  openWhatsApp(
    "Hello, I visited your website and would like to enquire about your construction and real estate services."
  );
});

// Set contact email from one configuration value
const emailButton = document.getElementById("emailButton");
emailButton.href = "mailto:" + CONTACT_EMAIL;
emailButton.textContent = CONTACT_EMAIL;

// Automatic footer year
document.getElementById("year").textContent = new Date().getFullYear();