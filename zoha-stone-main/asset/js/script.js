let navbar = document.querySelector(".navbar");
let icon = document.querySelector(".icon");
let toggle = () => {
    navbar.classList.toggle("active")
    // console.log("hi");
}

icon.addEventListener("click", () => toggle());


















///////////////////
////SLIDER START///
///////////////////

/*////////////////////////////
/// Image Accordion Start ///
////////////////////////////*/
const singleElements = document.querySelectorAll('.single');

singleElements.forEach((element, index) => {
    element.addEventListener('mouseover', () => {
        // Add the "open" class to the hovered element
        element.classList.add('open');
        // Remove the "open" class from the other elements
        singleElements.forEach((el, i) => {
            if (i !== index) {
                el.classList.remove('open');
            }
        });
    });

    element.addEventListener('click', () => {
        // Add the "open" class to the clicked element
        element.classList.add('open');
        // Remove the "open" class from the other elements
        singleElements.forEach((el, i) => {
            if (i !== index) {
                el.classList.remove('open');
            }
        });
    });
});


/*////////////////////////////
/// Image Accordion End ///
////////////////////////////*/




// var swiper = new Swiper(".mySwiper", {
//     spacweeBeten: 0,
//     centeredSlides: true,
//     //  effect: "fade",
//     loop: true,
//     autoplay: {
//         delay: 4500,//2500
//         disableOnInteraction: false,
//     },
//     speed: 5000,//5000
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },

// });


