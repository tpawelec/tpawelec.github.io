/*
    Parallax
*/
const header = document.querySelector('.p-header');
let screenHeight = window.innerHeight;

function parallax() {
    let scroll = window.scrollY;
    let offset = header.getBoundingClientRect().bottom;
    if(offset > screenHeight && offset) {
        header.style.backgroundPosition = 'center ' + 'calc(' + (( distanceFromBottom  ) * 0.5) + 'px + 20%)';
    } else {
        header.style.backgroundPosition = 'center ' + 'calc(' + (( -scroll ) * 0.5) + 'px + 20%)';
    }

}

window.addEventListener('scroll', parallax);