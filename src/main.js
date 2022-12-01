// Appearing of scroll section on landing page
// let scrollDown = document.getElementById('scroll_down')
// const scrollButtonDelay = setTimeout(makeScrollDownVisible, 5000)
// function makeScrollDownVisible() {
//     scrollDown.classList.remove('invisible')
// }

// Go to event page
function fbEvent(element) {
    let link = element.getAttribute('linkSrc')
    window.open(link, '_blank')
}

// Change background color to desired color
function changeBgRad(element) {
    element.classList.remove('bg-white')
    element.classList.add('bg-transition')
    

    element.classList.add('radial-gradient-reverse')

    element.classList.add('text-white')
    
}
function changeBgWhite(element) {
    element.classList.remove('radial-gradient')
    element.classList.add('bg-white')
    element.classList.add('text-black')
}