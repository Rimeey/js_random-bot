'use strict'

const bot_num = Math.floor(Math.random() * 101);

console.log(bot_num)

let user_num = 0

let guessed = user_num == bot_num

while(guessed == false) {

    user_num = +prompt('guess a number from 0 to 100')

    if (user_num == bot_num) {
        alert('You guessed!')
        break;
    } else if (user_num < bot_num) {
        alert('The current number is less than the predicted one')
        continue;
    } else if (user_num > bot_num) {
        alert('The current number is greater than the predicted one')
        continue;
    } else if (user_num == '' || user_num == null) {
        break;
    }
}