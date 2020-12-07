import puzzleData from './puzzleData.js';

const splitIntoGroups = puzzleData.split('\n\n');

let sumOfAnsweredQuestions = 0;

splitIntoGroups.forEach((group) => {
  let answeredQuestions = {};
  const persons = group.split('\n');

  persons.forEach((person) => {
    person.split('').forEach((question) => {
      answeredQuestions[question] = true;
    })
  });

  sumOfAnsweredQuestions += Object.keys(answeredQuestions).length;
});

console.warn(`Sum of answered questions by group: ${sumOfAnsweredQuestions}`);


/** PART 2 */

let sumOfAnsweredQuestionsPart2 = 0;

splitIntoGroups.forEach((group) => {
  let answeredQuestions = {};
  const persons = group.split('\n');

  persons.forEach((person) => {
    person.split('').forEach((question) => {
      answeredQuestions[question] =  answeredQuestions[question] ? answeredQuestions[question] + 1 : 1;
    })
  });

  Object.keys(answeredQuestions).forEach((question) => {
    if (answeredQuestions[question] === persons.length) {
      sumOfAnsweredQuestionsPart2++;
    }
  });
});

console.warn(`Sum of answered questions by group: ${sumOfAnsweredQuestionsPart2}`);