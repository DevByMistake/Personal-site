const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
})

const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;