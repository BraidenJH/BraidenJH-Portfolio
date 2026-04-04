const menuIcon = document.querySelector('#menu-icon')
const navLinks = document.querySelector('.nav-links')
const visitButton = document.querySelector('.visit-button')
const linkedinLogo = document.querySelector('#linkedinLogo')
const githubLogo = document.querySelector('#githubLogo')

menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

visitButton.onclick = () => {
    window.open('https://github.com/BraidenJH', '_blank', 'noopener,noreferrer')
}

linkedinLogo.onclick = () => {
    window.open('https://www.linkedin.com/in/braiden-hilton-384992315/', '_blank', 'noopener,noreferrer')
}

githubLogo.onclick = () => {
    window.open('https://github.com/BraidenJH', '_blank', 'noopener,noreferrer')
}