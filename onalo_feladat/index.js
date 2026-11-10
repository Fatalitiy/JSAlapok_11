let button=document.querySelectorAll("button")
let hp=document.querySelectorAll(".char-hp")
console.log(hp[0])

// AIDA

let szovegAIDA = document.querySelector(".placeholder-text")
let nev =document.querySelector(".fohos-neve")
let nevElem = document.querySelectorAll(".char-name")
console.log(szovegAIDA)

/* button[0].addEventListener("click", function() {
    szovegAIDA.textContent = hp[0].textContent
    nev.textContent = nevElem[0].textContent
})

// DANTE
button[1].addEventListener("click", function() {
    szovegAIDA.textContent = hp[1].textContent
    nev.textContent = nevElem[1].textContent
})

// VIKTOR
button[2].addEventListener("click", function() {
    szovegAIDA.textContent = hp[2].textContent
    nev.textContent = nevElem[2].textContent
}) */
for (let index = 0; index < button.length; index++) {

      button[index].addEventListener("click", function() {
    szovegAIDA.textContent = hp[index].textContent
    nev.textContent = nevElem[index].textContent
})
}
