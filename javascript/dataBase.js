
// Student Constructor
class Student {
    constructor(name, surname, email, password, date, sex, career){
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.password = password,
        this.date = date,
        this.sex = sex,
        this.career = career
    }
}

// to create a new student with sign up form
let student = new Student()

// to save the students
let studentsList = [`alguien@gmail.com`]

let studentLogged
// to access students data base
let accessToDataBase__studentsList = JSON.parse(localStorage.getItem(`studentsList`))


let careersList = [
    `Medicine`, `Law`, `Programming`
]

