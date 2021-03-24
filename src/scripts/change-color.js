const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.body
const themeSwitchToggle = document.getElementById("theme-switch-toggle")
console.dir(themeSwitchToggle);

const THEME = localStorage.getItem('theme')
body.classList.add(THEME)

if (body.classList.contains(Theme.DARK)) {
  themeSwitchToggle.checked = true
}

themeSwitchToggle.addEventListener('change', changeBgColor)

function changeBgColor(evt) {
  localStorage.setItem('theme', Theme.DARK)
  if (evt.target.checked) {
    body.classList.toggle(Theme.DARK)
    body.classList.remove(Theme.LIGHT)
  } else {
    localStorage.setItem('theme', Theme.LIGHT)
    body.classList.add(Theme.LIGHT)
    body.classList.remove(Theme.DARK)
  }
}

