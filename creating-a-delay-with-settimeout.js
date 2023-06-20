const waitTime = 3000; //3 seconds
console.log(`setting a ${waitTime/1000} second delay`);

const timerFinished = () => console.log("done");

setTimeout(timerFinished, waitTime);

