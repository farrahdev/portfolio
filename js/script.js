const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const topButton = document.getElementById('myBtn');

/*when user clicks*/
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

/*run smooth scrolling*/
navToggle.Links.forEach(link =>{
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

/*when user scrolls down 200px*/
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

/*when user clicks button, scroll to top*/
function topFunction() {
    document.body.scrollTop = 0; //safari
    document.documentElement.scrollTop = 0; //chrome, ff, ie, opera
}