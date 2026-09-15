const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");
const previewButton = document.querySelector("[data-preview-whatsapp]");
const previewToast = document.querySelector(".preview-toast");

function closeMenu() {
  menuButton?.setAttribute("aria-expanded", "false");
  navigation?.classList.remove("open");
  document.body.classList.remove("menu-open");
}

menuButton?.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  navigation?.classList.toggle("open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
});

navigation?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMenu();
});

let toastTimer;
previewButton?.addEventListener("click", () => {
  previewToast?.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => previewToast?.classList.remove("show"), 3200);
});

document.querySelector("#year").textContent = new Date().getFullYear();
