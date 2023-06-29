const card = document.querySelector(".area-img")
const namePerson = document.querySelector(".name-person")
const body = document.querySelector("body")

card.addEventListener("mouseenter", () => {
    namePerson.style.transition = 'all 400ms ease-in-out'
    namePerson.style.opacity = '1'
    body.style.background = '#3B0B0B'
}) 

card.addEventListener("mouseout", () => {
    namePerson.style.opacity = '0'
    body.style.background = '#000000'
})