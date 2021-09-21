#!/usr/bin/env node
import readlineSync from 'readline-sync';

const func = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`'Hello, ${name}!`);
  console.log('What is the result of the expression?');
  const getRandomNumber = () => Math.floor(Math.random() * 100);
  const number = getRandomNumber();
  const numbers = getRandomNumber();
  console.log(`Question: ${number} + ${numbers}`);
  const youAnswer = Number(readlineSync.question('You answer: '));
  const answer = number + numbers;
  if (youAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was ${answer}.`);
    return `Let's try again, ${name}!`;
  }
  const numb = getRandomNumber();
  const numbs = getRandomNumber();
  console.log(`Question: ${numb} - ${numbs}`);
  const youAnswer1 = Number(readlineSync.question('You answer: '));
  const answers = numb - numbs;
  if (youAnswer1 === answers) {
    console.log('Correct!');
  } else {
    console.log(`'${youAnswer1}' is wrong answer ;(. Correct answer was ${answers}.`);
    return `Let's try again, ${name}!`;
  }
  const num = getRandomNumber();
  const nums = getRandomNumber();
  console.log(`Question: ${num} * ${nums}`);
  const youAnswer2 = Number(readlineSync.question('You answer: '));
  const ans = num * nums;
  if (youAnswer2 === ans) {
    console.log('Correct!');
  } else {
    console.log(`'${youAnswer2}' is wrong answer ;(. Correct answer was ${ans}.`);
    return `Let's try again, ${name}!`;
  }
  return `Congratulations, ${name}!`;
};
func();
