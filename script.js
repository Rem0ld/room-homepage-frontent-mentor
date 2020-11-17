const data = [
  {
    title: "Discover innovative ways to decorate",
    paragraph:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    mobile: "images/mobile-image-hero-1.jpg",
    desktop: "images/desktop-image-hero-1.jpg",
    active: true,
  },
  {
    title: "We are available all across the globe",
    paragraph:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    mobile: "images/mobile-image-hero-2.jpg",
    desktop: "images/desktop-image-hero-2.jpg",
    active: false,
  },
  {
    title: "Manufactured with the best materials",
    paragraph:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    mobile: "images/mobile-image-hero-3.jpg",
    desktop: "images/desktop-image-hero-3.jpg",
    active: false,
  },
];

// Menu - Cellphone
let btn = document.querySelector("div.btn-menu");
let menu = document.querySelector("div.menu");

btn.addEventListener(
  "click",
  (e) => {
    e.stopImmediatePropagation();
    let bgClr = btn.style.backgroundColor;
    let img = btn.querySelector("img");

    bgClr === "white"
      ? (btn.style.backgroundColor = "transparent")
      : (btn.style.backgroundColor = "white");

    if (img.src.indexOf("hamburger") > -1) {
      img.src = "./images/icon-close.svg";
    } else {
      img.src = "./images/icon-hamburger.svg";
    }

    menu.classList.toggle("disabled");
  },
  false
);

// Handles click carousel
let left = document.getElementById("click-left");
let right = document.getElementById("click-right");

left.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  handleCarousel("left");
});
right.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  handleCarousel("right");
});

function handleCarousel(direction) {
  // First  let's get the client's width to know
  // which pictures we're going to use
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  let size = vw > 1000 ? "desktop" : "mobile";
  let title = document.querySelector("h1.main-title");
  let para = document.querySelector("p.main-paragraph");
  let img = document.querySelector(`img.${size}`);

  for (let i = 0; i < data.length; i++) {
    let num = 0;

    if (data[i].active === true) {
      data[i].active = false;
      if (direction === "left") {
        i === 0 ? (num = data.length - 1) : (num = i - 1);
      } else {
        i === 2 ? (num = 0) : (num = i + 1);
      }

      title.textContent = data[num].title;
      para.textContent = data[num].paragraph;
      img.src = data[num][size];
      data[num].active = true;

      // Reset animation
      title.style.animation = "none";
      title.offsetHeight;
      title.style.animation = null;
      para.style.animation = "none";
      para.offsetHeight;
      para.style.animation = null;
      return;
    }
  }
}
