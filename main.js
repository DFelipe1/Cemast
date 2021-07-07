const nav = document.querySelector('#header nav')
const toggle = document.getElementById('toggle')
const i = document.getElementById('menu');

function handleMenu() {
    nav.classList.toggle('show')
    toggle.classList.toggle('menu-active')

    if(toggle.classList == "menu-active"){
        i.classList.remove('fa-bars')
        i.classList.add('fa-times')
    }else {
        i.classList.remove('fa-times')
        i.classList.add('fa-bars')
    }
}

const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', () =>{
        nav.classList.remove('show')
    })
}


window.addEventListener("scroll", () => {
    const header = document.getElementById('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})


const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
  })
  
  scrollReveal.reveal(
    `#Home .image, #Home .text,
    #About .image, #About .text,
    #Services header, #Services .card,
    
    #Contact .text, #Contact .content-info,
    footer .brand, footer .social-links
    `,
    { interval: 100 }
  )
