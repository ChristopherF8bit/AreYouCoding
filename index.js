const readline = require('readline').createInterface({input: process.stdin,output: process.stdout});
let person = class {
    constructor(awake, coding, answer) {
        this.awake = awake
        this.coding = coding
        this.answer = answer
    }
}
let me = new person(false,false, undefined)
function question(question, response_y, response_n) {
    return new Promise((resolve,reject) => {
    readline.question( question+ ' (y/n); \n>', answer => {
        if(answer === 'y') {console.log(response_y);me.answer = answer;}
        if(answer === 'n') {console.log(response_n);me.answer = answer;}
        resolve();
      });
    })
}
async function myDayInit() {
    await question('Are you awake?', 'Ok...', 'Sorry to bother you...')
    if(me.answer === 'y') {
        me.awake = true
        if(me.awake) {amICoding()}
    } else {
        while(!me.awake) {
            await question('Did you wake up yet?', 'Good morning, I think?', 'Ok hurry up and sleep.')
            if(me.answer === 'y') {me.awake = true; amICoding()}
            else {me.awake = false}
        }
    }
}
async function amICoding() {
    await question('Are you Coding?', 'Ok Keep Going...', 'Ok..')
    if(me.answer === 'n') {
        await question('Are you Sleeping', 'Ok...', 'Ok Start Coding')
        if(me.answer === 'y') {me.awake = false}
    }
    if(me.awake) {amICoding()}
    if(!me.awake) {
        while(!me.awake) {
            await question('Did you wake up yet?', 'Good morning, I think?', 'Ok hurry up and sleep.')
            if(me.answer === 'y') {me.awake = true; amICoding()}
            else {me.awake = false}
        }
    }
}
myDayInit()