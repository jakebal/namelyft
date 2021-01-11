
var navbar = document.getElementById("navbar-wrapper");

var scroll = 0;
window.addEventListener("scroll", (event) => { 
    scroll = this.scrollY;
    if(scroll > 10)
    {
        navbar.classList.add("navbar-white");
    }
    else
    {
        navbar.classList.remove("navbar-white");
    }
});