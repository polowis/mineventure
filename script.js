window.addEventListener("scroll", (e) => {
    const navBar = document.getElementById("nav-bar");
    if(this.scrollY > 10) {
        navBar.style.background = "black";
    } else {
        navBar.style.background = "none";
    }
})