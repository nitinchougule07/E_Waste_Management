const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const pickupForm = document.querySelector("#pickupForm");
const formMessage = document.querySelector("#formMessage");

document.querySelector("#year").textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

pickupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(pickupForm);
  const name = String(formData.get("fullName")).trim();
  const item = String(formData.get("itemType"));
  const quantity = String(formData.get("quantity"));

  if (!name || !item || Number(quantity) < 1) {
    formMessage.textContent = "Please complete the required fields correctly.";
    return;
  }

  formMessage.textContent = `Thank you, ${name}! Your demo request for ${quantity} ${item}(s) has been recorded on this page only.`;
  pickupForm.reset();
  document.querySelector("#quantity").value = "1";
});
