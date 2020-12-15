import puzzleData from './puzzleData.js';

const XMSCode = puzzleData.split('\n');

const invalidNumber = 1492208709;

const findInvalidNumber = (invalidNumber, listOfCodes) => {
  for (let i = 0; i < listOfCodes.length; i++) {
    let sum = parseInt(listOfCodes[i]);
    for (let y = i+1; y < listOfCodes.length; y++) {
      sum += parseInt(listOfCodes[y]);
      if (sum === invalidNumber) {
        return [i, y];
      }
      if (sum > invalidNumber) {
        y = 9999999;
      }
    }
  }
};

const sumRange = findInvalidNumber(invalidNumber, XMSCode);

const numbers = XMSCode.slice(sumRange[0], sumRange[1]).sort((a,b) => {
  return parseInt(a) - parseInt(b)
});

console.warn('numbers',numbers);
const min = parseInt(numbers[0]);
const max = parseInt(numbers[numbers.length -1]);
console.warn(`The sum of ${min} + ${max} = ${min + max}`)


