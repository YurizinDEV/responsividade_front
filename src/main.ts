import './assets/css/index.css';

const botao = document.querySelector<HTMLImageElement>("#botao")!
const menu = document.querySelector<HTMLUListElement>("#menu")!

function isMobile() {
  return window.innerWidth < 768
}

function setMenuState(open: boolean) {
  if (isMobile()) {
    menu.classList.toggle("show", open)
    menu.style.display = open ? "flex" : "none"
    botao.src = open
      ? "/src/assets/images/close.svg"
      : "/src/assets/images/burger-menu.svg"
  } else {
    menu.classList.remove("show")
    menu.style.display = "flex"
    botao.src = "/src/assets/images/burger-menu.svg"
  }
}

let menuOpen = false

botao.addEventListener("click", (event) => {
  event.preventDefault()
  menuOpen = !menuOpen
  setMenuState(menuOpen)
})

window.addEventListener("resize", () => {
  if (!isMobile()) {
    menuOpen = false
  }
  setMenuState(menuOpen)
})

setMenuState(false)



