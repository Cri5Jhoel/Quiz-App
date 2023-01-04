const quizData = [
    {
        question: 'Who from this heroes flies',
        a: 'Ant-Man',
        b: 'Hulk',
        c: 'Wolverine',
        d: 'Thor',
        correct: 'd'
    }, {
        question: 'What is the most used programming language in 2019?',
        a: 'C',
        b: 'Java',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'What is Iron Man´s real name?',
        a: 'Bucky Backster',
        b: 'Steve Rogers',
        c: 'Tony Stark',
        d: 'Peter Quill',
        correct: 'c'
    }, {
        question: 'What is the most used web framework among developers worldwide (2022)?',
        a: 'ASP.NET Core',
        b: 'Node.js',
        c: 'Angular',
        d: 'React.js',
        correct: 'b'
    }, {
        question: 'What is the most popular database management systems worldwide (2022)?',
        a: 'Oracle',
        b: 'SQLite',
        c: 'MariaDB',
        d: 'MongoDB',
        correct: 'a'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Helicopters Terminals Motorboats Lamborginis',
        c: 'Helium Modern Legal',
        d: 'Hypertext Mashup Linguini',
        correct: 'a'
    }
];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer"); //Radiobuttons

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //Check to see the answer
    const answer = getSelected();

    console.log(answer);

    if (answer){
        //Verifying if its correct
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>
            `;
        } 
    } 
});