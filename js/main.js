let input = document.querySelector('textarea')
let choices_container = document.querySelector('.choices')

function createChoices(str){
    let choicesArray = str.split(",").map(choice => choice.trim()).filter(choice => choice)
    choicesArray.forEach(choice => {
        let new_element = document.createElement('div')
        new_element.classList.add('choice')
        new_element.innerText = choice
        choices_container.appendChild(new_element)
    });
}

input.addEventListener('keyup', event => {
    if (event.key === 'Enter'){
        pickChoice()
        input.blur()
        input.value = ""
    }
     else{choices_container.innerHTML= ""
        createChoices(event.target.value)}
    })
    function pickChoice(){
        let choices_number = choices_container.children.length
        let random_choice = choices_container.children[0]
        let interval = setInterval(() => {
            random_choice = choices_container.children[Math.floor(Math.random()*choices_number)]
            random_choice.style.backgroundColor = "red"
            setTimeout(() => {
            random_choice.style.backgroundColor = "orange"
            }, 80);
         }, 160);
         setTimeout(() => {
            clearInterval(interval)
            choices_container.children[Math.floor(Math.random()*choices_number)].style.backgroundColor = '#380468'
         }
        ,3000)
    }
    