let questions = [
    {question: "What is someone who shoes horses called?", options: ["Horse shoe smith", "Farrier", "Blacksmith", "Schumacher"], answer: 1},
    {question: "What is the seventh planet from the sun?", options: ["Mercury", "Jupiter", "Uranus", "Earth", "Mars"], answer: 2},
    {question: "What kind of weapon is a falchion?", options: ["Sword", "Lance", "Dagger", "Throwing star"], answer: 0},
    {question: "Which country is home to the Cresta Run?", options: ["Switzerland", "Ireland", "Germany", "Italy", "United States"], answer: 0},
    {question: "In needlework, what does UFO refer to?", options: ["Unfashioned order", "Uniform fringed oval", "Underfolded offset", "Unfinished object"], answer: 3},
    {question: "If you were painting with tempera, what would you be using to bind together colour pigments?", options: ["Oil", "Flower", "Egg yolk", "Plaster"], answer: 2},
    {question: "Elisha Graves Otis invented the elevator", options: ["True", "False"], answer: 0},
    {question: "Which of the following is not a sistership of Titanic?", options: ["Britannic", "Atlantic", "Olympic"], answer: 1},
    {question: "Who was Henry VIll's first wife?", options: ["Anne Boleyn", "Jane Seymour", "Anne of Cleves", "Catherine of Aragon", "Catherine Howard", "Catherine Parr"], answer: 3},
    {question: "When was the euro introduced as legal currency on the world market?", options: ["1996", "1999", "2001", "2003"], answer: 1}
]

let count = -1
let points = 0
generateNewQuestion()

function answerCheck(){
    if(count != questions.length-1){
        document.getElementById("NextQuestionButton").classList.remove("hide")
    }
    else{
        document.getElementById("ShowScoreButton").classList.remove("hide")
    }
    // document.getElementById("TrueButton").classList.add("hide")
    // document.getElementById("FalseButton").classList.add("hide")
    document.getElementById("answerButton").classList.add("hide")

    let options = document.getElementsByName("answer")
    let answer = -1
    console.log("Options", options)
    for(let option of options) {
        if (option.checked) {
            answer = parseInt(option.value)
            break
        }
    }
    console.log("Answer", answer)

    if(questions[count].answer === answer){
        document.getElementById("alert").innerHTML = `<div class="alert alert-success" role="alert">
        Correct!
      </div>`
      points++
    }
    else{
        document.getElementById("alert").innerHTML = `<div class="alert alert-danger" role="alert">
        Incorrect! The correct answer is: ${questions[count].options[questions[count].answer]}
      </div>`
    }
}



function generateNewQuestion(){
    count++
    document.getElementById("question").innerText = questions[count].question
    document.getElementById("NextQuestionButton").classList.add("hide")
    document.getElementById("answerButton").classList.remove("hide")
    //document.getElementById("TrueButton").classList.remove("hide")
    //document.getElementById("FalseButton").classList.remove("hide")
    document.getElementById("alert").innerHTML = ""
    
    let html = ""
    let pos = 0
    for (let option of questions[count].options) {
        html += `
        <div class="form-check" style="text-align: left">
            <input class="form-check-input" type="radio" name="answer" value="${pos}">
            <label class="form-check-label textColor" for="exampleRadios1">
                ${option}
            </label>
        </div>
        `
        pos++
    }

    document.getElementById("options").innerHTML = html
}

function showScore(){
    document.getElementById("quizCard").innerHTML =`<h4 class="textColor">You had ${points} correct answers out of ${questions.length}</h4>`
}


