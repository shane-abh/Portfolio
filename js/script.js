// document.addEventListener('mousemove', function(event) {
//     var windowWidth = window.innerWidth;
//     var windowHeight = window.innerHeight;

//     var mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
//     var mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

//     var radialGradient = 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #141416 90%, rgba(0, 0, 113, 0.64) 100%, rgba(18, 18, 203, 0.64) 10%)';

//     document.body.style.background = radialGradient;
// });
document.addEventListener("DOMContentLoaded", function () {
  var preloader = document.getElementById("preloader");
  setTimeout(function () {
    var h1 = document.createElement("h2");
    h1.textContent = "Shane Abraham";
    preloader.innerHTML = "";
    preloader.appendChild(h1);
  }, 3000); // Adjust the time according to your animations
  setTimeout(function () {
    preloader.style.opacity = "0";
  }, 5000);
  setTimeout(function () {
    preloader.style.display = "none";
    document.body.style.overflow = "auto";
  }, 8000);
});

let link = document.getElementById("back-to-top");
let amountScrolled = 250;

window.addEventListener("scroll", function (e) {
  if (window.pageYOffset > amountScrolled) {
    link.classList.add("show");
    this.document.querySelector("header").style.opacity = 0.3;
  } else {
    link.className = "back-to-top";
    this.document.querySelector("header").style.opacity = 1;
  }
});

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let tl = gsap.timeline({
  // defaults: { ease: "power4.inOut", duration: 5 },
  scrollTrigger: {
    trigger: ".about-img",
    start: "top center", // when the top of the trigger hits the top of the viewport
    end: "bottom center", // end after scrolling 500px beyond the start
    scrub: 1,
    markers: false,
  },
});
// let hero = CSSRulePlugin.getRule(".hero");

tl.from(".about-img", {
  x: -150,
  opacity: 0.3,
});

tl.to(".about-img", {
  x: 20,
  opacity: 1,
});


let tl2 = gsap.timeline({
  defaults: { ease: "power4.inOut", duration: 20},
});

tl2.fromTo(".down-arrow" ,{opacity: 0}, {opacity: 1, duration: 25});


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();