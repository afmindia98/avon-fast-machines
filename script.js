const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle) {
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
}
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.querySelectorAll("[data-product]").forEach(link => {
  link.addEventListener("click", () => {
    const machine = document.getElementById("machine");
    if (machine) machine.value = link.dataset.product;
  });
});

const form = document.getElementById("leadForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name") || "";
  const phone = data.get("phone") || "";
  const machine = data.get("machine") || "Not specified";
  const message = data.get("message") || "No additional requirement";
  const text =
    `Hello AVON FAST MACHINES,%0A%0A` +
    `Name: ${encodeURIComponent(name)}%0A` +
    `Phone: ${encodeURIComponent(phone)}%0A` +
    `Machine: ${encodeURIComponent(machine)}%0A` +
    `Requirement: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/919953255750?text=${text}`, "_blank");
});
