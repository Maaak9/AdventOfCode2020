import puzzleData from './puzzleData.js';

let dataInstructions = puzzleData.split('\n').map((row) => {
  let data = row.split(' ')
  return {
    instruction: data[0],
    value: data[1],
    didrun: false,
  };
});

const runProgram = () => {
  let accumulator = 0;
  let lastPointer = 0;
  let pointer = 0;
  while(pointer !== dataInstructions.length) {
    let currentInstruction = dataInstructions[pointer];

    if (!currentInstruction.didrun) {
      switch(currentInstruction.instruction) {
        case "acc": {
          accumulator += parseInt(currentInstruction.value);
          currentInstruction.didrun = true;
          pointer++;
          break;
        }
        case "nop": {
          currentInstruction.didrun = true;
          pointer++;
          break;
        }
        case "jmp": {
          currentInstruction.didrun = true;
          lastPointer = pointer;
          pointer = pointer + parseInt(currentInstruction.value);
          break;
        }
      }
    } else {
      // End we are in a loop
      console.warn('1111');

      pointer = dataInstructions.length;
    }
  }

  return { accumulator };
}

const { accumulator } = runProgram();

console.warn('the accumulator when we run a command a second time: ', accumulator);

