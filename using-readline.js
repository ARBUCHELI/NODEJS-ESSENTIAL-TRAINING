const collectAnswers = require("./lib/collectAnswers")

const questions = [
    "What is your name?  ",
    "Where do you live?  ",
    "What are you going to do with Node.js? "
]
//The done callback is going to fire, when we are done asquing questions

collectAnswers(questions, (answers) => {
    console.log("Thank you for your answers!");
    console.log(answers);
    process.exit();
})

