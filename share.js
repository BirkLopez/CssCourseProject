var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var buttons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        modal.style.display = "block";
        backdrop.style.display = "block";
    });
}

backdrop.addEventListener("click", function() {
    mobileNav.style.display = "none";
    closeModal();
});
 if(modalNoButton){
    modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
    backdrop.style.display = "none";
    modal.style.display = "block";
}

toggleButton.addEventListener("click", function () {
    mobileNav.style.display = "block";
    backdrop.style.display = "block";
});