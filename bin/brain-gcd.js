#!/usr/bin/env node
import readlineSync from 'readline-sync';

const find = (number1, number2) => {
  if (number2 === 0) {
    return Math.abs(number1);
  }
  return find(number2, number1 % number2);
};

const func = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`'Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  const getRandomNumber = () => Math.floor(Math.random() * 100);
  const number = getRandomNumber();
  const numbers = getRandomNumber();
  console.log(`Question: ${number} ${numbers}`);
  const youAnswer = Number(readlineSync.question('You answer: '));
  const answer = find(number, numbers);
  if (youAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`Question: ${number} ${numbers} 
Your answer: ${youAnswer} 
'${youAnswer}' is wrong answer ;(. Correct answer was ${answer}.`);
    console.log(`Let's try again, ${name}!`);
    return;
  }
  const numb = getRandomNumber();
  const numbs = getRandomNumber();
  console.log(`Question: ${numb} ${numbs}`);
  const youAnswer1 = Number(readlineSync.question('You answer: '));
  const answers = find(numb, numbs);
  if (youAnswer1 === answers) {
    console.log('Correct!');
  } else {
    console.log(`Question: ${numb} ${numbs}
Your answer: ${youAnswer1}
'${youAnswer1}' is wrong answer ;(. Correct answer was ${answers}.`);
    console.log(`Let's try again, ${name}!`);
    return;
  }
  const num = getRandomNumber();
  const nums = getRandomNumber();
  console.log(`Question: ${num} ${nums}`);
  const youAnswer2 = Number(readlineSync.question('You answer: '));
  const ans = find(num, nums);
  if (youAnswer2 === ans) {
    console.log('Correct!');
  } else {
    console.log(`Question: ${num} ${nums}
Your answer: ${youAnswer2}
'${youAnswer2}' is wrong answer ;(. Correct answer was ${ans}.`);
    console.log(`Let's try again, ${name}!`);
    return;
  }
  console.log(`Congratulations, ${name}!`);
};
func();
