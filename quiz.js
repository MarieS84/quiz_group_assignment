let questions = [
    {question: "Earth is flat.", options: ["True", "False"], answer: 1},
    {question: "Earth is flat.", options: ["True", "False"], answer: 1},
    {question: "Java is a programming language", options: ["True", "False"], answer: 0}
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
        Incorrect!
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
            <label class="form-check-label" for="exampleRadios1">
                ${option}
            </label>
        </div>
        `
        pos++
    }

    document.getElementById("options").innerHTML = html
}

function showScore(){
    document.getElementById("quizCard").innerHTML =`<h4>You had ${points} correct answers out of ${questions.length}</h4>`
}


