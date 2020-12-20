import puzzleData from './puzzleData.js'

let adapters = puzzleData
  .split('\n')
  .map(val => parseInt(val))
  .sort((a,b) => a - b);

// The charging outlet has an effective rating of 0 jolts
adapters.unshift(0);
// Finally, your device's built-in adapter is always 3 higher than the highest adapter, so its rating is 22 jolts (always a difference of 3).
adapters.push(adapters[adapters.length - 1] + 3);


let oneInDiff = 0;
let threeInDiff = 0;
for(let i = 0; i < adapters.length -1; i++) {
  if (adapters[i + 1] - adapters[i] === 1) oneInDiff++;
  if (adapters[i + 1] - adapters[i] === 3) threeInDiff++;
}

console.warn(`oneInDiff: ${oneInDiff} \nthreeInDiff: ${threeInDiff}`);
console.warn(`${oneInDiff} * ${threeInDiff} = ${oneInDiff * threeInDiff}`);



