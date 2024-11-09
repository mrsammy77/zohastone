let navbar = document.querySelector(".navbar");
let icon = document.querySelector(".icon");
let toggle = () => {
    navbar.classList.toggle("active")
    // console.log("hi");
}

icon.addEventListener("click", () => toggle());

///////////////////// 
// Images Changing//
///////////////////
let bigImg = document.querySelector("#main_product_image img");

function showImg(pic) {
    bigImg.src = pic;
}
///////////////////// 
// Images Changing//
///////////////////


///////////////////////// 
// Big Images Changing//
///////////////////////
let imageArea =document.getElementById("main_product_image")
let mainImg = document.getElementById("big_img");



imageArea.addEventListener("mousemove", function (event) {
    clientX = event.clientX - imageArea.offsetLeft
    clientY = event.clientY - imageArea.offsetTop

    mWidth = imageArea.offsetWidth
    mHeight = imageArea.offsetHeight

    clientX = (clientX / mWidth) * 100
    clientY = (clientY / mHeight) * 100

    mainImg.style.transform = 'translate(-' + clientX + '%,-' + clientY + '%) scale(2)'
})

imageArea.addEventListener("mouseleave", function () {
    mainImg.style.transform = 'translate(-50%,-50%) scale(1)'
})

///////////////////////// 
// Big Images Changing//
///////////////////////





//////////////////////
// QUANTITY START ///
////////////////////
let qty = document.querySelector("#qtyInput");

function decrement() {
    if (qty.value <= 0) {
        qty.value = 0;
        // console.log("ji");

    } else {
        qty.value = parseInt(qty.value) - 1;
    }
}

function increment() {
    if (qty.value == "") {
        qty.value = 1;
    } else {
        qty.value = parseInt(qty.value) + 1;
    }
}

////////////////////
// QUANTITY END ///
//////////////////