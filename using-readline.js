const collectAnswers = require("./lib/collectAnswers")

const questions = [
    "What is your name?  ",
    "Where do you live?  ",
    "What are you going to do with Node.js? "
]
//The done callback is going to fire, when we are done asquing questions

/** Exercise Consuming a module with EventEmitter.
 * Because our collectAnswers function now returns an event emitter, we can do this:
 */

const answerEvents = collectAnswers(questions, (answers) => {
    console.log("Thank you for your answers!");
    console.log(answers);
    process.exit();
})

answerEvents.on("answer", answer => console.log(`The answer is ${answer}`))