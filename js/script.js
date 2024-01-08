// document.addEventListener('mousemove', function(event) {
//     var windowWidth = window.innerWidth;
//     var windowHeight = window.innerHeight;
    
//     var mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
//     var mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
//     var radialGradient = 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #141416 90%, rgba(0, 0, 113, 0.64) 100%, rgba(18, 18, 203, 0.64) 10%)';
    
//     document.body.style.background = radialGradient;
// });
document.addEventListener('DOMContentLoaded', function () {
  var preloader = document.getElementById('preloader');

  

  setTimeout(function () {
    
    var h1 = document.createElement('h2');
    h1.textContent = 'Shane Abraham';
    preloader.innerHTML = '';
    preloader.appendChild(h1);
    
    
  }, 3000); // Adjust the time according to your animations

  setTimeout(function () {
    preloader.style.opacity = '0';
  }, 6000);

  setTimeout(function () {
    preloader.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 9000);


 
});

let link = document.getElementById("back-to-top");
let amountScrolled = 250;

window.addEventListener('scroll', function(e) {
    if (window.pageYOffset > amountScrolled) {
        link.classList.add('show');
        this.document.querySelector('header').style.opacity = 0.3;
    } else {
        link.className = 'back-to-top';
        this.document.querySelector('header').style.opacity = 1;
    }
});

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


