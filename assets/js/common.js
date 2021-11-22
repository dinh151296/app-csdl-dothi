// back to top
let scrollToTopBtn = document.querySelector('.back-to-top');
let rootElement = document.documentElement;
function handleScroll() {
    // Do something on scroll
    let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.2) {
      // Show button
      scrollToTopBtn.classList.add("showBtn");
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("showBtn");
    }
} 
function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);


// menu
let menuIconToggle = document.querySelector('.burger');
let menuMain = document.querySelector('.main-menu');
menuIconToggle.addEventListener('click', function() {
  menuIconToggle.classList.toggle('active');
  menuMain.classList.toggle('show');

})