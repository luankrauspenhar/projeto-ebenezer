
const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})
const elements = document.querySelectorAll('.img-pp')

elements.forEach( (element) => myObserver.observe (element) )



const myObserverr = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})
const elementss = document.querySelectorAll('.pp-black')

elementss.forEach( (element) => myObserver.observe (element) )




const myObserverrr = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})
const elementsss = document.querySelectorAll('.card')

elementsss.forEach( (element) => myObserver.observe (element) )
