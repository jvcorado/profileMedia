function dark(){
    document.querySelector("body").classList.remove('bg-light')
    document.querySelector("body").classList.remove('text-dark')
    document.querySelector("body").classList.add('bg-dark')
    document.querySelector("body").classList.add('text-white')
    document.querySelector("img").classList.add('border')
    document.querySelector("img").classList.add('border-4')
    document.querySelector("img").classList.add('border-light')
    const variasClasses = document.querySelectorAll(".col-sm-5")
    const link = document.querySelectorAll(".col-sm-5 a")
    

    variasClasses.forEach(Element =>{
        Element.classList.add('border')
        Element.classList.add('border-4')
        Element.classList.add('border-light')

    })

    link.forEach(Element =>{
        Element.classList.remove('text-dark')
        Element.classList.add('text-white')
    })
    
} 
function white(){
    document.querySelector("body").classList.remove('bg-dark')
    document.querySelector("body").classList.remove('text-white')
    document.querySelector("img").classList.remove('border')
    document.querySelector("img").classList.remove('border-4')
    document.querySelector("img").classList.remove('border-light')
    document.querySelector("body").classList.add('bg-ligth')
    document.querySelector("body").classList.add('text-dark')
    const link = document.querySelectorAll(".col-sm-5 a")

    const variasClasses = document.querySelectorAll(".col-sm-5")

    variasClasses.forEach(Element =>{
        Element.classList.remove('border')
        Element.classList.remove('border-4')
        Element.classList.remove('border-light')

    })

    link.forEach(Element =>{
        Element.classList.remove('text-white')
        Element.classList.add('text-dark')
    })
} 