const checkbox = document.querySelector('.theme-switch__checkbox');
const cards = document.querySelectorAll('.card');
const tech = document.getElementById('tech')
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
  } else {
  	document.documentElement.setAttribute('data-theme', 'light')
  	cards.forEach(card => card.classList.remove('bg-dark'))
    tech.classList.remove('bg-dark')
  }
})
