
var navbar = document.getElementById("navbar-wrapper");
var navmenu = document.getElementById("nav-menu");
var contactUs = document.getElementById("contact-us-nav-link");
var scroll = 0;


window.addEventListener("scroll", function(event) { 
    scroll = document.documentElement.scrollTop;
    if(scroll > 10)
    {
        navbar.classList.add("navbar-scrolled");
        contactUs.classList.add("contact-us-nav-link-scrolled");
        navmenu.style.color = "#56355e"
    }
    else
    {
        navbar.classList.remove("navbar-scrolled");
        contactUs.classList.remove("contact-us-nav-link-scrolled");
        navmenu.style.color = "#fff"
    }
});


