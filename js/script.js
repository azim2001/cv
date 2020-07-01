const checkbox = document.querySelector('.theme-switch__checkbox');
const cards = document.querySelectorAll('.card');
const tech = document.getElementById('tech');
const footer = document.querySelector('.footer');
const footerParagraph = document.querySelector('.follow-list+p');
const footerCredits = document.querySelector('.footer-credits p');
const address = document.querySelector('.location');
const followItems = document.querySelectorAll('.follow-list-item a i')


const transition = () => {
  document.documentElement.classList.add('transition');
  setTimeout(() => document.documentElement.classList.remove('transition'), 2000);
}

checkbox.addEventListener('change', () => {
  transition();
  if (checkbox.checked) {
  	document.documentElement.setAttribute('data-theme', 'dark')
  	cards.forEach(card => card.classList.add('bg-dark'))
    tech.classList.add('bg-dark')
    footer.classList.add('bg-black')
    footerParagraph.classList.add('text-white')
    footerCredits.classList.add('text-white')
    address.classList.add('text-white')
    followItems.forEach(item => item.classList.add('text-white'))
  } else {
  	document.documentElement.setAttribute('data-theme', 'light')
  	cards.forEach(card => card.classList.remove('bg-dark'))
    tech.classList.remove('bg-dark')
    footer.classList.remove('bg-black')
    footerParagraph.classList.remove('text-white')
    footerCredits.classList.remove('text-white')
    address.classList.remove('text-white')
    followItems.forEach(item => item.classList.remove('text-white'))
  }
})
