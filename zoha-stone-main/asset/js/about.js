let navbar = document.querySelector(".navbar");
let icon = document.querySelector(".icon");
let toggle = () => {
    navbar.classList.toggle("active")
    // console.log("hi");
}

icon.addEventListener("click", () => toggle());







// mouse hover play video
Shery.hoverWithMediaCircle(".hvr", { videos: ["./../videos/slide1.mp4", "./../videos/slide4.mp4", "./../videos/slide2.mp4"] });


// image scroll down
// gsap.to(".fleftelm", {
//     scrollTrigger: {
//         trigger: "#fimages",
//         pin: true,
//         start: "top top",
//         end: "bottom bottom",
//         endTrigger: ".last",
//         scrub: 1
//     },
//     y: "-300%",
//     ease: Power1
// })



// // let sections = document.querySelectorAll(".fleftelm");
// Shery.imageEffect(".images", {
//     style: 5,

//     slideStyle: (setScroll) => {
//         sections.forEach(function (section) {
//             ScrollTrigger.create({
//                 trigger: section,
//                 start: "top top",
//                 scrub: 1,
//                 onUpdate: function (prog) {
//                     console.log(prog);
//                 }
//             })
//         })
//     }
// });


// gsap.from(".anim2", {
//     y: 50,
//     stagger: .3,
//     opacity: 0,
//     ease: Expo,
//     duration: 1
// });





const heroSection = document.querySelector(".hero");
const scroollElement =document.querySelector(".scrollTop-style");

// Uparrow function
const toggleScrollTop = () => {
    if (window.scrollY > heroSection.offsetHeight) {
        scroollElement.style.display = "block"; // Show the container
    } else {
        scroollElement.style.display = "none"; // Hide the container
    }
};

const scrollTop = () =>{
    heroSection.scrollIntoView({behavior:"smooth"})
};
scroollElement.addEventListener("click", scrollTop);

//for show uparrow