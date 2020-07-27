const toggle = document.getElementById("toggle")
const close = document.getElementById("close")
const open = document.getElementById("open")
const modal = document.getElementById("modal")

// Toggle Nav Element

toggle.addEventListener("click", () => {
    document.body.classList.toggle("show-nav")
})

// Show Modal 
open.addEventListener("click", () => {
    modal.classList.add("show-modal")
})

// Close modal
close.addEventListener("click", () => {
    modal.classList.remove("show-modal")
})
// Close model When clicked ooutside

window.addEventListener("click", (e) => {
    // console.log(e.target.id);
    e.target.id == "modal" ? modal.classList.remove("show-modal") : false

})