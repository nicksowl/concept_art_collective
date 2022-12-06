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
    element.classList.remove('text-neutral-800')
    // element.classList.add('bg-transition')
    element.classList.add('radial-gradient-reverse')
    element.classList.add('text-white')
    
}
function changeBgWhite(element) {
    element.classList.remove('radial-gradient')
    element.classList.add('bg-white')
    element.classList.add('text-neutral-800')
    // element.classList.add('text-black')
}

// On scroll down make profile picture opacity decrease
function scrollProfilePicOpacity(element) {
    console.log('scrolling')
}
let myOpacityParent = document.getElementById('opacity-decrease-parent');
let myOpacityChild = document.getElementById('opacity-decrease-child');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();

    // return (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    // );

    if (rect.top > 580) {
        if(element.classList.contains('opacity-80')) {
            element.classList.remove('opacity-80')
            element.classList.add('opacity-70')
            element.classList.add('delay-150')
        }
    }
    else if (rect.top > 480) {
        element.classList.remove('opacity-70')
        element.classList.add('opacity-60')
    }
    else if (rect.top > 380) {
        element.classList.remove('opacity-60')
        element.classList.add('opacity-50')
    }
    else if (rect.top > 280) {
        element.classList.remove('opacity-50')
        element.classList.add('opacity-40')
    }
    else if (rect.top > 180) {
        element.classList.remove('opacity-40')
        element.classList.add('opacity-30')
    }
    else if (rect.top > 180) {
        element.classList.remove('opacity-30')
        element.classList.add('opacity-20')
    }
    else if (rect.top > 180) {
        element.classList.remove('opacity-20')
        element.classList.add('opacity-10')
    }
}
document.addEventListener('scroll', function() {
    const message = isInViewport(myOpacityChild);
}, { 
    passive: true
})