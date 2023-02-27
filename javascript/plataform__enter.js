
// ** Animations to choose the correct form (log in form or sign up) **

// Knowing the contentContainer height allows to move the buttons to the extremes
const plataform__enter_contentContainer = document.getElementById(`plataform__enter_contentContainer`)
let heightOfContentContainer = plataform__enter_contentContainer.offsetHeight

// clicks
const plataform__enter_circleUp = document.getElementById(`plataform__enter_circleUp`)
const plataform__enter_circleDown = document.getElementById(`plataform__enter_circleDown`)

// displace buttons
const plataform__enter_buttonsContainer = document.getElementById(`plataform__enter_buttonsContainer`)

// form containers
const formLogInContainer = document.getElementById(`formLogInContainer`)
const formSignUpContainer = document.getElementById(`formSignUpContainer`)

// flag to recognize if the form is visible or not
let logInContainer__active = false
let signUpContainer__active = false

plataform__enter_circleUp.addEventListener(`click`, e => {

    if(logInContainer__active == false){
        plataform__enter_buttonsContainer.style.transition = `1s`
        plataform__enter_buttonsContainer.style.marginTop = `${heightOfContentContainer}px`
        plataform__enter_circleUp.innerHTML = `<h3 class="size-xl">Close</h3>`

        formLogInContainer.classList.add(`showForm`)

        setTimeout(() => {
            formLogInContainer.style.display = `flex`
            formLogInContainer.classList.remove(`hideForm`)
            plataform__enter_contentContainer.style.overflow = `hidden`
        }, 500);

        // flag
        logInContainer__active = true
    }
    else{
        formLogInContainer.classList.add(`hideForm`)
        formLogInContainer.classList.remove(`showForm`)
        plataform__enter_contentContainer.style.overflowY = `scroll`

        setTimeout(() => {
            formLogInContainer.style.display = `none`
            plataform__enter_buttonsContainer.style.transition = `1s`
            plataform__enter_buttonsContainer.style.marginTop = `0`
            plataform__enter_circleUp.innerHTML = `<h3 class="size-xl">Log In</h3>`
        }, 500);

        // flag
        logInContainer__active = false
    }
})

plataform__enter_circleDown.addEventListener(`click`, e => {

    if(signUpContainer__active == false){
        plataform__enter_buttonsContainer.style.transition = `1s`
        plataform__enter_buttonsContainer.style.marginBottom = `${heightOfContentContainer}px`
        plataform__enter_circleDown.innerHTML = `<h3 class="size-xl">Close</h3>`

        formSignUpContainer.classList.add(`showForm`)

        setTimeout(() => {
            formSignUpContainer.style.display = `flex`
            formSignUpContainer.classList.remove(`hideForm`)
        }, 500);
        
        signUpContainer__active = true
    }
    else{
        formSignUpContainer.classList.add(`hideForm`)
        formSignUpContainer.classList.remove(`showForm`)

        setTimeout(() => {
            formSignUpContainer.style.display = `none`

            plataform__enter_buttonsContainer.style.transition = `1s`
            plataform__enter_buttonsContainer.style.marginBottom = `0`
            plataform__enter_circleDown.innerHTML = `<h3 class="size-xl">Sign Up</h3>`
        }, 500);

        signUpContainer__active = false
    }
})




// ** formSignUp **
const signUpForm = document.getElementById(`signUpForm`)
const input__signUpName = document.getElementById(`input__signUpName`)
const input__signUpSurname = document.getElementById(`input__signUpSurname`)
const input__signUpEmail = document.getElementById(`input__signUpEmail`)
const input__signUpPassword = document.getElementById(`input__signUpPassword`)
const input__signUpDate = document.getElementById(`input__signUpDate`)
const select__signUpSex = document.getElementById(`select__signUpSex`)
const select__signUpCareer = document.getElementById(`select__signUpCareer`)
const signUp__button = document.getElementById(`signUp__button`)
const labelSignUpEmail = document.getElementById(`labelSignUpEmail`)

// It fills the select of the form with the existing careers at the dataBase
for (const career of careersList) {
    select__signUpCareer.innerHTML += `<option value="${career}">${career}</option>`
}

// Sign Up button
signUp__button.addEventListener(`click`, e =>{

    // if the email is registered
    if(studentsList.includes()){
        e.preventDefault()

        // animation for desktop
        if(window.screen.width > 1000){
            signUpForm.classList.add(`formShaker`)
        }

        // changes in the formulary
        labelSignUpEmail.innerText = `This account already exists`
        labelSignUpEmail.style.color = `red`

        // delate changes in formulary
        setTimeout(() => {
            signUpForm.classList.remove(`formShaker`)
            labelSignUpEmail.innerText = `Email`
            labelSignUpEmail.style.color = ``
        }, 1000);
    }
    else{
        e.preventDefault()

        // collect the information of the inputs
        student.name =  input__signUpName.value
        student.surname =  input__signUpSurname.value
        student.email = input__signUpEmail.value
        student.password = input__signUpPassword.value
        student.date = input__signUpDate.value
        student.sex = select__signUpSex.value
        student.career = select__signUpCareer.value
        
        // push new student to the studentsList
        studentsList.push(student)
        // Add the student to Local Storage database
        localStorage.setItem(`studentsList`, JSON.stringify(studentsList))
        
        // from sweet alert library
        swal({
            title: "Welcome!",
            text: "Your registration has been successful",
            icon: "success",
        })
        
    }
})



// ** formLogIn **

const logInForm = document.getElementById(`logInForm`)
const input__logInEmail = document.getElementById(`input__logInEmail`)
const input__logInPassword = document.getElementById(`input__logInPassword`)
const logIn__button = document.getElementById(`logIn__button`)



// Log In button
logIn__button.addEventListener(`click`, e =>{
    e.preventDefault()
    for (const student of accessToDataBase__studentsList) {

        if(student.email == input__logInEmail.value && student.password == input__logInPassword.value){
            studentLogged  = student
            localStorage.setItem(`studentLogged`, JSON.stringify(studentLogged))
            
            window.location.href = `./plataform.html`
        }
    }
})



