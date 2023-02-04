const carouselInfinite__slidetracksContainer = document.getElementById(`carouselInfinite__slidetracksContainer`)
const carouselInfinite__slidetrack = document.getElementById(`carouselInfinite__slidetrack`)
const carouselInfinite__slides = document.querySelectorAll(`.carouselInfinite__slides`)
const copyOf__carouselInfinite__slidetrack = carouselInfinite__slidetrack.cloneNode(true)
carouselInfinite__slidetracksContainer.appendChild(copyOf__carouselInfinite__slidetrack)

let carouselInfinite__speed = 10
const moveToLeft = carouselInfinite__slidetrack.offsetWidth

function playCarouselInfinite(){
    carouselInfinite__slidetracksContainer.style.marginLeft = `-${moveToLeft}vw`
    carouselInfinite__slidetracksContainer.style.transition = `${carouselInfinite__speed}s linear`

    setTimeout(() => {
        carouselInfinite__slidetracksContainer.style.marginLeft = `0`
        carouselInfinite__slidetracksContainer.style.transition = `0s`
    }, carouselInfinite__speed*1000);

    algo = carouselInfinite__speed*1000
    console.log(algo)
    // conditional to change the velocity in desktop
    if(window.matchMedia("(min-width: 900px)").matches){
        carouselInfinite__speed = carouselInfinite__speed*100
    }
}

playCarouselInfinite()
// setInterval(() => {
//     playCarouselInfinite()
// }, carouselInfinite__speed*100);