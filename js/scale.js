'use strict';
$(document).ready(function () {
let paragraph = document.querySelector('.paragraph');
let blockElem = document.querySelector('.block__elem');
let blockBg = document.querySelector('.block__bg');

function setActiveClass () {
    let pageScrollY = window.scrollY;
    let changeOpacity = pageScrollY * 0.001;
    let changeScale =  1 + pageScrollY * 0.001;

    blockElem.style.backgroundColor = `rgba(0,0,0,${changeOpacity})`;
    blockBg.style.transform = `scale(${changeScale})`;

    let changeLetterSpacing = pageScrollY * 0.08;
    let changeOpacityPar = 1 - (changeOpacity / 1.2);
    if (changeOpacityPar > 0) {
        paragraph.style.opacity = `${changeOpacityPar}`;
    }
    paragraph.style.letterSpacing = `${changeLetterSpacing}px`;
}

window.addEventListener('scroll', setActiveClass);
});
