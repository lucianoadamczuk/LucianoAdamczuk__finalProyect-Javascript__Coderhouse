// ** Plataform  **
let accessToStudentLogged = JSON.parse(localStorage.getItem(`studentLogged`))
// variable to the title and line to personlize the title
let welcomeTitle = document.getElementById(`welcomeTitle`)
welcomeTitle.innerHTML = `<p>Welcome ${accessToStudentLogged.name} ${accessToStudentLogged.surname} </p>`

// variables with different views inside of the page
const div__myCareer = document.getElementById(`div__myCareer`)
const div__changeInformation = document.getElementById(`div__changeInformation`)

const plataform__optionsContainer_button = document.getElementById(`plataform__optionsContainer_button`)
const plataform__optionsContainer = document.getElementById(`plataform__optionsContainer`)
const plataform__optionContainer_links = document.querySelectorAll(`.plataform__optionContainer_link`)



// flag to know if the menu is open
let plataformMenuOpen = false

// * open and close menu on mobile
plataform__optionsContainer_button.addEventListener(`click`, e =>{

    if(plataformMenuOpen == false){
        plataform__optionsContainer.classList.add(`showMenu`)
        plataform__optionsContainer_button.style.rotate = `180deg`

        setTimeout(() => {
            for (const link of plataform__optionContainer_links) {
                link.style.display = `flex`
                link.style.opacity = `100`
                }

            plataform__optionsContainer.classList.remove(`hideMenu`)
        }, 200);


        plataformMenuOpen = true
    }

    else{
        plataform__optionsContainer.classList.add(`hideMenu`)
        
        plataform__optionsContainer_button.style.rotate = `0deg`
        setTimeout(() => {
            for (const link of plataform__optionContainer_links) {
                link.style.display = `none`
                link.style.opacity = `0`
            }

            plataform__optionsContainer.classList.remove(`showMenu`)
        }, 200);

        plataformMenuOpen = false
    }

    for (const link of plataform__optionContainer_links) {
        link.addEventListener(`click`, e => {

            plataform__optionsContainer.classList.remove(`showMenu`)
            plataform__optionsContainer_button.style.rotate = `0deg`

            for (const link of plataform__optionContainer_links) {
                link.style.display = `none`
                link.style.opacity = `0`
            }

            plataformMenuOpen = false
        })
    }
})


// function to hide the containers
function hideContainer(){
    // add the animation
    div__myCareer.classList.add(`hideContainer`)
    div__changeInformation.classList.add(`hideContainer`)

    // remove display flex
    div__myCareer.style.display = `none`
    div__changeInformation.style.display = `none`
    
}


plataform__optionContainer_links[0].addEventListener(`click`, () =>{
    hideContainer()
    div__myCareer.classList.remove(`hideContainer`)
    div__myCareer.style.display = `flex`
    div__myCareer.classList.add(`showContainer`)
})
// TODO create the divs with their ids in html
plataform__optionContainer_links[1].addEventListener(`click`, () =>{
    hideContainer()
    div__myCareer.classList.remove(`hideContainer`)
    div__myCareer.style.display = `flex`
    div__myCareer.classList.add(`showContainer`)
})
// TODO create the divs with their ids in html
plataform__optionContainer_links[2].addEventListener(`click`, () =>{
    hideContainer()
    div__myCareer.classList.remove(`hideContainer`)
    div__myCareer.style.display = `flex`
    div__myCareer.classList.add(`showContainer`)
})
// TODO create the divs with their ids in html
plataform__optionContainer_links[3].addEventListener(`click`, () =>{
    hideContainer()
    div__myCareer.classList.remove(`hideContainer`)
    div__myCareer.style.display = `flex`
    div__myCareer.classList.add(`showContainer`)
})
plataform__optionContainer_links[4].addEventListener(`click`, () =>{
    hideContainer()
    div__changeInformation.classList.remove(`hideContainer`)
    div__changeInformation.style.display = `flex`
    div__changeInformation.classList.add(`showContainer`)
})


// * myCareer *
let plataform__careerName = document.getElementById(`plataform__careerName`)
plataform__careerName.textContent = `${accessToStudentLogged.career}`

// * changeUserInformation *
let inputs = document.getElementsByClassName(`input`)
let userName = document.getElementById(`userName`)
let userSurname = document.getElementById(`userSurname`)
let userEmail = document.getElementById(`userEmail`)
let userPassword = document.getElementById(`userPassword`)
let userDate = document.getElementById(`userDate`)
let userSex = document.getElementById(`userSex`)
let userCareer = document.getElementById(`userCareer`)

const plataform__button_modifyUserInformation = document.getElementById(`plataform__button_modifyUserInformation`)

// flag to check if the form is disabled or not
let inputsDisabled = true

userName.value = accessToStudentLogged.name
userSurname.value = accessToStudentLogged.surname
userEmail.value = accessToStudentLogged.email
userPassword.value = accessToStudentLogged.password
userDate.value = accessToStudentLogged.date
userSex.innerHTML = `<p class="size-xl">${accessToStudentLogged.sex}</p>` 
userCareer.innerHTML = `<p class="size-xl">${accessToStudentLogged.career}</p>` 


plataform__button_modifyUserInformation.addEventListener(`click`, e =>{

    function removeInputsAtributtes(){
        userName.removeAttribute(`disabled`) 
        userSurname.removeAttribute(`disabled`)
        userEmail.removeAttribute(`disabled`)
        userPassword.removeAttribute(`disabled`)

        inputsDisabled = false
    }

    function addInputsAtribbutes(){
        userName.setAttribute(`disabled`, true) 
        userSurname.setAttribute(`disabled`, true)
        userEmail.setAttribute(`disabled`, true)
        userPassword.setAttribute(`disabled`, true)

        inputsDisabled = true
    }

    if(inputsDisabled == true){
        e.preventDefault()
        removeInputsAtributtes()
        plataform__button_modifyUserInformation.innerHTML = `Save`
        
    }
    else{
        e.preventDefault()
        addInputsAtribbutes()

        accessToStudentLogged.name = userName.value 
        accessToStudentLogged.surname = userSurname.value
        accessToStudentLogged.email = userEmail.value
        accessToStudentLogged.password = userPassword.value

        plataform__button_modifyUserInformation.innerHTML = `Modify`

        // refresh student information
        localStorage.setItem(`studentLogged`, JSON.stringify(accessToStudentLogged))

        setTimeout(() => {
            window.location.reload()
        }, 1000);
    }
})






