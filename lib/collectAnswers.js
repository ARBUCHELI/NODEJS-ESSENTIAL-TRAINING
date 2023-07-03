const readline = require("readline");

//Consuming a module with EventEmitter
const { EventEmitter } = require("events");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//The done callback is going to fire, when we are done asquing questions
module.exports = (questions, done) => {
    const answers = [];
    const [firstQuestion] = questions;

    const emitter = new EventEmitter();

    const questionAnswered = answer => {
        //Let's say we want to raise and event everytime the user answer a question
        emitter.emit("answer", answer);
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
    rl.question(firstQuestion, questionAnswered);
    //Now we can use this emitter to raise events when certain things happen within this function
    return emitter;
}

