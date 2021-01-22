// const tl = gsap.timeline({
//     defaults: {
//       ease: "power1.out"
//     }
//   });
  
//   tl.to(".text", {
//     y: "0%",
//     duration: 1,
//     stagger: 0.25
//   });
//   tl.to(".slider", {
//     y: "-100%",
//     duration: 1.5,
//     delay: 0.5
//   });
//   tl.to(".intro", {
//     y: "-100%",
//     duration: 1
//   }, "-=1");
//   tl.fromTo("nav", {
//     opacity: 0
//   }, {
//     opacity: 1,
//     duration: 1
//   });
//   tl.fromTo(".big-text", {
//     opacity: 0
//   }, {
//     opacity: 1,
//     duration: 1
//   }, "-=1");
$(window).on("load", function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});
  


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