var swiper = new Swiper(".mySwiper", {
    direction: 'vertical',
    // spacweeBeten: 12,
    slidesPerView: 1,
    // spaceBetween: -1,
    // loop: true,
    // mousewheel: true,
    touch: true,
    keyboard: true,
    // speed: 2500,
    autoplay: {
        delay: 10000,//2500
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: {
        releaseOnEdges: true,
        forceToAxis: true,
        sensitivity: 1,
    },

    // on: {
    //     transitionStart: function(){

    //       var videos = document.querySelectorAll('video');

    //       Array.prototype.forEach.call(videos, function(video){
    //         video.pause();
    //       });
    //     },

    //     transitionEnd: function(){

    //       var activeIndex = this.activeIndex;
    //       var activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
    //       var activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
    //       activeSlideVideo.play();

    //     },

    //   }
    on: {
        slideChange: function () {
            setTimeout(function () {
                swiper.params.mousewheel.releaseOnEdges = true;
            }, 500);
        },
        reachEnd: function () {
            setTimeout(function () {
                swiper.params.mousewheel.releaseOnEdges = true;
            }, 750);
        }
    },
});





//////////////////
////SLIDER END////
//////////////////

////////////////////
////CIRCLE STAR/////
////////////////////
// var rang = 300;
// var autorotate = true;
// var rotatespeed = -60;//60
// var imagewidth = 110;
// var imageheight = 210;

// setTimeout(init, 1000);


// var omove = document.getElementById('movecontainer');

// var ocircle = document.getElementById('circlecontainer');

// var aimage = ocircle.getElementsByTagName('img');

// var elea = [...aimage];

// ocircle.style.width = imagewidth + "px";
// ocircle.style.height = imageheight + "px";


// var space = document.getElementById('space');

// space.style.width = rang * 3 + "px";
// space.style.height = rang * 3 + "px";



// function init(delaytime) {
//     for (let S = 0; S < elea.length; S++) {
//         elea[S].style.transform = "rotateZ(" + (S * (360 / elea.length)) + "deg)translateY(" + rang + "px)";

//         elea[S].style.transition = "transform 1s";
//         elea[S].style.transitionDelay = delaytime || (elea.length - S) / 4 + "s";
//     }

// }


// function applytranform(obj) {
//     if (Ty > 180) Ty = 180;
//     if (Ty < 0) Ty = 0;

//     obj.style.transform = "rotate(" + (-Ty) + "deg)rotate(" + (Tx) + "deg)";
// }


// // playsin
// function playcircle(yes) {
//     ocircle.style.animationPlayState = (yes ? 'running' : 'paused');
// }


// var Sx, Sy, Nx, Ny, deSx = 0, deSy = 0, Tx = 0, Ty = 10;


// if (autorotate) {
//     var animationname = (rotatespeed > 0 ? 'spin' : 'spinrevert');

//     ocircle.style.animation = `${animationname} ${Math.abs(rotatespeed)}s infinite linear`;
// }



// const isTouchSupported = 'ontouchstart' in window || navigator.msMaxTouchPoints;
// // const isTouchSupported =/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


// if (isTouchSupported) {
//     xspeed = 1;
//     yspeed = 1;
//     console.log("responsive",isTouchSupported);
// } else {
//     xspeed = 0.2;
//     yspeed = 0.2;
//     console.log("not responsive");
// }

// // var xspeed;
// // var yspeed;
// document.onpointerdown = function (ei) {
//     clearInterval(omove.timer);
//     console.log(ei)
//     ei = ei || window.event;

//     var Sx = ei.clientX,
//         Sy = ei.clientY;

//     this.onpointermove = function (ei) {
//         ei = ei || window.event;

//         var Nx = ei.clientX,
//             Ny = ei.clientY,
//             deSx = Nx - Sx;
//         deSy = Ny - Sy;

//         Tx += deSx * xspeed;//0.2
//         Ty += deSy * yspeed;//0.2
//         // console.log(Tx,Ty)

//         applytranform(omove);
//         Sx = Nx;
//         Sy = Ny;
//     };

//     this.onpointerup = function (ei) {
//         this.onpointermove = this.onpointerup = null;
//     };
//     return false;
// }

















////////////////////
////CIRCLE STAR/////
////////////////////

var rang = 300;
var autorotate = true;
var rotatespeed = -60; //60
var imagewidth = 110;
var imageheight = 210;

setTimeout(init, 1000);

var omove = document.getElementById('movecontainer');
var ocircle = document.getElementById('circlecontainer');
var aimage = ocircle.getElementsByTagName('img');
var elea = [...aimage];

ocircle.style.width = imagewidth + "px";
ocircle.style.height = imageheight + "px";

var space = document.getElementById('space');
space.style.width = rang * 3 + "px";
space.style.height = rang * 3 + "px";

function init(delaytime) {
    for (let S = 0; S < elea.length; S++) {
        elea[S].style.transform = "rotateZ(" + (S * (360 / elea.length)) + "deg)translateY(" + rang + "px)";
        elea[S].style.transition = "transform 1s";
        elea[S].style.transitionDelay = delaytime || (elea.length - S) / 4 + "s";
    }
}

function applytranform(obj) {
    if (Ty > 180) Ty = 180;
    if (Ty < 0) Ty = 0;

    obj.style.transform = "rotate(" + (-Ty) + "deg)rotate(" + (Tx) + "deg)";
}

// playsin
function playcircle(yes) {
    ocircle.style.animationPlayState = (yes ? 'running' : 'paused');
}

var Sx, Sy, Nx, Ny, deSx = 0, deSy = 0, Tx = 0, Ty = 10;

if (autorotate) {
    var animationname = (rotatespeed > 0 ? 'spin' : 'spinrevert');
    ocircle.style.animation = `${animationname} ${Math.abs(rotatespeed)}s infinite linear`;
}

function handlePointerEvents(event) {
    clearInterval(omove.timer);
    console.log(event);
    var Sx = event.clientX,
        Sy = event.clientY;

    document.onpointermove = function (event) {
        var Nx = event.clientX,
            Ny = event.clientY,
            deSx = Nx - Sx;
        deSy = Ny - Sy;

        Tx += deSx * 0.2; //0.2
        Ty += deSy * 0.2; //0.2
        applytranform(omove);
        Sx = Nx;
        Sy = Ny;
    };

    document.onpointerup = function (event) {
        document.onpointermove = document.onpointerup = null;
    };

    return false;
}
// document.onpointerdown = function (ei) {
//     clearInterval(omove.timer);
//     console.log(ei)
//     ei = ei || window.event;

//     var Sx = ei.clientX,
//         Sy = ei.clientY;

//     this.onpointermove = function (ei) {
//         ei = ei || window.event;

//         var Nx = ei.clientX,
//             Ny = ei.clientY,
//             deSx = Nx - Sx;
//         deSy = Ny - Sy;

//         Tx += deSx * xspeed;//0.2
//         Ty += deSy * yspeed;//0.2
//         // console.log(Tx,Ty)

//         applytranform(omove);
//         Sx = Nx;
//         Sy = Ny;
//     };

//     this.onpointerup = function (ei) {
//         this.onpointermove = this.onpointerup = null;
//     };
//     return false;
// }
function handleTouchEvents(event) {
    clearInterval(omove.timer);
    console.log(event);
    var touch = event.touches[0];
    var Sx = touch.clientX,
        Sy = touch.clientY;

    document.ontouchmove = function (event) {
        var touch = event.touches[0];
        var Nx = touch.clientX,
            Ny = touch.clientY,
            deSx = Nx - Sx;
        deSy = Ny - Sy;

        Tx += deSx * 0.2; //0.2
        Ty += deSy * 0.2; //0.2
        applytranform(omove);
        Sx = Nx;
        Sy = Ny;
    };

    document.ontouchend = function (event) {
        document.ontouchmove = document.ontouchend = null;
    };

    if (!event.target.closest('a')) {
        event.preventDefault(); // Prevent default for non-link touch events
    }
}

omove.onpointerdown = handlePointerEvents;
omove.ontouchstart = handleTouchEvents;





// function goToPage() {
//     window.location.href = "https://www.w3schools.com"; // This will redirect to the specified URL
// }

// let newpage=()=>{
// link("https://www.w3schools.com");
// }

//////////////////
////CIRCLE END////
//////////////////





const heroSection = document.querySelector(".hero");
const scroollElement = document.querySelector(".scrollTop-style");

// Uparrow function
const toggleScrollTop = () => {
    if (window.scrollY > heroSection.offsetHeight) {
        scroollElement.style.display = "block"; // Show the container
    } else {
        scroollElement.style.display = "none"; // Hide the container
    }
};

const scrollTop = () => {
    heroSection.scrollIntoView({ behavior: "smooth" })
};
scroollElement.addEventListener("click", scrollTop);

//for show uparrow
window.addEventListener("scroll", toggleScrollTop);