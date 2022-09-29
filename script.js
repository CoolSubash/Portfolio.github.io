// -----filter

// -------------------------Navbar

const bar = document.querySelector('#bar')
const mobileNavbar = document.querySelector('#mobile-design-navbar')

bar.addEventListener('click', () => {
  if (mobileNavbar.style.width == '200px') {
    mobileNavbar.style.width = 0
  } else {
    mobileNavbar.style.width = '200px'
  }
})

const btnfilter = document.querySelectorAll('.btn-lang')
const javascript = document.querySelector('.project-javascript')
const java = document.querySelector('.project-java')
btnfilter.forEach((e) => {
  e.addEventListener('click', (event) => {
    if (event.target.textContent == 'JAVASCRIPT') {
      javascript.style.display = 'block'
      java.style.display = 'none'
      console.log('Javascript')
    } else {
      javascript.style.display = 'none'
      java.style.display = 'block'
      console.log('Java is Clicked')
    }
  })
})
