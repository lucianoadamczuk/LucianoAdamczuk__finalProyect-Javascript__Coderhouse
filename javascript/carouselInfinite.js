const carouselInfinite__slidetracksContainer = document.getElementById(`carouselInfinite__slidetracksContainer`)
const carouselInfinite__slidetrack = document.getElementById(`carouselInfinite__slidetrack`)

for (let i = 0; i <= 50; i++) {
    const copyOf__carouselInfinite__slidetrack = carouselInfinite__slidetrack.cloneNode(true)
    carouselInfinite__slidetracksContainer.appendChild(copyOf__carouselInfinite__slidetrack)
}

const moveToLeft = carouselInfinite__slidetracksContainer.offsetWidth
let carouselInfinite__speed = 1000

function playCarouselInfinite(){
    function activeCarousel(){
        carouselInfinite__slidetracksContainer.style.marginLeft = `-${moveToLeft}px`
        carouselInfinite__slidetracksContainer.style.transition = `${carouselInfinite__speed}s linear`
    
        setTimeout(() => {
            carouselInfinite__slidetracksContainer.style.marginLeft = `0px`
            carouselInfinite__slidetracksContainer.style.transition = `none`
        }, carouselInfinite__speed*1000);
    }

    activeCarousel()

    setInterval(() => {
        activeCarousel()
    }, carouselInfinite__speed*1000+20);
}


playCarouselInfinite()

