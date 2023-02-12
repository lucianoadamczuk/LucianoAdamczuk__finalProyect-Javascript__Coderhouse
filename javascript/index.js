// * information__1 *
const index__desktop__button_mainlyCareers = document.getElementById(`index__desktop__button_mainlyCareers`)
const index__information1_itemsContainer = document.getElementById(`index__information1_itemsContainer`)
const index__information1_item = document.querySelectorAll(`.index__information1_item`)

// flag for information__1
let  information__1_button_open = false

index__desktop__button_mainlyCareers.addEventListener(`click`, e =>{

    if(information__1_button_open == false){
        index__information1_itemsContainer.style.marginLeft = `0`
        index__information1_itemsContainer.style.transition = `0.5s linear`
    
        setTimeout(() => {
            index__information1_item.forEach(item => {
                item.style.margin = `0px 2% 0px 2%`
                item.style.transition = `0.5s`
            });
        }, 500);

        // flag
        information__1_button_open = true
    }
    else{
        index__information1_item.forEach(item => {
            item.style.margin = `0px 0% 0px 0%`
            item.style.transition = `0.5s`
        });

        setTimeout(() => {
            index__information1_itemsContainer.style.marginLeft = `150%`
            index__information1_itemsContainer.style.transition = `0.5s linear`
        }, 500);

        // flag
        information__1_button_open = false
    }
})


// * requentQuestions *
const questionContainer_1 = document.getElementById(`questionContainer_1`)
const question1__arrow = document.getElementById(`question1__arrow`)
const answerContainer_1 = document.getElementById(`answerContainer_1`)
const answer__1 = document.getElementById(`answer__1`)

const questionContainer_2 = document.getElementById(`questionContainer_2`)
const question2__arrow = document.getElementById(`question2__arrow`)
const answerContainer_2 = document.getElementById(`answerContainer_2`)
const answer__2 = document.getElementById(`answer__2`)

const questionContainer_3 = document.getElementById(`questionContainer_3`)
const question3__arrow = document.getElementById(`question3__arrow`)
const answerContainer_3 = document.getElementById(`answerContainer_3`)
const answer__3 = document.getElementById(`answer__3`)

const questionContainer_4 = document.getElementById(`questionContainer_4`)
const question4__arrow = document.getElementById(`question4__arrow`)
const answerContainer_4 = document.getElementById(`answerContainer_4`)
const answer__4 = document.getElementById(`answer__4`)

const questionContainer_5 = document.getElementById(`questionContainer_5`)
const question5__arrow = document.getElementById(`question5__arrow`)
const answerContainer_5 = document.getElementById(`answerContainer_5`)
const answer__5 = document.getElementById(`answer__5`)

questionContainer_1.addEventListener(`click`, e => {
    question1__arrow.classList.toggle(`rotateArrow`)
    answerContainer_1.classList.toggle(`showAnswerContainer`)
    answer__1.classList.toggle(`showAnswer`)
})

questionContainer_2.addEventListener(`click`, e => {
    question2__arrow.classList.toggle(`rotateArrow`)
    answerContainer_2.classList.toggle(`showAnswerContainer`)
    answer__2.classList.toggle(`showAnswer`)
})

questionContainer_3.addEventListener(`click`, e => {
    question3__arrow.classList.toggle(`rotateArrow`)
    answerContainer_3.classList.toggle(`showAnswerContainer`)
    answer__3.classList.toggle(`showAnswer`)
})

questionContainer_4.addEventListener(`click`, e => {
    question4__arrow.classList.toggle(`rotateArrow`)
    answerContainer_4.classList.toggle(`showAnswerContainer`)
    answer__4.classList.toggle(`showAnswer`)
})

questionContainer_5.addEventListener(`click`, e => {
    question5__arrow.classList.toggle(`rotateArrow`)
    answerContainer_5.classList.toggle(`showAnswerContainer`)
    answer__5.classList.toggle(`showAnswer`)
})

// -


