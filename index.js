/** @format */
let nav = document.querySelector(".nav-menu");
let navBar = document.querySelector(".nav-items");
nav.addEventListener("click", () => {
  console.log("S");
  console.log(navBar);

  navBar.classList.toggle("nav-items-active");
  nav.classList.toggle("nav-menu-active");
});
let controller = new ScrollMagic.Controller();

let timeline = new TimelineMax();
let timeline2 = new TimelineMax();
let timeline3 = new TimelineMax();
let timeline4 = new TimelineMax();
let timeline5 = new TimelineMax();

timeline
  .from(".page-bg", 1, { opacity: 0 })
  .to(".nav-menu ul li", { backgroundColor: "black" })
  .to(".nav-bar", { backgroundColor: "white" }, "-=2")
  .from(".nav", 2, { opacity: 0, y: 0 })
  .from(".stagger", 2, { opacity: 0, stagger: 0.4 }, "-=2");

timeline2
  .to(".nav-menu ul li", { backgroundColor: "white" })
  .to(".nav-bar a", { color: "white" })
  .to(".nav-bar", { backgroundColor: "black", color: "white" })
  .from(".second-img", 1.5, { opacity: 0, x: 50 })
  .from(".second-text", 2, { opacity: 0 }, "-=1");

timeline3
  .fromTo(
    "#page-3",
    2,
    { backgroundColor: "white", color: " black" },
    { backgroundColor: "black", ease: "power3" }
  )
  .from(".third-img", 2, { opacity: 0, x: -50 }, "-=2")
  .from(".third-text", 2, { opacity: 0 }, "-=1");

timeline4.from(".stag-img", 3, { opacity: 0, stagger: 0.5, y: 40 });

timeline5
  .to(".svg", 2, {
    attr: { d: "M0,0L720,0L1440,0L1440,0L720,0L0,0Z" },
  })
  .from(".contact-contents", 3, { opacity: 0, y: 40 }, "-=2");

var scene = new ScrollMagic.Scene({
  triggerElement: ".container",
  offset: "50px",
})
  .setTween(timeline)
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: "#page-2",
})
  .setTween(timeline2)
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: "#page-3",
})
  .setTween(timeline3)
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: "#page-4",
})
  .setTween(timeline4)
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: "#contact",
})
  .setTween(timeline5)
  .addTo(controller);
