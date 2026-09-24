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
      
      
      const openBtn = document.getElementById('openVideoBtn');
        const modal = document.getElementById('videoModal');
        const closeBtn = document.getElementById('closeModalBtn');
        const overlay = document.getElementById('closeModalOverlay');
        const iframe = document.getElementById('youtubeIframe');

        // Insert your YouTube Video ID here
        const videoUrl = "https://www.youtube.com/embed/z5y8Clp_TdE?autoplay=1";

        function openModal() {
            modal.classList.add('open');
            document.body.classList.add('modal-open');
            iframe.src = videoUrl;
        }

        function closeModal() {
            modal.classList.remove('open');
            document.body.classList.remove('modal-open');
            iframe.src = ""; // Stops audio/video playing in background
        }

        openBtn.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeModal);