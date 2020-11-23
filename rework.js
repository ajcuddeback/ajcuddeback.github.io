var downBtn = document.querySelector("#down-button");




downBtn.addEventListener("click", function() {
    scrollTo({
        top: 1000,
        behavior: "smooth"
    })
})