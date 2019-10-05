const hamburger = document.getElementById('hamburger');
const hamburgerNav = document.getElementById('hamburgerNav');
let hamburgerOpen = false;
hamburger.onclick = function() {
    if(hamburgerOpen === false) {
        hamburgerNav.style.display = 'block';
        hamburgerOpen = true;
    }
    else {
        hamburgerNav.style.display = 'none';
        hamburgerOpen = false;
    }
}