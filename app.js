const prompt = require('prompt-sync')();

const questionBank = {
    "What is the world's fastest bird?": "Peregrine Falcon",
    "How many times does the average person laugh in a day?": "13!",
    "What are two things you can never eat for breakfast?":"Lunch and Dinner",
    "How do you make the number one disappear?":"Add a ‘G’ and it’s gone!"
};


let currentQuestionIndex = 0;

const getquestion = (questionBank) => {
    const questions = Object.keys(questionBank);

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        currentQuestionIndex++;
        return currentQuestion;
    } else {
        return null;
    }
};

while (true) {
    const question = getquestion(questionBank);

    if (question === null) {
        break;  // exit the loop when there are no more questions
    }

    // console.log(question);

    // Do something with the question...

   let isAnswerCorrect = false;

    const Askanswers = prompt(question + "What is the answers: ");
    const answers = Object.values(questionBank);

    for (let i=0; i<answers.length; i++){
        if(Askanswers ===  answers[i]){
            console.log("Answer is Correct");
            isAnswerCorrect = true;
            break;
        };
    };

    if(!isAnswerCorrect){
        console.log("wrong Answer");
    };
};


