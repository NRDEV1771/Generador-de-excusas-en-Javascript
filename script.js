let who = ['The dog', 'My grandma', 'The mailman', 'My cat'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework','my bed', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch',];

let maxIndex = 4;

function getRandomInt() {
    return Math.floor(Math.random() * maxIndex);
}
    
function select() {
    let whoInstance = who[getRandomInt()];
    let actionInstance = action[getRandomInt()];
    let whatInstance = what[getRandomInt()];
    let whenInstance = when[getRandomInt()];

    let message = whoInstance+" "+ actionInstance +" "+ whatInstance +" "+ whenInstance;

    console.log(message);

    return message;
}
