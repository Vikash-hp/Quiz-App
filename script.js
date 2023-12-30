const questions=[
    {
        question: "Which is largest animal in the world?",
        answers:[
            
            { text:"Shark",correct:false },
            { text:"Blue Whale",correct:true },
            { text:"Elephant",correct:false },
            { text:"Giraffe",correct:false }
            
        ]
    },
    {
        question: "Which is largest river in the world?",
        answers:[
            
            { text:"Ganga",correct:false },
            { text:"Nil",correct:true },
            { text:"Godavari",correct:false },
            { text:"Bramputra",correct:false }
            
        ]
    },
    {
        question: "Which is most clever animal in the world?",
        answers:[
            
            { text:"Shark",correct:false },
            { text:"fox",correct:true },
            { text:"tiger",correct:false },
            { text:"lion",correct:false }
            
        ]
    },
    {
        question: "Which is most powerful country in the world?",
        answers:[
            
            { text:"America",correct:true },
            { text:"Russia",correct:false },
            { text:"Japan",correct:false },
            { text:"China",correct:false }
            
        ]
    },
    {
        question: "Which one exam is most toughest exam in the world?",
        answers:[
            
            { text:"IIT/JEE",correct:false },
            { text:"UPSC",correct:false },
            { text:"GaoKao",correct:true },
            { text:"CLAT",correct:false }
            
        ]
    },
    {
        question: "Which one is the largest country in the world according to economic?",
        answers:[
            
            { text:"India",correct:false },
            { text:"France",correct:false },
            { text:"Japan",correct:false },
            { text:"America",correct:true }
            
        ]
    }
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");


let currQuestionIndex=0;
let score=0;

function startQuiz(){
    currQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currQuestion= questions[currQuestionIndex];
    let questionNo=currQuestionIndex + 1;
    questionElement.innerHTML=questionNo + "." +currQuestion.question;

    currQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);


        if(answer.correct){
            button.dataset.correct=answer.correct;
        }

        button.addEventListener("click",selectAnswer);
    });

}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect= selectedBtn.dataset.correct == "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("inCorrect");
    }

    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });

    nextButton.style.display="block";

    }
     

    function showScore(){
        resetState();
        questionElement.innerHTML=`Congratulations You scored ${score} out of ${questions.length} !!`;
        nextButton.innerHTML ="Play Again";
        nextButton.style.display="block";
    }

    function handleNextButton(){
        currQuestionIndex++;
        if(currQuestionIndex < questions.length){
            showQuestion();
        }
        else{
            showScore();
        }
    }

    nextButton.addEventListener("click",()=>{
        if(currQuestionIndex<questions.length){
            handleNextButton();
        }
        else{
            startQuiz();
        }
    });


startQuiz();