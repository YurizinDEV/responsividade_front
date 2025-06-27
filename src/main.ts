import './assets/css/style.css';

const app = document.querySelector<HTMLDivElement>('#app')!
const menu = document.querySelector<HTMLUListElement>('.menu')!
// const mediaQuery = window.matchMedia('(min-width: 768px)')
const menuList = document.querySelector<HTMLUListElement>('.menu')!


menuList.innerHTML = `
  <li><a href="#">Home</a></li>
  <li><a href="#">Sobre</a></li>
  <li><a href="#">Serviços</a></li>
  <li><a href="#">Contato</a></li>
`
const img = document.createElement('img')
img.src = 'src/assets/images/burger-menu.svg'

img.alt = 'Menu'
menuList.prepend(img)

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    img.src = 'src/assets/images/burger-menu.svg'

    menu.classList.add('desktop')
    menu.classList.remove('mobile')
  } else {
    menu.classList.add('mobile')
    menu.classList.remove('desktop')

    img.src = 'src/assets/images/close.svg'
  }
})


// mediaQuery.addEventListener('change', handleMediaQueryChange)
// handleMediaQueryChange(mediaQuery)

// function handleMediaQueryChange(event: MediaQueryListEvent) {
//   if (event.matches) {
//     menu.classList.add('desktop')
//     menu.classList.remove('mobile')
//   } else {
//     menu.classList.add('mobile')
//     menu.classList.remove('desktop')
//   }
// }



