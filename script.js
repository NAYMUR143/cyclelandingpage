let close = document.querySelector(".cross");
let searchSection = document.querySelector(".Soverlay");
let searchIcon = document.querySelector(".search");
var tl = gsap.timeline({ defaults: { ease: Expo.easeInOut } });
tl.paused(true);
tl.to(".icon", 1, {
  scale: 3,
});
tl.to(
  searchSection,
  {
    clipPath: " circle(128.4% at 90% 8%)",
    zIndex: "9999",
  },
  "-=.7"
);

tl.from(
  "input",
  {
    x: -200,
    opacity: 0,
  },
  "start"
);
tl.from(
  ".img",
  {
    x: 200,
    opacity: 0,
  },
  "start"
);
searchIcon.addEventListener("click", () => {
  tl.play();
});
close.addEventListener("click", () => {
  tl.reverse();
});
