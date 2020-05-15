const menuButton = document.querySelector('#mainNav-right-menu')
const closeButton = document.querySelector('#fullNav-close')
const fullNav = document.querySelector('#fullNav')
const navChoices = Array.from(document.querySelectorAll('.fullNav-row>a'))

function openMenu(e) {
  if(!fullNav.classList.contains('active')) {
    fullNav.classList.add('active')
  }
  // e.preventDefault()
}
function closeMenu(e) {
  if(fullNav.classList.contains('active')) {
    fullNav.classList.remove('active')
  }
  // e.preventDefault()
}

menuButton.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)

navChoices.forEach(c => c.addEventListener('click', closeMenu))