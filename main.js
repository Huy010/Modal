var btnOpen = document.querySelector(".open-modal-btn");
var modal = document.querySelector(".modal");

btnOpen.onclick = function() {
    modal.classList.remove("active")
}