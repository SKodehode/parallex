
// Added a function to have the navigation bar be completely transparent until you start scrolling down the site.
// I had help from google and Chatgpt to make this happen as I am not very skilled with Javascript quite yet.
window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    const navBar = document.querySelector("nav");
    const scrollPosition = window.scrollY;

    if (scrollPosition > navBar.offsetHeight) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });