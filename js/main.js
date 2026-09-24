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

/* ================================
   VIDEO MODAL
================================ */
const videoModal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoModalFrame");
const videoTriggers = document.querySelectorAll(".video-button");

// turn any YouTube link format into an embed URL
function getEmbedUrl(url) {
  const id =
    (url.match(/youtu\.be\/([\w-]{11})/) ||
      url.match(/[?&]v=([\w-]{11})/) ||
      url.match(/\/embed\/([\w-]{11})/) ||
      [])[1] || url;
  return `  `;
}

function openVideoModal(url) {
  const id = getEmbedUrl(url).match(/embed\/([\w-]{11})/)?.[1];
  // if regex failed and returned the raw url, use a safe default
  videoFrame.src = id
    ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`
    : "https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&rel=0";
  videoModal.classList.add("open");
  videoModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeVideoModal() {
  videoModal.classList.remove("open");
  videoModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  videoFrame.src = ""; // stops the video from playing in background
}

videoTriggers.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // stop the link from opening a new tab
    openVideoModal(btn.getAttribute("href"));
  });
});

// close on × button or overlay click
videoModal.querySelectorAll("[data-close-modal]").forEach((el) => {
  el.addEventListener("click", closeVideoModal);
});

// close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && videoModal.classList.contains("open"))
    closeVideoModal();
});

// // Testimonial slider
// const testiTrack = document.querySelector('.testi-track');
// const testiSlides = document.querySelectorAll('.testimonial');
// const testiDotsWrap = document.querySelector('.testi-dots');
// let testiIndex = 0, testiTimer;

// if (testiTrack && testiSlides.length) {
//     testiSlides.forEach((_, i) => {
//     const b = document.createElement('button');
//     b.type = 'button';
//     b.setAttribute('aria-label', 'Go to slide ' + (i+1));
//     if(i===0) b.classList.add('active');
//     b.addEventListener('click', () => { goTesti(i); restartTesti(); });
//     testiDotsWrap.appendChild(b);
//     });
//     const dots = testiDotsWrap.querySelectorAll('button');
//     function goTesti(i){
//     testiIndex = (i + testiSlides.length) % testiSlides.length;
//     testiTrack.style.transform = `translateX(-${testiIndex*100}%)`;
//     dots.forEach((d,di)=>d.classList.toggle('active',di===testiIndex));
// }
//     function restartTesti(){ clearInterval(testiTimer); testiTimer=setInterval(()=>goTesti(testiIndex+1),5000); }
//     restartTesti();
//     testiTrack.addEventListener('mouseenter',()=>clearInterval(testiTimer));
//     testiTrack.addEventListener('mouseleave',restartTesti);
//     let startX=0;
//     testiTrack.addEventListener('touchstart',e=>startX=e.touches[0].clientX,{passive:true});
//     testiTrack.addEventListener('touchend',e=>{
//     const dx=e.changedTouches[0].clientX-startX;
//     if(Math.abs(dx)>40){ goTesti(testiIndex+(dx<0?1:-1)); restartTesti(); }
// },{passive:true});
// }
