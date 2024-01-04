// document.addEventListener('mousemove', function(event) {
//     var windowWidth = window.innerWidth;
//     var windowHeight = window.innerHeight;
    
//     var mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
//     var mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
//     var radialGradient = 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #141416 90%, rgba(0, 0, 113, 0.64) 100%, rgba(18, 18, 203, 0.64) 10%)';
    
//     document.body.style.background = radialGradient;
// });

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




