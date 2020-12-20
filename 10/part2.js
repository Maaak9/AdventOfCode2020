import puzzleData from './puzzleData.js'

let adapters = puzzleData
  .split('\n')
  .map(val => parseInt(val))
  .sort((a,b) => a - b);

// The charging outlet has an effective rating of 0 jolts
adapters.unshift(0);
// Finally, your device's built-in adapter is always 3 higher than the highest adapter, so its rating is 22 jolts (always a difference of 3).
adapters.push(adapters[adapters.length - 1] + 3);


const tribonacciSequence = [1, 1, 2, 4, 7, 13, 24, 44, 81, 149];
function getTribonacci(num) {
  if (num > tribonacciSequence.length)
    throw `Can't calculate tribonacci number for ${num}`;

  return tribonacciSequence[num - 1];
}

const part2 = () => {
  let multiplier = 1;
  let currentRun = 1;
  for (let joltage of adapters) {
    if (adapters.includes(joltage + 1)) {
      currentRun++;
    } else {
      multiplier *= getTribonacci(currentRun);
      currentRun = 1;
    }
  }
  return multiplier;
}


const test = part2();

console.warn('What is the total number of distinct ways you can arrange the adapters to connect the charging outlet to your device? : ', test);

