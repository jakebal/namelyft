
var navbar = document.getElementById("navbar-wrapper");
var contactUs = document.getElementById("contact-us-nav-link");
var scroll = 0;
window.addEventListener("scroll", function(event) { 
    scroll = this.scrollY;
    if(scroll > 10)
    {
        navbar.classList.add("navbar-scrolled");
        contactUs.classList.add("contact-us-nav-link-scrolled");
    }
    else
    {
        navbar.classList.remove("navbar-scrolled");
        contactUs.classList.remove("contact-us-nav-link-scrolled");
    }
});