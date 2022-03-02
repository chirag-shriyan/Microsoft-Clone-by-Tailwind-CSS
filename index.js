
// Navbar Dropdown Menu (for phone)

let menuBtn = document.getElementById('menu-icon');
let navDropdown = document.getElementById('nav-dropdown');

menuBtn.addEventListener('click', () => {

    if (navDropdown.style.opacity != (0)) {
        navDropdown.style.opacity = (0);
        navDropdown.style.pointerEvents = ('none');
        navDropdown.style.transform = ('translateY(-20px)');

    }
    else {
        navDropdown.style.opacity = (1);
        navDropdown.style.pointerEvents = ('all');
        navDropdown.style.transform = ('translateY(0px)');
    }
})

// Navbar Search bar (For phone)

let searchBtn = document.getElementById('seacrh-btn');
let searchBar = document.getElementById('search-bar');
let btnBack = document.getElementById('btn-back');

searchBtn.addEventListener('click', () => {

    if (searchBar.style.transform != ('translateY(0)')) {
        searchBar.style.transform = ('translateY(0)')
    }

})

btnBack.addEventListener('click', () => {

    if (searchBar.style.transform != ('translateY(-56px)')) {
        searchBar.style.transform = ('translateY(-56px)')
    }

})




