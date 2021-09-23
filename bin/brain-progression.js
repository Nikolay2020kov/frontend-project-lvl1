#!/usr/bin/env node
import readlineSync from 'readline-sync';

let results;
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (progressionStep, progressionSize, firstElement, hiddenIndex) => {
  const progresionArray = [];
  progresionArray.push(firstElement);
  for (let i = 1; i < progressionSize; i += 1) {
    const progressionEl = firstElement + progressionStep * i;
    progresionArray.push(progressionEl);
  }
  progresionArray[hiddenIndex] = '..';
  return progresionArray.join(' ');
};

const generateRound = () => {
  const progressionSize = 10;
  const step = getRandom(0, 15);
  const firstElement = getRandom(0, 15);
  const hiddenIndex = getRandom(0, progressionSize);
  const progression = generateProgression(step, progressionSize, firstElement, hiddenIndex);
  const question = progression;
  const result = firstElement + (hiddenIndex * step);
  return [question, result];
};

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

const func = () => {
  const vvod = generateRound();
  console.log(`Question: ${vvod[0]}`);
  const userAnswer = Number(readlineSync.question('You answer: '));
  if (userAnswer !== vvod[1]) {
    console.log(`Question: ${vvod[0]}
Your answer: ${userAnswer}
'${userAnswer}' is wrong answer ;(. Correct answer was ${vvod[1]}.`);
  console.log(`Let's try again, ${name}!`);
  return '0'; 
  }
  console.log('Correct!');
  return '1';
};

for (let i = 0; i < 3; i += 1) {
  results = func();
  if (results === `0`) {
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
