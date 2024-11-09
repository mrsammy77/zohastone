let navbar = document.querySelector(".navbar");
let icon = document.querySelector(".icon");
let toggle = () => {
    navbar.classList.toggle("active")
    // console.log("hi");
}

icon.addEventListener("click", () => toggle());







const emailInput = document.querySelector('.container .contactForm .formBox .inputBox input[type="email"]');

emailInput.addEventListener('input', () => {
  if (emailInput.value.trim() !== '') {
    emailInput.classList.add('has-value');
  } else {
    emailInput.classList.remove('has-value');
  }
});



//Animation
document.addEventListener("DOMContentLoaded", function() {
  // When the page has fully loaded
  var contactContainer = document.querySelector(".contact");
  contactContainer.classList.add("visible");
});