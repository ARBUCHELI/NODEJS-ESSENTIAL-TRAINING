const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//The done callback is going to fire, when we are done asquing questions
function collectAnswers(questions, done) {
    const answers = [];

    const questionAnswered = answer => {
        answers.push(answer.trim());
        if (answers.length < questions.length) {
            rl.question(
                questions[answers.length], 
                questionAnswered
            );
        } else {
            return done(answers);
        }
    };
    rl.question(questions[0], questionAnswered);
}

