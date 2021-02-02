'use strict';

const appleIcon = document.querySelector('#appleLogo');
const colorAppleIcon = document.querySelector('#colorLogo');
appleIcon.addEventListener('mouseenter', () => {
    console.log("I entered");
        appleIcon.className = 'hidden';
        colorAppleIcon.className = 'colorful';
});
appleIcon.addEventListener('mouseleave', () => {
    appleIcon.className = 'colorful';
    colorAppleIcon.className = 'hidden';
});