const navToggle = document.querySelector('.nav-toggle');
const topButton = document.getElementById('myBtn');
const navItems = document.querySelectorAll('.nav__item');

/*when user clicks*/
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

navItems.forEach(item => {
    item.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    });
});

/*when user scrolls down 200px*/
window.onscroll = function () {
    scrollFunction()
};

/*scroll*/
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

/*when user clicks button, scroll to top*/
function topFunction() {
    document.body.scrollTop = 0; //safari
    document.documentElement.scrollTop = 0; //chrome, ff, ie, opera
}