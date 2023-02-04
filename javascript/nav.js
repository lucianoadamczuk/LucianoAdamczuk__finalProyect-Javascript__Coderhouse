const hamburguerMenu = document.getElementById(`hamburguerMenu`)
const navMobileStyle = document.getElementById(`navMobileStyle`)
const linksContainer = document.getElementById(`linksContainer`)
const navLinks = document.querySelectorAll(`.navLink`)
// flag to recognize if the menu is open or not 
let menuOpen = false


hamburguerMenu.addEventListener(`click`, e =>{

    if(menuOpen == false){
        navMobileStyle.style.display = `flex`
        linksContainer.classList.add(`showMenu`)
    
        for (const link of navLinks) {
            link.classList.add(`showNavLinks`)

            link.addEventListener(`click`, e => {
                navMobileStyle.style.display = `none`
                linksContainer.classList.remove(`showMenu`)
                menuOpen = false
            })
        }

        // flag to recognize if the menu is open or not        
        menuOpen = true
    }
    else{
        navMobileStyle.style.display = `none`
        linksContainer.classList.remove(`showMenu`)
    
        for (const link of navLinks) {
            link.classList.remove(`showNavLinks`)
        }

        // flag to recognize if the menu is open or not
        menuOpen = false
    }

})

