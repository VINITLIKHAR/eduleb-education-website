const header = document.querySelector("header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
const toggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("main-menu");

const setMenu = (open) => {
  menu.classList.toggle("open", open);
  toggle.classList.toggle("active", open);
  toggle.setAttribute("aria-expanded", open);
  document.body.classList.toggle("menu-open", open);
};

toggle.addEventListener("click", () =>
  setMenu(!menu.classList.contains("open")),
);
menu
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) setMenu(false);
});

const toTop = document.querySelector(".to-top");
window.addEventListener(
  "scroll",
  () => toTop.classList.toggle("show", window.scrollY > 400),
  { passive: true },
);
toTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" }),
);