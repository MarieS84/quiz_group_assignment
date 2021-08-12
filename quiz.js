let questions = [
    {question: "Earth is flat.", answer: false},
    {question: "Java is a programming language", answer: true}
]

let count = 0
let points = 0
document.getElementById("question").innerText = questions[count].question

function answerCheck(answer){
    if(count != questions.length-1){
        document.getElementById("NextQuestionButton").classList.remove("hide")
    }
    else{
        document.getElementById("ShowScoreButton").classList.remove("hide")
    }
    document.getElementById("TrueButton").classList.add("hide")
    document.getElementById("FalseButton").classList.add("hide")
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
    document.getElementById("TrueButton").classList.remove("hide")
    document.getElementById("FalseButton").classList.remove("hide")
    document.getElementById("alert").innerHTML =""
    
}

function showScore(){
    document.getElementById("quizCard").innerHTML =`<h4>You had ${points} correct answers out of ${questions.length}</h4>`
}


