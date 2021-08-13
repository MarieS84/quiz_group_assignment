let questions = [
    { question: "What is someone who shoes horses called?", options: ["Horse shoe smith", "Farrier", "Blacksmith", "Schumacher"], answer: 1 },
    { question: "What is the seventh planet from the sun?", options: ["Mercury", "Jupiter", "Uranus", "Earth", "Mars"], answer: 2 },
    { question: "What kind of weapon is a falchion?", options: ["Sword", "Lance", "Dagger", "Throwing star"], answer: 0 },
    { question: "Which country is home to the Cresta Run?", options: ["Switzerland", "Ireland", "Germany", "Italy", "United States"], answer: 0 },
    { question: "In needlework, what does UFO refer to?", options: ["Unfashioned order", "Uniform fringed oval", "Underfolded offset", "Unfinished object"], answer: 3 },
    { question: "If you were painting with tempera, what would you be using to bind together colour pigments?", options: ["Oil", "Flower", "Egg yolk", "Plaster"], answer: 2 },
    { question: "Elisha Graves Otis invented the elevator", options: ["True", "False"], answer: 0 },
    { question: "Which of the following is not a sistership of Titanic?", options: ["Britannic", "Atlantic", "Olympic"], answer: 1 },
    { question: "Who was Henry VIll's first wife?", options: ["Anne Boleyn", "Jane Seymour", "Anne of Cleves", "Catherine of Aragon", "Catherine Howard", "Catherine Parr"], answer: 3 },
    { question: "When was the euro introduced as legal currency on the world market?", options: ["1996", "1999", "2001", "2003"], answer: 1 }
]

let count = -1
let points = 0
generateNewQuestion()

function answerCheck() {
    let options = document.getElementsByName("answer")
    let isAnswer = false

    for (let option of options) {
        if (option.checked) {
            isAnswer = true
            break
        }
    }

    if (!isAnswer) {
        document.getElementById("options").classList.add("border")
        document.getElementById("options").classList.add("border-danger")
        document.getElementById("options").classList.add("border-5")
        return
    }

    if (count != questions.length - 1) {
        document.getElementById("NextQuestionButton").classList.remove("hide")
    }
    else {
        document.getElementById("ShowScoreButton").classList.remove("hide")
    }
    document.getElementById("answerButton").classList.add("hide")

    let answer = -1
    console.log("Options", options)
    for (let option of options) {
        if (option.checked) {
            answer = parseInt(option.value)
            break
        }
    }
    console.log("Answer", answer)

    if (questions[count].answer === answer) {
        document.getElementById("alert").innerHTML = `<div class="alert alert-success" role="alert">
        Correct!
      </div>`
        points++
    }
    else {
        document.getElementById("alert").innerHTML = `<div class="alert alert-danger" role="alert">
        Incorrect! The correct answer is: ${questions[count].options[questions[count].answer]}
      </div>`
    }
}



function generateNewQuestion() {
    count++
    document.getElementById("question").innerText = questions[count].question
    document.getElementById("NextQuestionButton").classList.add("hide")
    document.getElementById("answerButton").classList.remove("hide")
    document.getElementById("alert").innerHTML = ""

    let html = ""
    let pos = 0
    for (let option of questions[count].options) {
        html += `
        <div class="form-check" style="text-align: left">
            <input class="form-check-input" type="radio" id="answer${pos}" name="answer" value="${pos}" onclick="removeRedBorder()">
            <label class="form-check-label textColor" for="answer${pos}">
                ${option}
            </label>
        </div>
        `
        pos++
    }

    document.getElementById("options").innerHTML = html
}

function showScore() {
    let scoreProc = (points / questions.length) * 100
    let heading = `<h1 class="standardPadding">`
    let smiley = ""
    
    if (scoreProc == 100) {
        heading += "Wonderful! You are amazing!!</h1>"
        smiley = "<h1>&#x1f929</h1>"
    } else if (scoreProc > 70) {
        heading += "Very good!</h1>"
        smiley = "<h1>&#x1F61D</h1>"
    } else if (scoreProc > 50) {
        heading += "That's OK</h1>"
        smiley = "<h1>&#x1F971</h1>"
    } else if (scoreProc > 30) {
        heading += "Better luck next time!</h1>"
        smiley = "<h1>&#x1F644</h1>"
    } else if (scoreProc > 0) {
        heading += `That's aweful...</h1><h2>There's definitely room for improvement here.</h2>`
        smiley = "<h1>&#x1F92D</h1>"
    }
    else{
        heading += `Seriously?</h1>
        <h2>Not a single point?? Wow...</h2>`
        smiley = "<h1>&#x1F92E</h1>"
    }


    let body = `<h4 class="textColor centr">You had ${points} correct answers out of ${questions.length}</h4>`


    document.getElementById("quizCard").innerHTML = heading + body + smiley
}

function removeRedBorder() {
    document.getElementById("options").classList.remove("border")
    document.getElementById("options").classList.remove("border-danger")
    document.getElementById("options").classList.remove("border-5")
}