const questionContainer_1 = document.getElementById(`questionContainer_1`)
const answerContainer_1 = document.getElementById(`answerContainer_1`)
const answer__1 = document.getElementById(`answer__1`)
const questionContainer_2 = document.getElementById(`questionContainer_2`)
const answerContainer_2 = document.getElementById(`answerContainer_2`)
const answer__2 = document.getElementById(`answer__2`)
const questionContainer_3 = document.getElementById(`questionContainer_3`)
const answerContainer_3 = document.getElementById(`answerContainer_3`)
const answer__3 = document.getElementById(`answer__3`)
const questionContainer_4 = document.getElementById(`questionContainer_4`)
const answerContainer_4 = document.getElementById(`answerContainer_4`)
const answer__4 = document.getElementById(`answer__4`)
const questionContainer_5 = document.getElementById(`questionContainer_5`)
const answerContainer_5 = document.getElementById(`answerContainer_5`)
const answer__5 = document.getElementById(`answer__5`)

questionContainer_1.addEventListener(`click`, e => {
    answerContainer_1.classList.toggle(`showAnswerContainer`)
    answer__1.classList.toggle(`showAnswer`)
})

questionContainer_2.addEventListener(`click`, e => {
    answerContainer_2.classList.toggle(`showAnswerContainer`)
    answer__2.classList.toggle(`showAnswer`)
})

questionContainer_3.addEventListener(`click`, e => {
    answerContainer_3.classList.toggle(`showAnswerContainer`)
    answer__3.classList.toggle(`showAnswer`)
})

questionContainer_4.addEventListener(`click`, e => {
    answerContainer_4.classList.toggle(`showAnswerContainer`)
    answer__4.classList.toggle(`showAnswer`)
})

questionContainer_5.addEventListener(`click`, e => {
    answerContainer_5.classList.toggle(`showAnswerContainer`)
    answer__5.classList.toggle(`showAnswer`)
})