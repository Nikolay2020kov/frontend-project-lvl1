#!/usr/bin/env node
import readlineSync from 'readline-sync';

const fun = (n) => {
  if (n === 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const func = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`'Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const getRandomNumber = () => Math.floor(Math.random() * 100);
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const youAnswer = readlineSync.question('You answer: ');
    if (fun(number) === true) {
      if (youAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }
    if (fun(number) === false) {
      if (youAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
  return '0';
};
func();
