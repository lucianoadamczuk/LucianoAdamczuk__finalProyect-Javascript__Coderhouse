const allCareers__contentContainer = document.getElementById(`allCareers__contentContainer`)
const arrow__allCareers = document.getElementById(`arrow__allCareers`)
const careerSubjectsContainer = document.querySelectorAll(`careerSubjectsContainer`)


fetch("../json/dataBaseCareers.json")
    .then((response) => {
        return response.json()
    })
    .then((careerList) => {
        
        careerList.forEach(element => {
            allCareers__contentContainer.innerHTML += 
            `
                <div class="careerBox">

                    <div class="careerName">
                        <p class="size-l">Career:</p>
                        <p class="size-l"> ${element.name}</p>
                    </div>

                    <div class="careerDuration">
                        <p class="size-l">Duration:</p>
                        <p class="size-l">${element.duration}</p>
                    </div>

                    <div class="careerSubjects">
                        <p class="size-l">Subjects</p>
                        <svg id="arrow__allCareers" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>

                    <div class="careerSubjectsContainer" id="careerSubjectsContainer">
                        <p class="size-xl"> ${element.subjects} </p>
                    </div>

                </div> 
            `
        });

    })


