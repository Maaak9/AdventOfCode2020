import boardingPasses from './puzzleData.js';

const getRowNumber = (rowCode) => {
  let back = 128;
  let front = 0;
  rowCode.split('').forEach((code) => {
    if (code === 'F') {
      back = back - ((back - front) / 2);
    } else {
      front = front + ((back - front) / 2);
    }
  });


  if (rowCode[6] === 'F') return front;
  return back - 1;
}

const getColNumber = (colCode) => {
  let right = 8;
  let left = 0;
  colCode.split('').forEach((code) => {
    if (code === 'L') {
      right =  right - ((right - left) / 2);
    } else {
      left = left + ((right - left) / 2);
    }
  });

  if (colCode[2] === 'R') return right - 1;
  return left;
}

const getSeatNumber = (boardingPass) => {
  const rowCode = boardingPass.substring(0,7);
  const colCode = boardingPass.substring(7, 10);

  const rowNumber = getRowNumber(rowCode);
  const colNumber = getColNumber(colCode);

  return (rowNumber * 8) + colNumber;
}

let highestSeatId = 0;
boardingPasses.split('\n').forEach((boardingPass) => {
  const seatNumber = getSeatNumber(boardingPass);
  if (seatNumber > highestSeatId) highestSeatId = seatNumber;
})

console.warn('highestSeatId', highestSeatId);


/** Part 2 */

const seatIds = [];
boardingPasses.split('\n').forEach((boardingPass) => {
  seatIds.push(getSeatNumber(boardingPass));
});

seatIds.sort((a,b) => a - b);

for (let i = 1; i < seatIds.length -1; i++) {
  if (seatIds[i - 1] + 1 !== seatIds[i] && seatIds[i] ) {
    console.warn('the seat id is ', seatIds[i - 1] + 1)
    i = 100000;
  }
}