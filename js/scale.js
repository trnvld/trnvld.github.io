'use strict';
$(document).ready(function () {
let paragraph = document.querySelector('.paragraph');
let blockElem = document.querySelector('.block__elem');
let blockBg = document.querySelector('.block__bg');

function setActiveClass () {
    let pageScrollY = window.scrollY;
    let changeOpacity = pageScrollY * 0.001;
    let changeScale =  1 + pageScrollY * 0.003;

    blockElem.style.backgroundColor = `rgba(0,0,0,${changeOpacity})`;
    blockBg.style.transform = `scale(${changeScale})`;

    let changeLetterSpacing = pageScrollY * 0.08;
    let changeOpacityPar = 1 - (changeOpacity / 0.8);
    if (changeOpacityPar > 0) {
        paragraph.style.opacity = `${changeOpacityPar}`;
    }
    else if (changeOpacityPar < 0.1) {
        paragraph.style.opacity = 0;
    }
    paragraph.style.letterSpacing = `${changeLetterSpacing}px`;
}

window.addEventListener('scroll', setActiveClass);
});
