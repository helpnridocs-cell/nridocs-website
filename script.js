
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".navlinks");
  if(menu && nav) menu.addEventListener("click", () => nav.classList.toggle("show"));

  document.querySelectorAll(".faq button").forEach(btn => {
    btn.addEventListener("click", () => btn.parentElement.classList.toggle("open"));
  });

  document.querySelectorAll("[data-service-search]").forEach(input => {
    input.addEventListener("input", () => {
      const q = input.value.toLowerCase().trim();
      document.querySelectorAll("[data-service-card]").forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(q) ? "" : "none";
      });
    });
  });

  const year = document.querySelector("[data-year]");
  if(year) year.textContent = new Date().getFullYear();

  document.querySelectorAll("form[data-wa-form]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get("name") || "";
      const service = data.get("service") || "Documentation service";
      const country = data.get("country") || "";
      const message = data.get("message") || "";
      const text = `Hello NRIDocs, I need assistance.%0A%0AName: ${encodeURIComponent(name)}%0AService: ${encodeURIComponent(service)}%0ACountry: ${encodeURIComponent(country)}%0AMessage: ${encodeURIComponent(message)}`;
      window.open(`https://wa.me/917709422922?text=${text}`, "_blank");
    });
  });
});
